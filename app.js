// app.js - C-GAB Practice Application Logic (Passage-Grouped Version)

// --- State Management ---
let activeCategory = 'verbal'; // 'verbal', 'nonverbal', 'english', 'full'
let testPassages = []; // Selected passages/tables for the current session
let testQuestions = []; // Flat list of all questions in the session (e.g. 8 questions)
let currentPassageIndex = 0; // Index in testPassages
let focusedQuestionIndex = 0; // Flat index in testQuestions representing keyboard/active focus
let userAnswers = {}; // { questionId: selectedOptionLabel }
let flaggedQuestions = {}; // { questionId: boolean }
let timeElapsed = {}; // { questionId: seconds } - time spent per question
let timerInterval = null;
let secondsLeft = 0;
let totalTestTime = 0; // Configured total test time in seconds
let autoSubmitOnTimeout = true;
let activeFilter = 'all';

// --- DOM Elements ---
const screens = {
  setup: document.getElementById('setup-screen'),
  test: document.getElementById('test-screen'),
  results: document.getElementById('results-screen')
};

// Setup Screen Elements
const categoryChips = document.querySelectorAll('.category-chip');
const qCountSlider = document.getElementById('q-count-slider');
const qCountVal = document.getElementById('q-count-val');
const timeLimitSlider = document.getElementById('time-limit-slider');
const timeLimitVal = document.getElementById('time-limit-val');
const autoSubmitToggle = document.getElementById('auto-submit-toggle');
const startTestBtn = document.getElementById('start-test-btn');
const historyListContainer = document.getElementById('history-list-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Test Screen Elements
const currentCategoryBadge = document.getElementById('current-category-badge');
const passageProgress = document.getElementById('passage-progress');
const timerDisplay = document.getElementById('timer-display');
const passageTitleDisplay = document.getElementById('passage-title-display');
const passageContainer = document.getElementById('passage-container');
const questionsList = document.getElementById('questions-list');
const navigatorGrid = document.getElementById('navigator-grid');
const prevPassageBtn = document.getElementById('prev-passage-btn');
const nextPassageBtn = document.getElementById('next-passage-btn');
const submitTestBtn = document.getElementById('submit-test-btn');

// Results Screen Elements
const scoreCircleProgress = document.getElementById('score-circle-progress');
const scorePctText = document.getElementById('score-pct-text');
const scoreFractionText = document.getElementById('score-fraction-text');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackDesc = document.getElementById('feedback-desc');
const statsGridContainer = document.getElementById('stats-grid-container');
const reviewListContainer = document.getElementById('review-list-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const retryTestBtn = document.getElementById('retry-test-btn');
const backToSetupBtn = document.getElementById('back-to-setup-btn');

// --- Helper Functions ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initSetupScreen();
  loadHistory();
  initTestScreenEvents();
  initKeyboardShortcuts();
  initResultsScreenEvents();
});

// --- Setup Screen Logic ---
function initSetupScreen() {
  // Category selection handler
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-category');
      
      adjustSlidersForCategory(activeCategory);
    });
  });

  // Slider change handlers
  qCountSlider.addEventListener('input', (e) => {
    qCountVal.textContent = `${e.target.value}問`;
  });

  timeLimitSlider.addEventListener('input', (e) => {
    timeLimitVal.textContent = `${e.target.value}分`;
  });

  // Start Test click
  startTestBtn.addEventListener('click', startTest);

  // Clear history click
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('すべての履歴を削除しますか？')) {
      localStorage.removeItem('cgab_history');
      loadHistory();
    }
  });

  // Default setup
  adjustSlidersForCategory('verbal');
}

function adjustSlidersForCategory(category) {
  let maxQuestions = 8;
  let defaultQuestions = 8;
  let defaultMinutes = 5;

  if (category === 'verbal') {
    maxQuestions = QUESTIONS_DB.verbal.length * 4; // 3 passages * 4 = 12
    defaultQuestions = 8;
    defaultMinutes = 4;
  } else if (category === 'nonverbal') {
    maxQuestions = QUESTIONS_DB.nonverbal.length * 4; // 2 tables * 4 = 8
    defaultQuestions = 8;
    defaultMinutes = 5;
  } else if (category === 'english') {
    maxQuestions = QUESTIONS_DB.english.length * 4; // 2 passages * 4 = 8
    defaultQuestions = 8;
    defaultMinutes = 4;
  } else if (category === 'full') {
    // Total combined questions (12 + 8 + 8 = 28)
    maxQuestions = (QUESTIONS_DB.verbal.length + QUESTIONS_DB.nonverbal.length + QUESTIONS_DB.english.length) * 4; // 28
    defaultQuestions = 16;
    defaultMinutes = 10;
  }

  qCountSlider.max = maxQuestions;
  qCountSlider.min = 4;
  qCountSlider.step = 4;
  qCountSlider.value = defaultQuestions;
  qCountVal.textContent = `${defaultQuestions}問`;

  timeLimitSlider.max = category === 'full' ? 45 : 20;
  timeLimitSlider.value = defaultMinutes;
  timeLimitVal.textContent = `${defaultMinutes}分`;
}

function startTest() {
  const count = parseInt(qCountSlider.value);
  totalTestTime = parseInt(timeLimitSlider.value) * 60;
  secondsLeft = totalTestTime;
  autoSubmitOnTimeout = autoSubmitToggle.checked;

  // Prepare questions and passages list
  testPassages = generateQuestions(activeCategory, count);
  
  // Flatten questions list for easier indexing/scoring
  testQuestions = [];
  testPassages.forEach(p => {
    p.questions.forEach(q => {
      // Bind passage details directly to the question for score logging
      q.parentPassageId = p.id;
      q.passageTitle = p.title;
      q.passageContent = p.passage;
      testQuestions.push(q);
    });
  });

  // Reset test variables
  currentPassageIndex = 0;
  focusedQuestionIndex = 0;
  userAnswers = {};
  flaggedQuestions = {};
  timeElapsed = {};
  testQuestions.forEach(q => {
    timeElapsed[q.id] = 0;
  });

  // UI transition
  screens.setup.classList.remove('active');
  screens.test.classList.add('active');

  // Start timers & render
  renderPassage(currentPassageIndex);
  startTimer();
}

function generateQuestions(category, count) {
  const numPassages = count / 4;

  if (category !== 'full') {
    // Single category setup: shuffle passages and select required count
    const passages = [...QUESTIONS_DB[category]];
    return shuffleArray(passages).slice(0, numPassages);
  } else {
    // Full test distribution: take passages from different categories
    const vP = [...QUESTIONS_DB.verbal];
    const nP = [...QUESTIONS_DB.nonverbal];
    const eP = [...QUESTIONS_DB.english];
    
    // Distribute passage count across categories
    let vCount = Math.floor(numPassages / 3);
    let nCount = Math.floor(numPassages / 3);
    let eCount = numPassages - vCount - nCount;

    // Clamp based on database size
    if (vCount > vP.length) vCount = vP.length;
    if (nCount > nP.length) nCount = nP.length;
    if (eCount > eP.length) eCount = eP.length;

    // Redraw remainder
    let currentTotal = vCount + nCount + eCount;
    if (currentTotal < numPassages) {
      let diff = numPassages - currentTotal;
      if (vCount + diff <= vP.length) vCount += diff;
      else vCount = vP.length;
    }

    const vSelected = shuffleArray(vP).slice(0, vCount);
    const nSelected = shuffleArray(nP).slice(0, nCount);
    const eSelected = shuffleArray(eP).slice(0, eCount);

    // Keep GAB order: Verbal -> Nonverbal -> English
    return [...vSelected, ...nSelected, ...eSelected];
  }
}

// --- Test Session Logic ---
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    secondsLeft--;
    
    // Add time spent on active questions
    // In GAB, time is logged per sub-question based on which one is currently focused/answered
    const curQ = testQuestions[focusedQuestionIndex];
    if (curQ) {
      timeElapsed[curQ.id]++;
    }

    updateTimerDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      if (autoSubmitOnTimeout) {
        alert('制限時間になりました。解答を自動終了します。');
        submitTest(true);
      } else {
        timerDisplay.classList.add('timer-warning');
        timerDisplay.textContent = '00:00';
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(Math.max(0, secondsLeft));
  
  if (secondsLeft <= 60) {
    timerDisplay.classList.add('timer-warning');
  } else {
    timerDisplay.classList.remove('timer-warning');
  }
}

function renderPassage(passageIndex) {
  if (passageIndex < 0 || passageIndex >= testPassages.length) return;
  currentPassageIndex = passageIndex;
  const passage = testPassages[passageIndex];

  // Update Category Badge
  let badgeText = '言語';
  let badgeClass = 'verbal';
  if (passage.id.startsWith('n')) {
    badgeText = '非言語';
    badgeClass = 'nonverbal';
  } else if (passage.id.startsWith('e')) {
    badgeText = '英語';
    badgeClass = 'english';
  }
  currentCategoryBadge.textContent = badgeText;
  currentCategoryBadge.className = `current-category-badge ${badgeClass}`;

  // Update progress text
  passageProgress.textContent = `大問 ${passageIndex + 1} / ${testPassages.length}`;

  // Render Passage/Table in left pane
  passageTitleDisplay.textContent = passage.title || '問題文';
  passageContainer.innerHTML = passage.passage;

  // Render right pane questions list
  questionsList.innerHTML = '';
  
  passage.questions.forEach((q, subIdx) => {
    // Find flat index
    const flatIndex = testQuestions.findIndex(tq => tq.id === q.id);
    const isFocused = flatIndex === focusedQuestionIndex;
    const isFlagged = flaggedQuestions[q.id] === true;

    // Create sub-question card
    const card = document.createElement('div');
    card.id = `q-card-${flatIndex}`;
    card.className = `sub-question-card ${isFocused ? 'active-focus' : ''}`;
    
    // Card header with Flag option
    const cardHeader = document.createElement('div');
    cardHeader.className = 'sub-question-header';
    cardHeader.innerHTML = `
      <span class="sub-question-no">設問 ${flatIndex + 1}</span>
      <button class="sub-flag-btn ${isFlagged ? 'flagged' : ''}">
        <span>${isFlagged ? '🚩' : '🏳️'}</span> 後で解く
      </button>
    `;

    // Flag button event
    const flagBtn = cardHeader.querySelector('.sub-flag-btn');
    flagBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card focus
      toggleFlag(q.id, flagBtn);
    });

    const cardText = document.createElement('div');
    cardText.className = 'sub-question-text';
    cardText.textContent = q.question;

    const optionsBox = document.createElement('div');
    optionsBox.className = 'sub-options-container';

    // Render options toggles
    q.options.forEach(opt => {
      const isSelected = userAnswers[q.id] === opt.label;
      const optRow = document.createElement('div');
      optRow.className = `sub-option-row ${isSelected ? 'selected' : ''}`;
      optRow.innerHTML = `
        <div class="sub-option-label">${opt.label}</div>
        <div class="sub-option-text">${opt.text}</div>
      `;
      optRow.addEventListener('click', (e) => {
        e.stopPropagation();
        selectAnswer(q.id, opt.label, optionsBox);
        setFocus(flatIndex);
      });
      optionsBox.appendChild(optRow);
    });

    card.appendChild(cardHeader);
    card.appendChild(cardText);
    card.appendChild(optionsBox);

    // Clicking anywhere on card sets focus
    card.addEventListener('click', () => {
      setFocus(flatIndex);
    });

    questionsList.appendChild(card);
  });

  // Render Navigator Sidebar
  renderNavigator();

  // Bottom navigation disabling/enabling
  prevPassageBtn.classList.toggle('btn-disabled', passageIndex === 0);
  
  if (passageIndex === testPassages.length - 1) {
    nextPassageBtn.textContent = '最後の文章';
    nextPassageBtn.classList.add('btn-disabled');
  } else {
    nextPassageBtn.textContent = '次の大問へ <span>→</span>';
    nextPassageBtn.classList.remove('btn-disabled');
  }

  // Scroll left pane to top
  document.getElementById('left-pane-card').scrollTop = 0;
  
  // Set focus to the first question of this passage if focus is not in this group
  const firstFlatIdx = testQuestions.findIndex(tq => tq.id === passage.questions[0].id);
  const lastFlatIdx = testQuestions.findIndex(tq => tq.id === passage.questions[passage.questions.length - 1].id);
  if (focusedQuestionIndex < firstFlatIdx || focusedQuestionIndex > lastFlatIdx) {
    setFocus(firstFlatIdx, false); // Don't scroll right pane automatically on initial load
  }
}

function setFocus(flatIndex, scrollIntoView = true) {
  if (flatIndex < 0 || flatIndex >= testQuestions.length) return;
  focusedQuestionIndex = flatIndex;

  // Update active-focus styling in cards
  const cards = questionsList.querySelectorAll('.sub-question-card');
  cards.forEach(card => {
    const cardId = card.getAttribute('id');
    if (cardId === `q-card-${flatIndex}`) {
      card.classList.add('active-focus');
      
      if (scrollIntoView) {
        // Scroll card nicely into view inside the pane-card container
        const pane = document.getElementById('right-pane-card');
        const offsetTop = card.offsetTop - pane.offsetTop - 12;
        pane.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      card.classList.remove('active-focus');
    }
  });

  // Update navigator highlight
  renderNavigator();
}

function toggleFlag(questionId, buttonEl) {
  flaggedQuestions[questionId] = !flaggedQuestions[questionId];
  const isFlagged = flaggedQuestions[questionId] === true;
  
  if (buttonEl) {
    buttonEl.classList.toggle('flagged', isFlagged);
    buttonEl.querySelector('span').textContent = isFlagged ? '🚩' : '🏳️';
  }
  
  renderNavigator();
}

function selectAnswer(questionId, label, optionsBoxEl) {
  userAnswers[questionId] = label;
  
  if (optionsBoxEl) {
    const rows = optionsBoxEl.querySelectorAll('.sub-option-row');
    rows.forEach(row => {
      const lbl = row.querySelector('.sub-option-label').textContent;
      if (lbl === label) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    });
  }

  renderNavigator();
}

function renderNavigator() {
  navigatorGrid.innerHTML = '';
  testQuestions.forEach((q, idx) => {
    const isCurrent = idx === focusedQuestionIndex;
    const isAnswered = userAnswers[q.id] !== undefined;
    const isFlagged = flaggedQuestions[q.id] === true;

    const navBtn = document.createElement('button');
    navBtn.className = `nav-item ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}`;
    navBtn.textContent = idx + 1;
    navBtn.addEventListener('click', () => {
      // Find passage containing this question
      const pIdx = testPassages.findIndex(p => p.questions.some(pq => pq.id === q.id));
      if (pIdx !== currentPassageIndex) {
        renderPassage(pIdx);
      }
      setFocus(idx);
    });
    navigatorGrid.appendChild(navBtn);
  });
}

function initTestScreenEvents() {
  // Navigation buttons
  prevPassageBtn.addEventListener('click', () => {
    if (currentPassageIndex > 0) {
      renderPassage(currentPassageIndex - 1);
      // Focus first question in previous passage
      const passage = testPassages[currentPassageIndex];
      const flatIdx = testQuestions.findIndex(tq => tq.id === passage.questions[0].id);
      setFocus(flatIdx);
    }
  });

  nextPassageBtn.addEventListener('click', () => {
    if (currentPassageIndex < testPassages.length - 1) {
      renderPassage(currentPassageIndex + 1);
      // Focus first question in next passage
      const passage = testPassages[currentPassageIndex];
      const flatIdx = testQuestions.findIndex(tq => tq.id === passage.questions[0].id);
      setFocus(flatIdx);
    }
  });

  // End / Submit button
  submitTestBtn.addEventListener('click', () => submitTest(false));
}

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (!screens.test.classList.contains('active')) return;

    const key = e.key.toUpperCase();
    const activePassage = testPassages[currentPassageIndex];
    if (!activePassage) return;

    // Up/Down Arrows / Tab to move focused question within the active passage
    if (key === 'ARROWUP') {
      e.preventDefault();
      // Move focus up if within the current passage
      const firstFlatIdx = testQuestions.findIndex(tq => tq.id === activePassage.questions[0].id);
      if (focusedQuestionIndex > firstFlatIdx) {
        setFocus(focusedQuestionIndex - 1);
      }
    } else if (key === 'ARROWDOWN') {
      e.preventDefault();
      // Move focus down if within the current passage
      const lastFlatIdx = testQuestions.findIndex(tq => tq.id === activePassage.questions[activePassage.questions.length - 1].id);
      if (focusedQuestionIndex < lastFlatIdx) {
        setFocus(focusedQuestionIndex + 1);
      }
    } 
    // Left/Right Arrow to navigate between passages
    else if (key === 'ARROWLEFT') {
      if (currentPassageIndex > 0) {
        renderPassage(currentPassageIndex - 1);
        const p = testPassages[currentPassageIndex];
        const fIdx = testQuestions.findIndex(tq => tq.id === p.questions[0].id);
        setFocus(fIdx);
      }
    } else if (key === 'ARROWRIGHT') {
      if (currentPassageIndex < testPassages.length - 1) {
        renderPassage(currentPassageIndex + 1);
        const p = testPassages[currentPassageIndex];
        const fIdx = testQuestions.findIndex(tq => tq.id === p.questions[0].id);
        setFocus(fIdx);
      }
    } 
    // Flag toggle
    else if (key === 'F') {
      const curQ = testQuestions[focusedQuestionIndex];
      if (curQ) {
        const card = document.getElementById(`q-card-${focusedQuestionIndex}`);
        const flagBtn = card ? card.querySelector('.sub-flag-btn') : null;
        toggleFlag(curQ.id, flagBtn);
      }
    }
    // Option selection (A-E or 1-5) for focused question
    else {
      const curQ = testQuestions[focusedQuestionIndex];
      if (!curQ) return;

      let optionToSelect = null;
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        optionToSelect = key;
      } else if (['1', '2', '3', '4', '5'].includes(key)) {
        const optionIndex = parseInt(key) - 1;
        if (optionIndex < curQ.options.length) {
          optionToSelect = curQ.options[optionIndex].label;
        }
      }

      if (optionToSelect) {
        const card = document.getElementById(`q-card-${focusedQuestionIndex}`);
        const optionsBox = card ? card.querySelector('.sub-options-container') : null;
        selectAnswer(curQ.id, optionToSelect, optionsBox);
      }
    }
  });
}

function submitTest(force = false) {
  if (!force) {
    const totalQ = testQuestions.length;
    const answeredQ = Object.keys(userAnswers).length;
    const unansweredQ = totalQ - answeredQ;

    let message = '解答を終了して結果を集計しますか？';
    if (unansweredQ > 0) {
      message = `未回答の問題が ${unansweredQ} 問あります。本当に終了しますか？`;
    }

    if (!confirm(message)) return;
  }

  // Clear timers
  if (timerInterval) clearInterval(timerInterval);

  // Transition UI
  screens.test.classList.remove('active');
  screens.results.classList.add('active');

  // Compute Results
  showResults();
}

// --- Results Screen Logic ---
function showResults() {
  let score = 0;
  const total = testQuestions.length;
  
  // Calculate breakdown categories
  let verbalCorrect = 0, verbalTotal = 0;
  let nonverbalCorrect = 0, nonverbalTotal = 0;
  let englishCorrect = 0, englishTotal = 0;
  let totalTime = 0;

  testQuestions.forEach(q => {
    const correctAns = q.answer;
    const userAns = userAnswers[q.id];
    const isCorrect = userAns === correctAns;
    const timeSpent = timeElapsed[q.id] || 0;
    totalTime += timeSpent;

    if (isCorrect) score++;

    if (q.id.startsWith('v')) {
      verbalTotal++;
      if (isCorrect) verbalCorrect++;
    } else if (q.id.startsWith('n')) {
      nonverbalTotal++;
      if (isCorrect) nonverbalCorrect++;
    } else if (q.id.startsWith('e')) {
      englishTotal++;
      if (isCorrect) englishCorrect++;
    }
  });

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  // Render score circle graph SVG
  scorePctText.textContent = `${pct}%`;
  scoreFractionText.textContent = `${score} / ${total}問正解`;
  
  // SVG perimeter calculations: radius is 60, perimeter = 2 * PI * 60 = 376.99
  const circleOffset = 377 - (377 * pct) / 100;
  scoreCircleProgress.style.strokeDashoffset = circleOffset;

  // Set Feedback header
  let feedbackH = 'お疲れ様でした！';
  let feedbackT = '解答スピードと正確さを高めるために、さらに反復して練習を重ねましょう！';

  if (pct >= 85) {
    feedbackH = '素晴らしいスコアです！🎖️';
    feedbackT = 'C-GABの合格ラインを大きく超えています。本番でもこの調子で落ち着いて臨みましょう！';
  } else if (pct >= 65) {
    feedbackH = '合格圏内レベル！👍';
    feedbackT = '多くの問題に正答できています。間違えた箇所の解説を読み、さらなるスコアアップを目指しましょう。';
  } else {
    feedbackH = '弱点を強化しましょう！💪';
    feedbackT = '焦る必要はありません。まずは時間無制限でじっくり各問題の論理構成や計算式を理解することから始めましょう。';
  }
  feedbackTitle.textContent = feedbackH;
  feedbackDesc.textContent = feedbackT;

  // Render Stats Grid
  const avgSpeed = total > 0 ? Math.round(totalTime / total) : 0;
  const flaggedCount = Object.values(flaggedQuestions).filter(f => f).length;
  
  statsGridContainer.innerHTML = '';
  
  // Speed stat card
  createStatCard('平均解答スピード', `${avgSpeed} 秒 / 問`, 100);
  
  // Category cards
  if (verbalTotal > 0) {
    const vPct = Math.round((verbalCorrect / verbalTotal) * 100);
    createStatCard('言語 正解率', `${vPct}% (${verbalCorrect}/${verbalTotal})`, vPct);
  }
  if (nonverbalTotal > 0) {
    const nPct = Math.round((nonverbalCorrect / nonverbalTotal) * 100);
    createStatCard('非言語 正解率', `${nPct}% (${nonverbalCorrect}/${nonverbalTotal})`, nPct);
  }
  if (englishTotal > 0) {
    const ePct = Math.round((englishCorrect / englishTotal) * 100);
    createStatCard('英語 正解率', `${ePct}% (${englishCorrect}/${englishTotal})`, ePct);
  }
  
  // Flag stat card
  createStatCard('フラグチェック数', `${flaggedCount} 問`, 100);

  // Render Detailed Review list
  renderReviewList();

  // Save score log to localstorage
  saveScoreLog({
    date: new Date().toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    category: getCategoryName(activeCategory),
    score: score,
    total: total,
    pct: pct,
    avgSpeed: avgSpeed
  });
}

function createStatCard(label, val, percent) {
  const card = document.createElement('div');
  card.className = 'stat-card';
  card.innerHTML = `
    <div class="stat-label">${label}</div>
    <div class="stat-val">${val}</div>
    <div class="stat-progress-bar">
      <div class="stat-progress-fill" style="width: 0%;"></div>
    </div>
  `;
  statsGridContainer.appendChild(card);
  
  // Trigger transition bar fill
  setTimeout(() => {
    const fill = card.querySelector('.stat-progress-fill');
    if (fill) fill.style.width = `${percent}%`;
  }, 100);
}

function renderReviewList() {
  reviewListContainer.innerHTML = '';

  testQuestions.forEach((q, idx) => {
    const correctAns = q.answer;
    const userAns = userAnswers[q.id];
    const isCorrect = userAns === correctAns;
    const isFlagged = flaggedQuestions[q.id] === true;
    const timeSpent = timeElapsed[q.id] || 0;

    // Filter validation
    if (activeFilter === 'correct' && !isCorrect) return;
    if (activeFilter === 'incorrect' && isCorrect) return;
    if (activeFilter === 'flagged' && !isFlagged) return;

    // Create expandable card
    const card = document.createElement('div');
    card.className = 'review-card';
    
    let resultText = '未回答';
    let resultClass = 'unanswered';
    if (userAns !== undefined) {
      resultText = isCorrect ? '正解' : '不正解';
      resultClass = isCorrect ? 'correct' : 'incorrect';
    }

    let categoryLabel = '言語';
    if (q.id.startsWith('n')) categoryLabel = '非言語';
    if (q.id.startsWith('e')) categoryLabel = '英語';

    card.innerHTML = `
      <div class="review-card-header">
        <div class="review-card-meta">
          <span class="review-card-qno">設問 ${idx + 1}</span>
          <span class="result-tag ${resultClass}">${resultText}</span>
          ${isFlagged ? '<span style="color: var(--warning);">🚩</span>' : ''}
        </div>
        <div class="review-card-title">(${categoryLabel}) ${q.question}</div>
        <div class="review-card-toggle">▼</div>
      </div>
      <div class="review-card-content">
        <div class="review-answers-status">
          <div class="review-answer-pill">解答時間: <strong>${timeSpent}秒</strong></div>
          <div class="review-answer-pill">あなたの解答: <span style="background: ${isCorrect ? '#ecfdf5' : '#fef2f2'}; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">${userAns || '未回答'}</span></div>
          <div class="review-answer-pill">正解: <span style="background: #ecfdf5; color: var(--success);">${correctAns}</span></div>
        </div>
        <div class="review-grid">
          <div>
            <div class="review-block-title">問題文・図表</div>
            <div style="max-height: 240px; overflow-y: auto; background-color: #f8fafc; padding: 12px; border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--border-light); line-height: 1.6;">
              ${q.passageContent}
            </div>
          </div>
          <div>
            <div class="review-block-title">設問および選択肢</div>
            <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; line-height: 1.5;">
              <strong style="margin-bottom: 4px; color: var(--text-primary);">Q. ${q.question}</strong>
              ${q.options.map(opt => `
                <div style="display: flex; gap: 8px; ${opt.label === correctAns ? 'color: var(--success); font-weight: bold;' : ''}">
                  <span style="min-width: 20px;">${opt.label}:</span>
                  <span>${opt.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div>
          <div class="review-block-title">💡 解説</div>
          <div class="review-explanation">${q.explanation}</div>
        </div>
      </div>
    `;

    // Toggle expand/collapse
    const header = card.querySelector('.review-card-header');
    header.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });

    reviewListContainer.appendChild(card);
  });

  if (reviewListContainer.children.length === 0) {
    reviewListContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 0.9rem;">該当する問題はありません。</div>`;
  }
}

function initResultsScreenEvents() {
  // Review filter clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderReviewList();
    });
  });

  // Action buttons
  retryTestBtn.addEventListener('click', () => {
    screens.results.classList.remove('active');
    startTest();
  });

  backToSetupBtn.addEventListener('click', () => {
    screens.results.classList.remove('active');
    screens.setup.classList.add('active');
    loadHistory();
  });
}

function getCategoryName(category) {
  switch(category) {
    case 'verbal': return '言語';
    case 'nonverbal': return '非言語';
    case 'english': return '英語';
    case 'full': return '通し試験';
    default: return '';
  }
}

// --- History Tracker Logic ---
function saveScoreLog(scoreLog) {
  let logs = [];
  try {
    logs = JSON.parse(localStorage.getItem('cgab_history')) || [];
  } catch (e) {
    logs = [];
  }
  
  logs.unshift(scoreLog); // Add to top
  // Keep last 10 attempts
  if (logs.length > 10) logs.pop();
  
  localStorage.setItem('cgab_history', JSON.stringify(logs));
}

function loadHistory() {
  historyListContainer.innerHTML = '';
  let logs = [];
  try {
    logs = JSON.parse(localStorage.getItem('cgab_history')) || [];
  } catch (e) {
    logs = [];
  }

  if (logs.length === 0) {
    historyListContainer.innerHTML = `
      <div style="color: var(--text-muted); text-align: center; padding: 20px; font-size: 0.8rem;">
        履歴がありません。テストを完了するとここに記録されます。
      </div>
    `;
    return;
  }

  logs.forEach(log => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-item-category">${log.category} (${log.total}問)</span>
      <span class="history-item-score">${log.pct}% 正解</span>
      <span class="history-item-time">${log.avgSpeed}秒/問</span>
      <span class="history-item-date">${log.date}</span>
    `;
    historyListContainer.appendChild(item);
  });
}
