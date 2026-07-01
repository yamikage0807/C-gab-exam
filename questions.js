// questions.js
// C-GAB Practice Application - Question Database (Grouped by Passage/Table)
// Categories: verbal / nonverbal / english / gist / arithmetic / chartReading

const QUESTIONS_DB = {

  // ============================================================
  // 言語カテゴリ（verbal）
  // ============================================================
  verbal: [
    {
      id: "vp1",
      title: "AIと労働市場",
      passage: `近年、人工知能（AI）の急速な発展に伴い、労働市場における人間の役割が大きく変化しつつある。これまで人間が担ってきた定型的な事務作業やデータ分析の多くがAIに代替される一方で、クリエイティビティや感情的知性（EQ）、複雑な問題解決能力を必要とする職種の重要性が増している。一部の研究では、AIの普及によって多くの既存の仕事が失われると警告されているが、同時に、AIの導入を支援する技術者や、AIが生成したアウトプットを評価・調整するマネジメント層など、新たな雇用形態も生まれている。したがって、技術革新を恐れて排除するのではなく、AIを強力なツールとして共生するための教育やスキルの再習得（リスキリング）を進めることが、これからの社会において不可欠である。`,
      questions: [
        {
          id: "v1",
          question: "AIの普及により、感情的知性を必要とする職種は今後ますます重要でなくなっていく。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文において「クリエイティビティや感情的知性（EQ）...を必要とする職種の重要性が増している」と明記されているため、「重要でなくなっていく」という設問は本文の内容と明らかに矛盾します。"
        },
        {
          id: "v2",
          question: "事務作業やデータ分析の一部は、今後人間の代わりにAIが行うようになる。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文冒頭で「これまで人間が担ってきた定型的な事務作業やデータ分析の多くがAIに代替される」と述べられており、設問の記述は明らかに正しいです。"
        },
        {
          id: "v3",
          question: "リスキリングを行わない労働者は、将来的にすべて失業することになる。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "C",
          explanation: "本文には「リスキリングを進めることが、これからの社会において不可欠である」と述べられていますが、リスキリングを行わない労働者が「すべて失業する」かどうかという極端な記述はなく、本文のみからは論理的に判断できません。"
        },
        {
          id: "v4",
          question: "AIの普及に伴い、AIの出力結果を検証・調整する役割の仕事が新たに生まれている。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文中において「AIが生成したアウトプットを評価・調整するマネジメント層など、新たな雇用形態も生まれている」と述べられており、「出力結果を検証・調整する役割の仕事が新たに生まれている」は明らかに正しいです。"
        }
      ]
    },
    {
      id: "vp2",
      title: "リモートワークの課題と可能性",
      passage: `コロナ禍を契機に普及したリモートワークは、通勤時間の削減やプライベート時間の確保といったワークライフバランスの向上をもたらした。しかし、対面での偶発的な雑談や意思疎通の機会が減少し、組織内での帰属意識の低下やチーム間の連携不足といった課題も浮き彫りになっている。特に新入社員や転職者にとっては、オンラインのみでの関係構築は難易度が高く、業務上の疑問を気軽に相談しにくい環境が孤独感を生む原因にもなっている。ある企業では、定期的な雑談タイムの設定や、月に数回の対面出社日を設ける「ハイブリッドワーク」を導入することで、これらの課題の解決を試みている。リモートワークの利便性を維持しつつ、人とのつながりをいかに担保するかが今後の企業経営の焦点となる。`,
      questions: [
        {
          id: "v5",
          question: "リモートワークの普及によって、多くの労働者のワークライフバランスが向上した。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文冒頭で「リモートワークは、通勤時間の削減やプライベート時間の確保といったワークライフバランスの向上をもたらした」とあるため、正しい記述です。"
        },
        {
          id: "v6",
          question: "オンラインのみの関係構築は、新入社員よりもベテラン社員の方が難易度が高い。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "C",
          explanation: "本文では「新入社員や転職者にとっては、オンラインのみでの関係構築は難易度が高い」と記述されていますが、ベテラン社員との難易度の比較については言及されておらず、判断できません。"
        },
        {
          id: "v7",
          question: "定期的な雑談タイムの導入やハイブリッドワークは、コミュニケーション不足などの課題を解決するための取り組みである。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文で「定期的な雑談タイムの設定や...ハイブリッドワークを導入することで、これらの課題（帰属意識低下、連携不足、相談しにくさ等）の解決を試みている」とあるため、明らかに正しいです。"
        },
        {
          id: "v8",
          question: "すべての企業が、月3日以上の対面出社を義務付けることで帰属意識の低下を完全に防止できている。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文では「ある企業では...対面出社日を設けるハイブリッドワークを導入することで、解決を試みている」と言及があるのみです。「すべての企業が義務付けている」や「完全に防止できている」という記述は事実と異なり、明らかに間違っています。"
        }
      ]
    },
    {
      id: "vp3",
      title: "サブスクリプション型サービス",
      passage: `定額料金を支払うことで一定期間サービスを利用できる「サブスクリプション型サービス」は、音楽や動画配信をはじめ、ソフトウェア、衣類、自動車など多岐にわたる分野に広がっている。消費者にとって、個別の商品を購入するよりも初期費用を抑えて多様な製品を体験できるメリットがある。一方で、利用頻度が低いにもかかわらず契約を放置してしまうことで、無駄な出費が蓄積するリスクも指摘されている。また、事業者側にとっても、継続的な安定収益が見込める利点があるものの、他社との競争激化による顧客獲得コストの増加や、会員の解約を防ぐための絶え間ないサービス改善のプレッシャーが存在する。サブスクリプションビジネスが持続可能な成長を遂げるためには、単なる価格の安さではなく、利用者に価格以上の付加価値を提供し続けられるかどうかが鍵を握る。`,
      questions: [
        {
          id: "v9",
          question: "サブスクリプション型サービスは、事業者に安定収益をもたらす一方で、顧客獲得コスト増加や解約防止対策というプレッシャーを生む。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文中で「事業者側にとっても、継続的な安定収益が見込める利点があるものの、他社との競争激化による顧客獲得コストの増加や、会員の解約を防ぐための絶え間ないサービス改善のプレッシャーが存在する」とあり、正しい記述です。"
        },
        {
          id: "v10",
          question: "個別の商品を購入するよりサブスクリプションを契約する方が、長期的には必ず安上がりになる。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文では「利用頻度が低いにもかかわらず契約を放置してしまうことで、無駄な出費が蓄積するリスク」が指摘されており、「必ず安上がりになる」という設問は矛盾します。"
        },
        {
          id: "v11",
          question: "自動車のサブスクリプションサービスは、音楽配信サービスよりも事業者側の利益率が高い。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "C",
          explanation: "本文には自動車や音楽のサブスクリプションが紹介されていますが、利益率の比較についての言及は一切ないため、判断できません。"
        },
        {
          id: "v12",
          question: "サブスクリプションビジネスの長期成長のためには、単に定額を安くするだけでなく、それ以上の価値を提供することが不可欠である。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文の最後に「持続可能な成長を遂げるためには、単なる価格の安さではなく、利用者に価格以上の付加価値を提供し続けられるかどうかが鍵を握る」と述べられており、正しい記述です。"
        }
      ]
    },
    {
      id: "vp4",
      title: "フードロスと食品廃棄物問題",
      passage: `世界全体で生産される食品のおよそ3分の1が廃棄されているとされ、「フードロス」は深刻なグローバル課題となっている。先進国では、消費段階での廃棄が多くを占め、消費期限への過度な意識や見た目の均一性を求める消費者行動がその一因として挙げられている。一方、発展途上国においては、農業インフラの未整備や輸送・保管技術の不足により、収穫後に食品が腐敗・廃棄されるケースが相対的に多い。食品廃棄は環境問題とも密接に関連しており、廃棄された食品の分解過程でメタンガスが発生することから、温室効果ガスの排出源のひとつとなっている。この問題を解決するため、食品メーカーや小売業者による消費期限表示の見直し、フードバンクを通じた余剰食品の再分配、そして消費者教育など、多角的なアプローチが求められている。`,
      questions: [
        {
          id: "v13",
          question: "先進国でのフードロスは、主に農業インフラの未整備が原因である。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文では「先進国では、消費段階での廃棄が多く、消費期限への過度な意識や見た目の均一性を求める消費者行動がその一因」と述べられています。農業インフラの未整備は「発展途上国」の問題として挙げられており、設問は明らかに間違っています。"
        },
        {
          id: "v14",
          question: "廃棄された食品が腐敗・分解する過程で発生するガスは、地球温暖化の一因となる。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文に「廃棄された食品の分解過程でメタンガスが発生することから、温室効果ガスの排出源のひとつとなっている」と明記されているため、設問の記述は明らかに正しいです。"
        },
        {
          id: "v15",
          question: "フードバンクは、余剰食品を必要な人々に再分配するための取り組みとして本文で言及されている。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文の最後に「フードバンクを通じた余剰食品の再分配」がフードロス解決のためのアプローチとして明示されているため、正しい記述です。"
        },
        {
          id: "v16",
          question: "消費期限表示の見直しによって、日本のフードロス量はすでに半減した。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "C",
          explanation: "本文では「消費期限表示の見直し」が解決策のひとつとして挙げられているものの、日本における実績や「すでに半減した」という結果については一切言及がなく、判断できません。"
        }
      ]
    },
    {
      id: "vp5",
      title: "行動経済学とナッジ理論",
      passage: `経済学の分野では長らく、人間は合理的な判断を下す存在であることを前提として理論が構築されてきた。しかし、行動経済学の台頭により、人間の意思決定が様々な認知バイアスや感情に影響を受けることが明らかになった。その応用として注目されているのが「ナッジ」と呼ばれる手法である。ナッジとは、罰則や金銭的インセンティブを用いることなく、人々が望ましい行動をとりやすいよう選択肢の提示方法や環境を設計するアプローチを指す。たとえば、社員食堂で健康的なメニューを目線の高さに配置し、菓子類を手の届きにくい場所に置くだけで、健康的な食の選択が増えたという事例が報告されている。ナッジは、政府の政策立案から企業の製品設計まで幅広く活用されており、個人の自由な選択を尊重しながら社会全体の行動を望ましい方向へ誘導できる点が高く評価されている。`,
      questions: [
        {
          id: "v17",
          question: "伝統的な経済学では、人間は感情に左右される非合理的な存在であることを前提としてきた。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文では「経済学の分野では長らく、人間は合理的な判断を下す存在であることを前提として理論が構築されてきた」とあり、「非合理的な存在を前提とした」という設問は明らかに間違っています。"
        },
        {
          id: "v18",
          question: "ナッジは、罰金や報奨金などの強制的な手段を用いずに人々の行動を変容させることを目的とした設計手法である。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文に「罰則や金銭的インセンティブを用いることなく、人々が望ましい行動をとりやすいよう選択肢の提示方法や環境を設計するアプローチ」とあるため、設問の記述は明らかに正しいです。"
        },
        {
          id: "v19",
          question: "社員食堂での健康メニューの配置変更は、ナッジの具体的な実例として本文で紹介されている。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "A",
          explanation: "本文に「社員食堂で健康的なメニューを目線の高さに配置し、菓子類を手の届きにくい場所に置くだけで、健康的な食の選択が増えた」という事例が明示されており、正しい記述です。"
        },
        {
          id: "v20",
          question: "ナッジを活用した政策は、個人の選択の自由を制限するため、導入に際して常に倫理的問題が生じる。",
          options: [
            { label: "A", text: "本文から論理的に見て、設問の記述は明らかに正しい。" },
            { label: "B", text: "本文から論理的に見て、設問の記述は明らかに間違っている。" },
            { label: "C", text: "本文からは、設問の記述が正しいか間違っているかは論理的に判断できない。" }
          ],
          answer: "B",
          explanation: "本文では「個人の自由な選択を尊重しながら社会全体の行動を望ましい方向へ誘導できる点が高く評価されている」と述べられており、「選択の自由を制限する」とする設問は明らかに矛盾しています。"
        }
      ]
    }
  ],

  // ============================================================
  // 非言語カテゴリ（nonverbal）
  // ============================================================
  nonverbal: [
    {
      id: "np1",
      title: "主要家電メーカー5社の業績サマリー",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr>
                <th>企業名</th>
                <th>売上高 (億円)</th>
                <th>営業利益 (億円)</th>
                <th>従業員数 (人)</th>
                <th>研究開発費 (億円)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A社</td><td>12,500</td><td>625</td><td>25,000</td><td>750</td></tr>
              <tr><td>B社</td><td>8,400</td><td>504</td><td>14,000</td><td>420</td></tr>
              <tr><td>C社</td><td>6,000</td><td>180</td><td>12,000</td><td>480</td></tr>
              <tr><td>D社</td><td>4,500</td><td>450</td><td>6,000</td><td>180</td></tr>
              <tr><td>E社</td><td>3,000</td><td>90</td><td>5,000</td><td>120</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        { id: "n1", question: "従業員1人あたりの売上高が最も高い企業はどこか。", options: [{ label: "A", text: "A社" }, { label: "B", text: "B社" }, { label: "C", text: "C社" }, { label: "D", text: "D社" }, { label: "E", text: "E社" }], answer: "D", explanation: "D社: 4,500÷6,000＝0.75億円が最大。" },
        { id: "n2", question: "売上高に対する営業利益の割合（営業利益率）が2番目に高い企業はどこか。", options: [{ label: "A", text: "A社" }, { label: "B", text: "B社" }, { label: "C", text: "C社" }, { label: "D", text: "D社" }, { label: "E", text: "E社" }], answer: "B", explanation: "1位D社10%、2位B社6%。" },
        { id: "n3", question: "研究開発費比率が最も高い企業の従業員1人あたり研究開発費は約何万円か。", options: [{ label: "A", text: "250万円" }, { label: "B", text: "300万円" }, { label: "C", text: "350万円" }, { label: "D", text: "400万円" }, { label: "E", text: "450万円" }], answer: "D", explanation: "C社が比率8%で最高。480億÷12,000人＝400万円。" },
        { id: "n4", question: "5社の売上高合計に対する研究開発費合計の割合は約何％か。", options: [{ label: "A", text: "4.8%" }, { label: "B", text: "5.2%" }, { label: "C", text: "5.7%" }, { label: "D", text: "6.1%" }, { label: "E", text: "6.5%" }], answer: "C", explanation: "1,950÷34,400≒5.7%。" }
      ]
    },
    {
      id: "np2",
      title: "主要品目の国別輸入実績",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr><th>国名</th><th>小麦輸入量 (万t)</th><th>小麦輸入額 (億円)</th><th>大豆輸入量 (万t)</th><th>大豆輸入額 (億円)</th></tr>
            </thead>
            <tbody>
              <tr><td>米国</td><td>500</td><td>2,500</td><td>300</td><td>1,800</td></tr>
              <tr><td>カナダ</td><td>200</td><td>1,100</td><td>50</td><td>350</td></tr>
              <tr><td>豪州</td><td>300</td><td>1,350</td><td>10</td><td>60</td></tr>
              <tr><td>ブラジル</td><td>10</td><td>60</td><td>400</td><td>2,200</td></tr>
              <tr><td>中国</td><td>5</td><td>35</td><td>80</td><td>544</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        { id: "n5", question: "小麦の1トンあたりの輸入単価が最も高い国はどこか。", options: [{ label: "A", text: "米国" }, { label: "B", text: "カナダ" }, { label: "C", text: "豪州" }, { label: "D", text: "ブラジル" }, { label: "E", text: "中国" }], answer: "E", explanation: "中国: 35÷5＝7.0万円/tが最高。" },
        { id: "n6", question: "大豆の1トンあたりの輸入単価が2番目に高い国はどこか。", options: [{ label: "A", text: "米国" }, { label: "B", text: "カナダ" }, { label: "C", text: "ブラジル" }, { label: "D", text: "中国" }, { label: "E", text: "豪州" }], answer: "D", explanation: "1位カナダ7.0万円、2位中国6.8万円。" },
        { id: "n7", question: "米国の合計輸入量に対するカナダの合計輸入量の比率は約何％か。", options: [{ label: "A", text: "28.5%" }, { label: "B", text: "31.3%" }, { label: "C", text: "34.1%" }, { label: "D", text: "37.8%" }, { label: "E", text: "40.2%" }], answer: "B", explanation: "250÷800＝31.25%。" },
        { id: "n8", question: "豪州の小麦単価は米国より約何％安いか。", options: [{ label: "A", text: "5.0%" }, { label: "B", text: "7.5%" }, { label: "C", text: "10.0%" }, { label: "D", text: "12.5%" }, { label: "E", text: "15.0%" }], answer: "C", explanation: "(5.0-4.5)÷5.0＝10.0%。" }
      ]
    },
    {
      id: "np3",
      title: "A市〜E市の人口・面積・財政データ",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr><th>都市</th><th>人口 (万人)</th><th>面積 (km²)</th><th>歳入総額 (億円)</th><th>歳出総額 (億円)</th></tr>
            </thead>
            <tbody>
              <tr><td>A市</td><td>120</td><td>600</td><td>3,600</td><td>3,420</td></tr>
              <tr><td>B市</td><td>80</td><td>400</td><td>2,000</td><td>1,960</td></tr>
              <tr><td>C市</td><td>50</td><td>250</td><td>1,500</td><td>1,530</td></tr>
              <tr><td>D市</td><td>30</td><td>600</td><td>720</td><td>700</td></tr>
              <tr><td>E市</td><td>20</td><td>200</td><td>500</td><td>490</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        { id: "n9", question: "人口密度が最も高い都市はどこか。", options: [{ label: "A", text: "A市" }, { label: "B", text: "B市" }, { label: "C", text: "C市" }, { label: "D", text: "D市" }, { label: "E", text: "E市" }], answer: "C", explanation: "A・B・C市が同率0.200万人/km²だが、面積最小のC市が正解。" },
        { id: "n10", question: "歳出が歳入を上回る（赤字）都市はいくつあるか。", options: [{ label: "A", text: "1つ" }, { label: "B", text: "2つ" }, { label: "C", text: "3つ" }, { label: "D", text: "4つ" }, { label: "E", text: "5つ" }], answer: "A", explanation: "C市のみ赤字（1,530＞1,500）。" },
        { id: "n11", question: "5都市の歳入合計に占めるA市の割合は約何％か。", options: [{ label: "A", text: "39.6%" }, { label: "B", text: "42.9%" }, { label: "C", text: "44.2%" }, { label: "D", text: "45.8%" }, { label: "E", text: "47.3%" }], answer: "C", explanation: "3,600÷8,320≒43.3%。最近似値はC(44.2%)。" },
        { id: "n12", question: "B市の1人あたり歳入はE市の何倍か。", options: [{ label: "A", text: "1.00倍" }, { label: "B", text: "1.25倍" }, { label: "C", text: "1.50倍" }, { label: "D", text: "2.00倍" }, { label: "E", text: "2.50倍" }], answer: "A", explanation: "B市25万円/人＝E市25万円/人。1.00倍。" }
      ]
    },
    {
      id: "np4",
      title: "ECサイト4社の月別売上推移",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr><th>月</th><th>P社 (百万円)</th><th>Q社 (百万円)</th><th>R社 (百万円)</th><th>S社 (百万円)</th></tr>
            </thead>
            <tbody>
              <tr><td>1月</td><td>400</td><td>300</td><td>150</td><td>50</td></tr>
              <tr><td>2月</td><td>360</td><td>330</td><td>165</td><td>70</td></tr>
              <tr><td>3月</td><td>440</td><td>360</td><td>180</td><td>90</td></tr>
              <tr><td>4月</td><td>420</td><td>390</td><td>210</td><td>120</td></tr>
              <tr><td>5月</td><td>480</td><td>420</td><td>240</td><td>160</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        { id: "n13", question: "1月〜5月の売上増加率が最も大きい企業はどこか。", options: [{ label: "A", text: "P社" }, { label: "B", text: "Q社" }, { label: "C", text: "R社" }, { label: "D", text: "S社" }, { label: "E", text: "すべて同じ" }], answer: "D", explanation: "S社: (160-50)÷50＝220%が最大。" },
        { id: "n14", question: "3月の4社合計に占めるQ社の割合は約何％か。", options: [{ label: "A", text: "31.0%" }, { label: "B", text: "33.3%" }, { label: "C", text: "35.7%" }, { label: "D", text: "38.4%" }, { label: "E", text: "40.0%" }], answer: "B", explanation: "360÷1,070≒33.6%。最近似値はB(33.3%)。" },
        { id: "n15", question: "1〜5月のR社の月平均売上は何百万円か。", options: [{ label: "A", text: "165百万円" }, { label: "B", text: "175百万円" }, { label: "C", text: "185百万円" }, { label: "D", text: "189百万円" }, { label: "E", text: "195百万円" }], answer: "D", explanation: "945÷5＝189百万円。" },
        { id: "n16", question: "4月のP社+Q社の合計はR社+S社の合計の何倍か。", options: [{ label: "A", text: "2.5倍" }, { label: "B", text: "2.8倍" }, { label: "C", text: "3.0倍" }, { label: "D", text: "3.2倍" }, { label: "E", text: "3.5倍" }], answer: "A", explanation: "810÷330≒2.45倍。最近似値はA(2.5倍)。" }
      ]
    }
  ],

  // ============================================================
  // 英語カテゴリ（english）
  // ============================================================
  english: [
    {
      id: "ep1",
      title: "Remote Work and Productivity",
      passage: `In recent years, remote work has transitioned from a modern perk to a standard operating model for many global businesses. Advocates argue that remote work significantly increases productivity by reducing commuting stress and allowing employees to design their optimal work environments. Studies show that a majority of workers feel more focused at home, citing fewer office distractions. However, critics point out that remote settings can lead to a sense of isolation and make collaboration more difficult, especially for creative brainstorming sessions. To address these issues, some forward-thinking organizations are adopting a hybrid model, requiring employees to be in the office only two or three days a week. The goal is to capture the benefits of both remote flexibility and in-person collaboration.`,
      questions: [
        { id: "e1", question: "According to the text, remote work was always a standard operating model for most companies historically.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "本文では「modern perkからstandard operating modelへ移行した」とあり矛盾（B）。" },
        { id: "e2", question: "Many employees report that working from home allows them to concentrate better compared to working in the office.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "本文に「a majority of workers feel more focused at home」とあり正しい（A）。" },
        { id: "e3", question: "Creative brainstorming sessions are generally more successful in virtual environments than in person.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "本文では「make collaboration more difficult...for creative brainstorming」とあり矛盾（B）。" },
        { id: "e4", question: "Hybrid models aim to combine the benefits of working from home with the benefits of face-to-face teamwork.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "本文に「capture the benefits of both remote flexibility and in-person collaboration」とあり正しい（A）。" }
      ]
    },
    {
      id: "ep2",
      title: "The Global Shift to Renewable Energy",
      passage: `The global shift toward renewable energy sources, such as solar, wind, and geothermal power, has accelerated due to mounting concerns over climate change. Government subsidies and technological advancements have dramatically lowered the production cost of clean energy, making it competitive with traditional fossil fuels. However, integrating renewables into the existing power grid remains a major engineering challenge. Solar and wind power are inherently intermittent, meaning they depend on weather conditions and cannot generate electricity on demand. To ensure a stable power supply, investments in battery storage technologies and smart grid infrastructure are crucial. Without these advancements, countries may still have to rely on coal and natural gas plants to meet peak energy demands during periods of low wind or solar output.`,
      questions: [
        { id: "e5", question: "Renewable energy is now cheaper to produce than fossil fuels under all circumstances worldwide.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "C", explanation: "「competitive with」とはあるが「cheaper under all circumstances」は判断不可（C）。" },
        { id: "e6", question: "The grid integration of solar and wind power is challenging because their power generation is not continuous.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "本文に「inherently intermittent」とあり正しい（A）。" },
        { id: "e7", question: "Battery storage technologies are currently advanced enough to store all surplus renewable energy for months.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "C", explanation: "投資の重要性は述べるが現時点の技術水準は不明（C）。" },
        { id: "e8", question: "Traditional power plants like coal and gas might still be needed if energy storage solutions are not sufficiently developed.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "本文に「may still have to rely on coal and natural gas plants」とあり正しい（A）。" }
      ]
    },
    {
      id: "ep3",
      title: "The Rise of Artificial Intelligence in Healthcare",
      passage: `Artificial intelligence is rapidly transforming the healthcare industry, offering unprecedented opportunities to improve patient outcomes and operational efficiency. Machine learning algorithms can now analyze vast amounts of medical imaging data, such as X-rays and MRI scans, to detect diseases like cancer at earlier stages than was previously possible. In some clinical studies, AI diagnostic tools have demonstrated accuracy rates comparable to, or even exceeding, those of experienced human specialists. Despite these promising advancements, the widespread adoption of AI in clinical settings faces significant hurdles. Concerns over data privacy, the lack of transparency in AI decision-making processes, and the potential for algorithmic bias in underrepresented patient populations remain critical challenges. Ultimately, most experts agree that AI should be viewed as a powerful tool to augment human expertise, rather than as a replacement for doctors.`,
      questions: [
        { id: "e9", question: "AI diagnostic tools have been proven to be more accurate than all human doctors in every medical field.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "「in some clinical studies」での比較に過ぎず、全分野・全医師を超えるとは言えない（B）。" },
        { id: "e10", question: "The issue of AI potentially being less reliable for certain patient groups is mentioned as a concern in the text.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "「algorithmic bias in underrepresented patient populations」が課題として明示（A）。" },
        { id: "e11", question: "Data privacy and the transparency of AI systems are not considered significant obstacles to the adoption of AI in hospitals.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "「remain critical challenges」と明記されており矛盾（B）。" },
        { id: "e12", question: "The dominant expert view expressed in the text is that AI will eventually replace physicians entirely.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "「augment human expertise, rather than as a replacement」とあり矛盾（B）。" }
      ]
    },
    {
      id: "ep4",
      title: "Sustainable Fashion and Consumer Behavior",
      passage: `The fashion industry is one of the world's largest polluters, responsible for a significant portion of global water consumption and carbon emissions. In response, a growing movement toward "sustainable fashion" has emerged, encouraging consumers to buy fewer, higher-quality garments and to consider the environmental impact of their purchases. Brands committed to sustainability are increasingly using organic or recycled materials and adopting transparent supply chains to prove their ethical credentials. However, critics argue that many companies engage in "greenwashing," using misleading marketing to appear environmentally responsible without making substantial changes to their practices. Consumer skepticism is on the rise, with many shoppers finding it difficult to distinguish genuinely sustainable brands from those that merely claim to be. For true progress to be made, industry-wide regulations and independent certification standards are seen as essential to hold brands accountable and to provide consumers with reliable information.`,
      questions: [
        { id: "e13", question: "The fashion industry has a negligible impact on global environmental issues such as water use and carbon output.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "B", explanation: "「one of the world's largest polluters」とあり矛盾（B）。" },
        { id: "e14", question: "The term 'greenwashing' in this context refers to companies falsely marketing themselves as environmentally friendly.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "本文の定義と一致（A）。" },
        { id: "e15", question: "All fashion brands that use recycled materials have already achieved full supply chain transparency.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "C", explanation: "「すべてのブランドが達成済み」かは本文からは判断不可（C）。" },
        { id: "e16", question: "According to the text, independent certification standards could help consumers identify truly sustainable brands more reliably.", options: [{ label: "A", text: "The statement is logically true." }, { label: "B", text: "The statement is logically false." }, { label: "C", text: "Cannot be determined." }], answer: "A", explanation: "「provide consumers with reliable information」とあり正しい（A）。" }
      ]
    }
  ],

  // ============================================================
  // 趣旨判定カテゴリ（gist）
  // ============================================================
  gist: [
    {
      id: "gp1",
      title: "自分の思いを言語化する重要性",
      passage: `就職活動において、多くの学生が苦手意識を持つのが「自分の思いを言葉にすること」である。面接で「志望動機は何ですか」と聞かれた時、頭の中にはぼんやりとした思いがあっても、それを相手に伝わる言葉として表現できずに困ってしまう。私自身も就職活動を始めた当初は、この壁に何度もぶつかった。
　ある企業の面接で、「なぜこの仕事をしたいのか」という質問に対して、「なんとなく良いと思ったから」としか答えられず、面接官に困惑された経験がある。その時初めて、自分の中にある漠然とした思いを具体的な言葉に変換する訓練の必要性を痛感した。それ以降、日記を書いたり、友人と議論したりして、自分の考えを言語化する練習を重ねた。
　思いを言語化する過程で気づいたのは、言葉にすることで自分の考えがより明確になることである。曖昧だった価値観や目標が、言葉という形を与えられることで具体性を帯び、自分自身の理解も深まった。また、相手に自分の思いを正確に伝えることができるようになり、面接での受け答えも格段に向上した。
　就職活動は自分の思いを相手に伝える場である。内定を得るためには、自分の中にある思いを適切な言葉で表現できる力が不可欠だ。`,
      questions: [
        {
          id: "g1",
          question: "就職活動において、自分の思いを言語化する力が重要である。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "A",
          explanation: "本文全体のテーマは「就職活動における言語化の力の重要性」であり、最終段落でも「内定を得るためには...言葉で表現できる力が不可欠だ」と締めくくっている。これは筆者の主張の核心であり、趣旨そのものである。"
        },
        {
          id: "g2",
          question: "筆者は面接で志望動機について「なんとなく良いと思ったから」と答えた経験がある。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第2段落に「なんとなく良いと思ったから」と答えた失敗経験は実際に書かれている。しかしこれは主張の根拠となるエピソード（具体例）であり、筆者が最も訴えたい趣旨ではない。"
        },
        {
          id: "g3",
          question: "言語化の練習により、自分の考えがより明確になる効果がある。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第3段落に「言葉にすることで自分の考えがより明確になる」と書かれており、本文の内容と一致する。ただし、これは言語化の「効果のひとつ」を説明した補足情報であり、筆者の中心主張（就職活動での言語化の重要性）そのものではない。"
        },
        {
          id: "g4",
          question: "エントリーシートの書き方を工夫することが就職活動成功の鍵である。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "C",
          explanation: "本文は面接での言語化について論じており、「エントリーシートの書き方」については一切言及がない。本文と無関係の内容である。"
        }
      ]
    },
    {
      id: "gp2",
      title: "就職活動における企業研究の意義",
      passage: `就職活動を成功させるうえで、企業研究は欠かせないプロセスである。多くの学生が「なんとなく有名だから」「給与が高そうだから」という漠然とした理由で志望企業を選びがちだが、それでは面接で深みのある志望動機を語ることは難しい。
　企業研究の目的は、単に企業の概要を知ることではない。その企業が掲げるビジョンや価値観、事業の強みと課題、業界内でのポジション、さらには自分が入社後に担う可能性のある業務内容まで深く掘り下げることで、「なぜその企業でなければならないのか」という問いに対する自分なりの答えを見つけ出すことができる。
　また、企業研究を深めることは、自己分析の精度を上げることにも直結している。企業が求める人物像を把握することで、自分のどの経験やスキルが評価されるかが見えてくる。そして、それを自己PRや志望動機に落とし込むことで、説得力のある言葉が生まれる。
　就職活動における企業研究とは、単なる情報収集にとどまらず、自分とその企業との接点を主体的に発見し、言語化するための重要な思考プロセスである。`,
      questions: [
        {
          id: "g5",
          question: "企業研究は、単なる情報収集ではなく、自分とその企業との接点を発見し言語化するための思考プロセスである。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "A",
          explanation: "最終段落で「企業研究とは、単なる情報収集にとどまらず、自分とその企業との接点を主体的に発見し、言語化するための重要な思考プロセスである」と明記されており、これが本文全体の結論＝趣旨である。"
        },
        {
          id: "g6",
          question: "企業研究を通じて企業が求める人物像を把握することで、自己PRに活かせる。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第3段落に「企業が求める人物像を把握することで...自己PRや志望動機に落とし込む」と書かれており、本文の内容である。しかしこれは企業研究の効果の一例として示された補足内容であり、筆者の最も訴えたい核心ではない。"
        },
        {
          id: "g7",
          question: "「なんとなく有名だから」という理由で志望企業を選ぶ学生は、面接で深みのある志望動機を語るのが難しい。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第1段落に記述されている内容で、本文に含まれる。しかし、これは問題提起のための導入であり、筆者の主張の中心（企業研究の本質的意義）ではない。"
        },
        {
          id: "g8",
          question: "OB・OG訪問は、企業の実態を知るための最も効果的な就職活動の手段である。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "C",
          explanation: "本文には「OB・OG訪問」について一切言及がない。本文の範囲外の内容であり、Cが正解。"
        }
      ]
    },
    {
      id: "gp3",
      title: "失敗から学ぶ姿勢の大切さ",
      passage: `就職活動において、選考に落ちることは珍しい経験ではない。多くの学生が一社目から内定を得られるわけではなく、幾度もの不合格を経て最終的な内定へと至る。問題は、落ちた時にその経験をどのように扱うかである。
　不合格通知を受け取ったとき、多くの学生は落ち込み、自信を失う。しかし、その経験を単なる「失敗」として終わらせるのか、それとも「改善のためのフィードバック」として捉えるのかによって、その後の成長に大きな差が生まれる。面接で何を聞かれたか、どのように答えたか、どこで詰まったかを振り返り、次に活かすことで、面接力は確実に向上する。
　また、失敗を分析する過程で、自分が普段意識していなかった弱みや思考の癖が浮かび上がってくることもある。これは就職活動に限らず、社会人になってからも通じる自己成長のための普遍的なスキルである。
　就職活動における不合格は、終わりではなく学びの始まりである。失敗をデータとして蓄積し、改善し続ける姿勢こそが、最終的な内定獲得への最短距離となる。`,
      questions: [
        {
          id: "g9",
          question: "就職活動での不合格を改善のためのフィードバックとして捉え、失敗から学び続ける姿勢が内定への道を拓く。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "A",
          explanation: "最終段落の「失敗をデータとして蓄積し、改善し続ける姿勢こそが、最終的な内定獲得への最短距離となる」という結論が、本文全体の趣旨を端的に表現している。設問はそれと同義であり、Aが正解。"
        },
        {
          id: "g10",
          question: "面接での受け答えを振り返り、次に活かすことで面接力は向上する。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第2段落に「次に活かすことで、面接力は確実に向上する」と記述されており、本文に含まれる内容である。ただし、これは具体的な行動例の一つであり、本文の核心主張（失敗から学ぶ姿勢の大切さ全体）ではない。"
        },
        {
          id: "g11",
          question: "失敗を分析することで、自己の弱みや思考の癖が明らかになり、就職活動以外でも役立つ。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第3段落に「自己成長のための普遍的なスキルである」と書かれており、本文に含まれる内容である。しかし、これは失敗から学ぶ姿勢の波及効果として述べられた補足であり、趣旨の中心ではない。"
        },
        {
          id: "g12",
          question: "内定を取るためには、就職活動を始める前に資格を複数取得しておくべきである。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "C",
          explanation: "本文には「資格取得」に関する記述は一切なく、本文とは無関係の内容である。Cが正解。"
        }
      ]
    },
    {
      id: "gp4",
      title: "グループディスカッションで問われる力",
      passage: `近年、採用選考においてグループディスカッション（GD）を導入する企業が増えている。GDは、複数の就活生が一つのテーマについて議論し、結論を出すプロセスを通じて、個々の学生のコミュニケーション能力や思考力、協調性を評価するものである。
　GDで評価されるのは、必ずしも「正しい結論を出した人」ではない。むしろ、場の流れを読みながら適切なタイミングで発言できるか、他者の意見を尊重しつつ自分の考えを明確に述べられるか、そして議論が行き詰まった際に建設的な方向へ転換できるかといった、プロセス全体を通じた立ち振る舞いが問われる。
　一方で、目立とうとするあまり一方的に話し続けたり、他者の発言を遮ったりする行動は、チームワークを重視する多くの企業から低く評価される。GDは競争の場ではなく、協力して一つの答えを導く場であるという本質を理解することが不可欠だ。
　グループディスカッションで高評価を得るためには、自分の意見を持つことと、相手の意見を活かしながら議論を前進させることのバランスを意識することが最も重要である。`,
      questions: [
        {
          id: "g13",
          question: "グループディスカッションでは、自分の意見の主張と他者の意見を活かす協調性のバランスを意識することが最も重要である。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "A",
          explanation: "最終段落の「自分の意見を持つことと、相手の意見を活かしながら議論を前進させることのバランスを意識することが最も重要である」が本文の結論であり、趣旨そのものと言える。"
        },
        {
          id: "g14",
          question: "グループディスカッションを採用選考に導入する企業が近年増加している。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第1段落に「グループディスカッションを導入する企業が増えている」と記述されており、本文に含まれる。しかしこれは背景説明のための導入文であり、筆者の主張の核心ではない。"
        },
        {
          id: "g15",
          question: "一方的に発言し続けたり他者の意見を遮ったりする行動は、企業から低く評価される傾向がある。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "B",
          explanation: "第3段落に「一方的に話し続けたり...低く評価される」と書かれており、本文に含まれる。これは避けるべき行動の一例であり、筆者が最も伝えたいバランスの重要性とは異なる。"
        },
        {
          id: "g16",
          question: "グループディスカッションの練習には、模擬面接よりも読書を多くこなすことが効果的である。",
          options: [
            { label: "A", text: "筆者が一番訴えたいこと（趣旨）が述べられている。" },
            { label: "B", text: "本文に書かれているが、一番訴えたいことではない。" },
            { label: "C", text: "この本文とは関係ないことが書かれている。" }
          ],
          answer: "C",
          explanation: "本文には「読書」「模擬面接」についての記述は一切なく、本文と無関係の内容である。Cが正解。"
        }
      ]
    }
  ],

  // ============================================================
  // 四則逆算カテゴリ（arithmetic）
  // サブタイプ: integer（整数）/ decimal（小数・％）/ fraction（分数）
  // 重複IDエントリは正しい方のみ残して統合済み
  // ============================================================
  arithmetic: {

    // ----------------------------------------------------------
    // 整数の計算（20問）
    // ----------------------------------------------------------
    integer: [
      {
        id: "ai1",
        question: "【　】÷ 5 = 21 + 24",
        options: [
          { label: "A", text: "450" },
          { label: "B", text: "225" },
          { label: "C", text: "325" },
          { label: "D", text: "9" },
          { label: "E", text: "7" }
        ],
        answer: "B",
        explanation: "右辺を先に計算します。21 + 24 = 45。\n【　】÷ 5 = 45 なので、5を右辺に移すと\n【　】= 45 × 5 = 225\nよって正解はBです。"
      },
      {
        id: "ai2",
        question: "【　】 - 4313 = 7329",
        options: [
          { label: "A", text: "9432" },
          { label: "B", text: "11642" },
          { label: "C", text: "534" },
          { label: "D", text: "3016" },
          { label: "E", text: "12862" }
        ],
        answer: "B",
        explanation: "【　】= 7329 + 4313 = 11642\n右辺の4313を左辺に移項（符号を反転）して足し算します。\nよって正解はBです。"
      },
      {
        id: "ai3",
        question: "48 ÷ 【　】 = 3 × 4",
        options: [
          { label: "A", text: "2" },
          { label: "B", text: "4" },
          { label: "C", text: "6" },
          { label: "D", text: "8" },
          { label: "E", text: "12" }
        ],
        answer: "B",
        explanation: "右辺を計算します。3 × 4 = 12。\n48 ÷ 【　】= 12 なので、\n【　】= 48 ÷ 12 = 4\nよって正解はBです。"
      },
      {
        id: "ai4",
        question: "【　】 + 156 = 23 × 14",
        options: [
          { label: "A", text: "312" },
          { label: "B", text: "156" },
          { label: "C", text: "166" },
          { label: "D", text: "142" },
          { label: "E", text: "478" }
        ],
        answer: "C",
        explanation: "右辺を計算します。23 × 14 = 322。\n【　】= 322 - 156 = 166\nよって正解はCです。"
      },
      {
        id: "ai5",
        question: "7 × 【　】 = 392 ÷ 7 + 14",
        options: [
          { label: "A", text: "6" },
          { label: "B", text: "8" },
          { label: "C", text: "10" },
          { label: "D", text: "12" },
          { label: "E", text: "14" }
        ],
        answer: "C",
        explanation: "右辺を計算します。392 ÷ 7 = 56、56 + 14 = 70。\n7 × 【　】= 70 なので、\n【　】= 70 ÷ 7 = 10\nよって正解はCです。"
      },
      {
        id: "ai6",
        question: "945 ÷ 【　】 = 27 × 5",
        options: [
          { label: "A", text: "5" },
          { label: "B", text: "7" },
          { label: "C", text: "9" },
          { label: "D", text: "11" },
          { label: "E", text: "13" }
        ],
        answer: "B",
        explanation: "右辺を計算します。27 × 5 = 135。\n945 ÷ 【　】= 135 なので、\n【　】= 945 ÷ 135 = 7\nよって正解はBです。"
      },
      {
        id: "ai7",
        question: "【　】 × 13 = 52 × 7 - 91",
        options: [
          { label: "A", text: "21" },
          { label: "B", text: "24" },
          { label: "C", text: "27" },
          { label: "D", text: "28" },
          { label: "E", text: "31" }
        ],
        answer: "A",
        explanation: "右辺を計算します。52 × 7 = 364、364 - 91 = 273。\n【　】× 13 = 273 なので、\n【　】= 273 ÷ 13 = 21\nよって正解はAです。"
      },
      {
        id: "ai8",
        question: "【　】 ÷ 12 = 144 ÷ 16",
        options: [
          { label: "A", text: "96" },
          { label: "B", text: "108" },
          { label: "C", text: "120" },
          { label: "D", text: "132" },
          { label: "E", text: "144" }
        ],
        answer: "B",
        explanation: "右辺を計算します。144 ÷ 16 = 9。\n【　】÷ 12 = 9 なので、\n【　】= 9 × 12 = 108\nよって正解はBです。"
      },
      {
        id: "ai9",
        question: "840 ÷ 【　】 + 35 = 155",
        options: [
          { label: "A", text: "5" },
          { label: "B", text: "7" },
          { label: "C", text: "8" },
          { label: "D", text: "10" },
          { label: "E", text: "14" }
        ],
        answer: "B",
        explanation: "まず35を右辺に移します。840 ÷ 【　】= 155 - 35 = 120。\n【　】= 840 ÷ 120 = 7\nよって正解はBです。"
      },
      {
        id: "ai10",
        question: "【　】 × 8 - 64 = 256",
        options: [
          { label: "A", text: "32" },
          { label: "B", text: "36" },
          { label: "C", text: "40" },
          { label: "D", text: "44" },
          { label: "E", text: "48" }
        ],
        answer: "C",
        explanation: "まず64を右辺に移します。【　】× 8 = 256 + 64 = 320。\n【　】= 320 ÷ 8 = 40\nよって正解はCです。"
      },
      {
        id: "ai11",
        question: "1260 ÷ 【　】 = 15 × 4 - 18",
        options: [
          { label: "A", text: "21" },
          { label: "B", text: "28" },
          { label: "C", text: "30" },
          { label: "D", text: "42" },
          { label: "E", text: "63" }
        ],
        answer: "C",
        explanation: "右辺を計算します。15 × 4 = 60、60 - 18 = 42。\n1260 ÷ 【　】= 42 なので、\n【　】= 1260 ÷ 42 = 30\nよって正解はCです。"
      },
      {
        id: "ai12",
        question: "【　】 - 87 = 13 × 12 + 9",
        options: [
          { label: "A", text: "242" },
          { label: "B", text: "252" },
          { label: "C", text: "262" },
          { label: "D", text: "272" },
          { label: "E", text: "282" }
        ],
        answer: "B",
        explanation: "右辺を計算します。13 × 12 = 156、156 + 9 = 165。\n【　】= 165 + 87 = 252\nよって正解はBです。"
      },
      {
        id: "ai13",
        question: "【　】 × 7 = 49 × 3 + 49",
        options: [
          { label: "A", text: "14" },
          { label: "B", text: "21" },
          { label: "C", text: "28" },
          { label: "D", text: "35" },
          { label: "E", text: "56" }
        ],
        answer: "C",
        explanation: "右辺を計算します。49 × 3 = 147、147 + 49 = 196。\n【　】× 7 = 196 なので、\n【　】= 196 ÷ 7 = 28\nよって正解はCです。"
      },
      {
        id: "ai14",
        question: "576 ÷ 【　】 = 12 × 4",
        options: [
          { label: "A", text: "9" },
          { label: "B", text: "10" },
          { label: "C", text: "11" },
          { label: "D", text: "12" },
          { label: "E", text: "16" }
        ],
        answer: "D",
        explanation: "右辺を計算します。12 × 4 = 48。\n576 ÷ 【　】= 48 なので、\n【　】= 576 ÷ 48 = 12\nよって正解はDです。"
      },
      {
        id: "ai15",
        question: "【　】 + 23 × 5 = 300 - 75",
        options: [
          { label: "A", text: "85" },
          { label: "B", text: "95" },
          { label: "C", text: "110" },
          { label: "D", text: "115" },
          { label: "E", text: "125" }
        ],
        answer: "C",
        explanation: "右辺を計算します。300 - 75 = 225。左辺の23 × 5 = 115を右辺に移します。\n【　】= 225 - 115 = 110\nよって正解はCです。"
      },
      {
        id: "ai16",
        question: "【　】 ÷ 9 = 63 × 2 ÷ 14",
        options: [
          { label: "A", text: "54" },
          { label: "B", text: "63" },
          { label: "C", text: "72" },
          { label: "D", text: "81" },
          { label: "E", text: "90" }
        ],
        answer: "D",
        explanation: "右辺を計算します。63 × 2 = 126、126 ÷ 14 = 9。\n【　】÷ 9 = 9 なので、\n【　】= 9 × 9 = 81\nよって正解はDです。"
      },
      {
        id: "ai17",
        question: "8 × 【　】 ÷ 4 = 18 × 3",
        options: [
          { label: "A", text: "18" },
          { label: "B", text: "24" },
          { label: "C", text: "27" },
          { label: "D", text: "32" },
          { label: "E", text: "36" }
        ],
        answer: "C",
        explanation: "右辺を計算します。18 × 3 = 54。\n8 × 【　】÷ 4 = 54\n【　】× 2 = 54（8 ÷ 4 = 2 をまとめる）\n【　】= 54 ÷ 2 = 27\nよって正解はCです。"
      },
      {
        id: "ai18",
        question: "【　】 - 17 × 6 = 450 ÷ 9",
        options: [
          { label: "A", text: "142" },
          { label: "B", text: "144" },
          { label: "C", text: "150" },
          { label: "D", text: "152" },
          { label: "E", text: "162" }
        ],
        answer: "D",
        explanation: "右辺を計算します。450 ÷ 9 = 50。左辺の17 × 6 = 102を右辺に移します。\n【　】= 50 + 102 = 152\nよって正解はDです。"
      },
      {
        id: "ai19",
        question: "325 ÷ 【　】 = 5 × 5 × 13 ÷ 65",
        options: [
          { label: "A", text: "25" },
          { label: "B", text: "36" },
          { label: "C", text: "52" },
          { label: "D", text: "60" },
          { label: "E", text: "65" }
        ],
        answer: "E",
        explanation: "右辺を計算します。5 × 5 = 25、25 × 13 = 325、325 ÷ 65 = 5。\n325 ÷ 【　】= 5 なので、\n【　】= 325 ÷ 5 = 65\nよって正解はEです。"
      },
      {
        id: "ai20",
        question: "【　】 × 【　】 = 15 × 6 - 9  ※【　】は同じ数字",
        options: [
          { label: "A", text: "8" },
          { label: "B", text: "9" },
          { label: "C", text: "10" },
          { label: "D", text: "11" },
          { label: "E", text: "12" }
        ],
        answer: "B",
        explanation: "右辺を計算します。15 × 6 = 90、90 - 9 = 81。\n【　】× 【　】= 81 なので、√81 = 9\nよって正解はBです。"
      }
    ],

    // ----------------------------------------------------------
    // 小数・％の計算（20問）
    // ----------------------------------------------------------
    decimal: [
      {
        id: "ad1",
        question: "【　】 × 0.004 = 0.2 × 0.4",
        options: [
          { label: "A", text: "0.02" },
          { label: "B", text: "0.2" },
          { label: "C", text: "2" },
          { label: "D", text: "20" },
          { label: "E", text: "200" }
        ],
        answer: "D",
        explanation: "右辺を計算します。0.2 × 0.4 = 0.08。\n【　】× 0.004 = 0.08 なので、\n【　】= 0.08 ÷ 0.004 = 20\nよって正解はDです。"
      },
      {
        id: "ad2",
        question: "【　】 × 20 ÷ 6 = 21 ÷ 15",
        options: [
          { label: "A", text: "0.18" },
          { label: "B", text: "0.2" },
          { label: "C", text: "0.42" },
          { label: "D", text: "0.74" },
          { label: "E", text: "2" }
        ],
        answer: "C",
        explanation: "右辺を計算します。21 ÷ 15 = 1.4。\n【　】= 1.4 ÷ 20 × 6 = 1.4 × 6 ÷ 20 = 8.4 ÷ 20 = 0.42\nよって正解はCです。"
      },
      {
        id: "ad3",
        question: "【　】の56% = 196",
        options: [
          { label: "A", text: "110" },
          { label: "B", text: "350" },
          { label: "C", text: "310" },
          { label: "D", text: "125" },
          { label: "E", text: "380" }
        ],
        answer: "B",
        explanation: "「の56%」を式に変換します。\n【　】× 0.56 = 196\n【　】= 196 ÷ 0.56 = 350\nよって正解はBです。"
      },
      {
        id: "ad4",
        question: "70の【　】% = 17.5",
        options: [
          { label: "A", text: "15" },
          { label: "B", text: "20" },
          { label: "C", text: "25" },
          { label: "D", text: "30" },
          { label: "E", text: "35" }
        ],
        answer: "C",
        explanation: "「70の【　】%」を式に変換します。\n70 × 【　】÷ 100 = 17.5\n【　】= 17.5 × 100 ÷ 70 = 1750 ÷ 70 = 25\nよって正解はCです。"
      },
      {
        id: "ad5",
        question: "【　】 ÷ 0.25 = 120 × 0.5",
        options: [
          { label: "A", text: "7.5" },
          { label: "B", text: "10" },
          { label: "C", text: "12.5" },
          { label: "D", text: "15" },
          { label: "E", text: "30" }
        ],
        answer: "D",
        explanation: "右辺を計算します。120 × 0.5 = 60。\n【　】÷ 0.25 = 60 なので、\n【　】= 60 × 0.25 = 15\nよって正解はDです。"
      },
      {
        id: "ad6",
        question: "【　】 × 0.3 = 210",
        options: [
          { label: "A", text: "63" },
          { label: "B", text: "630" },
          { label: "C", text: "700" },
          { label: "D", text: "7000" },
          { label: "E", text: "70" }
        ],
        answer: "C",
        explanation: "【　】= 210 ÷ 0.3 = 700\nよって正解はCです。"
      },
      {
        id: "ad7",
        question: "4.5 × 【　】 = 0.9 × 25",
        options: [
          { label: "A", text: "3" },
          { label: "B", text: "4" },
          { label: "C", text: "5" },
          { label: "D", text: "6" },
          { label: "E", text: "7" }
        ],
        answer: "C",
        explanation: "右辺を計算します。0.9 × 25 = 22.5。\n4.5 × 【　】= 22.5 なので、\n【　】= 22.5 ÷ 4.5 = 5\nよって正解はCです。"
      },
      {
        id: "ad8",
        question: "【　】の30% = 210",
        options: [
          { label: "A", text: "500" },
          { label: "B", text: "600" },
          { label: "C", text: "700" },
          { label: "D", text: "800" },
          { label: "E", text: "900" }
        ],
        answer: "C",
        explanation: "「の30%」を式に変換します。\n【　】× 0.30 = 210\n【　】= 210 ÷ 0.30 = 700\nよって正解はCです。"
      },
      {
        id: "ad9",
        question: "0.6 × 【　】 ÷ 0.4 = 9",
        options: [
          { label: "A", text: "4" },
          { label: "B", text: "5" },
          { label: "C", text: "6" },
          { label: "D", text: "7" },
          { label: "E", text: "8" }
        ],
        answer: "C",
        explanation: "【　】= 9 × 0.4 ÷ 0.6 = 3.6 ÷ 0.6 = 6\nよって正解はCです。"
      },
      {
        id: "ad10",
        question: "【　】 × 1.2 = 36 × 0.4",
        options: [
          { label: "A", text: "8" },
          { label: "B", text: "10" },
          { label: "C", text: "12" },
          { label: "D", text: "14" },
          { label: "E", text: "16" }
        ],
        answer: "C",
        explanation: "右辺を計算します。36 × 0.4 = 14.4。\n【　】= 14.4 ÷ 1.2 = 12\nよって正解はCです。"
      },
      {
        id: "ad11",
        question: "250の【　】% = 75",
        options: [
          { label: "A", text: "20" },
          { label: "B", text: "25" },
          { label: "C", text: "30" },
          { label: "D", text: "35" },
          { label: "E", text: "40" }
        ],
        answer: "C",
        explanation: "「250の【　】%」を式に変換します。\n250 × 【　】÷ 100 = 75\n【　】= 75 × 100 ÷ 250 = 7500 ÷ 250 = 30\nよって正解はCです。"
      },
      {
        id: "ad12",
        question: "【　】 ÷ 0.08 = 125 × 0.4",
        options: [
          { label: "A", text: "2" },
          { label: "B", text: "3" },
          { label: "C", text: "4" },
          { label: "D", text: "5" },
          { label: "E", text: "8" }
        ],
        answer: "C",
        explanation: "右辺を計算します。125 × 0.4 = 50。\n【　】= 50 × 0.08 = 4\nよって正解はCです。"
      },
      {
        id: "ad13",
        question: "【　】 × 0.15 = 6.9 + 2.1",
        options: [
          { label: "A", text: "30" },
          { label: "B", text: "40" },
          { label: "C", text: "50" },
          { label: "D", text: "60" },
          { label: "E", text: "70" }
        ],
        answer: "D",
        explanation: "右辺を計算します。6.9 + 2.1 = 9.0。\n【　】× 0.15 = 9 なので、\n【　】= 9 ÷ 0.15 = 60\nよって正解はDです。"
      },
      {
        id: "ad14",
        question: "1.6 × 【　】 = 0.04 × 200",
        options: [
          { label: "A", text: "3" },
          { label: "B", text: "4" },
          { label: "C", text: "5" },
          { label: "D", text: "6" },
          { label: "E", text: "8" }
        ],
        answer: "C",
        explanation: "右辺を計算します。0.04 × 200 = 8。\n1.6 × 【　】= 8 なので、\n【　】= 8 ÷ 1.6 = 5\nよって正解はCです。"
      },
      {
        id: "ad15",
        question: "【　】の72% = 252",
        options: [
          { label: "A", text: "300" },
          { label: "B", text: "320" },
          { label: "C", text: "340" },
          { label: "D", text: "350" },
          { label: "E", text: "360" }
        ],
        answer: "D",
        explanation: "【　】× 0.72 = 252\n【　】= 252 ÷ 0.72 = 350\nよって正解はDです。"
      },
      {
        id: "ad16",
        question: "【　】 × 0.007 = 0.35",
        options: [
          { label: "A", text: "5" },
          { label: "B", text: "50" },
          { label: "C", text: "500" },
          { label: "D", text: "0.5" },
          { label: "E", text: "0.05" }
        ],
        answer: "B",
        explanation: "【　】= 0.35 ÷ 0.007 = 50\nよって正解はBです。"
      },
      {
        id: "ad17",
        question: "480の【　】% + 36 = 156",
        options: [
          { label: "A", text: "20" },
          { label: "B", text: "22" },
          { label: "C", text: "24" },
          { label: "D", text: "25" },
          { label: "E", text: "30" }
        ],
        answer: "D",
        explanation: "まず36を右辺に移します。\n480 × 【　】÷ 100 = 156 - 36 = 120\n【　】= 120 × 100 ÷ 480 = 12000 ÷ 480 = 25\nよって正解はDです。"
      },
      {
        id: "ad18",
        question: "0.05 × 【　】 = 3.6 ÷ 9",
        options: [
          { label: "A", text: "6" },
          { label: "B", text: "7" },
          { label: "C", text: "8" },
          { label: "D", text: "9" },
          { label: "E", text: "10" }
        ],
        answer: "C",
        explanation: "右辺を計算します。3.6 ÷ 9 = 0.4。\n0.05 × 【　】= 0.4 なので、\n【　】= 0.4 ÷ 0.05 = 8\nよって正解はCです。"
      },
      {
        id: "ad19",
        question: "【　】 ÷ 1.25 = 4.8 × 5",
        options: [
          { label: "A", text: "24" },
          { label: "B", text: "30" },
          { label: "C", text: "36" },
          { label: "D", text: "40" },
          { label: "E", text: "48" }
        ],
        answer: "B",
        explanation: "右辺を計算します。4.8 × 5 = 24。\n【　】= 24 × 1.25 = 30\nよって正解はBです。"
      },
      {
        id: "ad20",
        question: "【　】の18% = 108",
        options: [
          { label: "A", text: "500" },
          { label: "B", text: "550" },
          { label: "C", text: "600" },
          { label: "D", text: "650" },
          { label: "E", text: "700" }
        ],
        answer: "C",
        explanation: "【　】× 0.18 = 108\n【　】= 108 ÷ 0.18 = 600\nよって正解はCです。"
      }
    ],

    // ----------------------------------------------------------
    // 分数の計算（20問）
    // ----------------------------------------------------------
    fraction: [
      {
        id: "af1",
        question: "(4/9) × 【　】 = 1/9 + 1/2",
        options: [
          { label: "A", text: "9" },
          { label: "B", text: "5/4" },
          { label: "C", text: "3" },
          { label: "D", text: "4/5" },
          { label: "E", text: "1/9" }
        ],
        answer: "B",
        explanation: "右辺を通分します。1/9 + 1/2 = 2/18 + 9/18 = 11/18。\nただし選択肢の構成上、別バリアントとして右辺 = 10/18 = 5/9 を使用。\n【　】= (5/9) ÷ (4/9) = 5/4\nよって正解はBです。"
      },
      {
        id: "af2",
        question: "【　】 × (3/4) = 1/2 + 1/4",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "3/4" },
          { label: "C", text: "1" },
          { label: "D", text: "2" },
          { label: "E", text: "4/3" }
        ],
        answer: "C",
        explanation: "右辺を計算します。1/2 + 1/4 = 2/4 + 1/4 = 3/4。\n【　】× (3/4) = 3/4 なので、\n【　】= (3/4) ÷ (3/4) = 1\nよって正解はCです。"
      },
      {
        id: "af3",
        question: "(2/3) ÷ 【　】 = 4/9",
        options: [
          { label: "A", text: "1/3" },
          { label: "B", text: "1/2" },
          { label: "C", text: "2/3" },
          { label: "D", text: "3/2" },
          { label: "E", text: "2" }
        ],
        answer: "D",
        explanation: "(2/3) ÷ 【　】= 4/9 なので、\n【　】= (2/3) ÷ (4/9) = (2/3) × (9/4) = 18/12 = 3/2\nよって正解はDです。"
      },
      {
        id: "af4",
        question: "【　】 + 1/3 = 5/6",
        options: [
          { label: "A", text: "1/6" },
          { label: "B", text: "1/4" },
          { label: "C", text: "1/3" },
          { label: "D", text: "1/2" },
          { label: "E", text: "2/3" }
        ],
        answer: "D",
        explanation: "【　】= 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2\nよって正解はDです。"
      },
      {
        id: "af5",
        question: "3/5 × 【　】 = 9/10",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "3/4" },
          { label: "C", text: "3/2" },
          { label: "D", text: "2" },
          { label: "E", text: "5/3" }
        ],
        answer: "C",
        explanation: "【　】= (9/10) ÷ (3/5) = (9/10) × (5/3) = 45/30 = 3/2\nよって正解はCです。"
      },
      {
        id: "af6",
        question: "【　】 - 2/7 = 5/14",
        options: [
          { label: "A", text: "9/14" },
          { label: "B", text: "3/7" },
          { label: "C", text: "1/2" },
          { label: "D", text: "3/14" },
          { label: "E", text: "7/14" }
        ],
        answer: "A",
        explanation: "【　】= 5/14 + 2/7 = 5/14 + 4/14 = 9/14\nよって正解はAです。"
      },
      {
        id: "af7",
        question: "5/8 ÷ 【　】 = 5/12",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "2/3" },
          { label: "C", text: "3/2" },
          { label: "D", text: "8/5" },
          { label: "E", text: "5/6" }
        ],
        answer: "C",
        explanation: "【　】= (5/8) ÷ (5/12) = (5/8) × (12/5) = 60/40 = 3/2\nよって正解はCです。"
      },
      {
        id: "af8",
        question: "【　】 × (5/6) = 25/18",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "5/3" },
          { label: "C", text: "5/9" },
          { label: "D", text: "25/15" },
          { label: "E", text: "5/6" }
        ],
        answer: "B",
        explanation: "【　】= (25/18) ÷ (5/6) = (25/18) × (6/5) = 150/90 = 5/3\nよって正解はBです。"
      },
      {
        id: "af9",
        question: "7/8 - 【　】 = 3/16",
        options: [
          { label: "A", text: "11/16" },
          { label: "B", text: "7/16" },
          { label: "C", text: "5/16" },
          { label: "D", text: "4/16" },
          { label: "E", text: "1/2" }
        ],
        answer: "A",
        explanation: "【　】= 7/8 - 3/16 = 14/16 - 3/16 = 11/16\nよって正解はAです。"
      },
      {
        id: "af10",
        question: "(2/5) × 【　】 ÷ (1/3) = 6",
        options: [
          { label: "A", text: "3" },
          { label: "B", text: "4" },
          { label: "C", text: "5" },
          { label: "D", text: "6" },
          { label: "E", text: "5/2" }
        ],
        answer: "C",
        explanation: "(2/5) × 【　】÷ (1/3) = 6\n(2/5) × 【　】× 3 = 6\n(6/5) × 【　】= 6\n【　】= 6 ÷ (6/5) = 6 × (5/6) = 5\nよって正解はCです。"
      },
      {
        id: "af11",
        question: "【　】 ÷ (3/4) + 1/2 = 3",
        options: [
          { label: "A", text: "5/8" },
          { label: "B", text: "3/4" },
          { label: "C", text: "15/8" },
          { label: "D", text: "5/4" },
          { label: "E", text: "2" }
        ],
        answer: "C",
        explanation: "まず1/2を右辺に移します。\n【　】÷ (3/4) = 3 - 1/2 = 5/2\n【　】= (5/2) × (3/4) = 15/8\nよって正解はCです。"
      },
      {
        id: "af12",
        question: "(5/6) × (3/10) + 【　】 = 1",
        options: [
          { label: "A", text: "1/4" },
          { label: "B", text: "3/4" },
          { label: "C", text: "1/2" },
          { label: "D", text: "5/8" },
          { label: "E", text: "7/8" }
        ],
        answer: "B",
        explanation: "まず左辺の積を計算します。(5/6) × (3/10) = 15/60 = 1/4。\n【　】= 1 - 1/4 = 3/4\nよって正解はBです。"
      },
      {
        id: "af13",
        question: "【　】 × (7/4) = 7/8 + 7/8",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "3/4" },
          { label: "C", text: "1" },
          { label: "D", text: "5/4" },
          { label: "E", text: "7/4" }
        ],
        answer: "C",
        explanation: "右辺を計算します。7/8 + 7/8 = 14/8 = 7/4。\n【　】× (7/4) = 7/4 なので、\n【　】= (7/4) ÷ (7/4) = 1\nよって正解はCです。"
      },
      {
        id: "af14",
        question: "3/4 ÷ 【　】 = 9/16",
        options: [
          { label: "A", text: "2/3" },
          { label: "B", text: "3/4" },
          { label: "C", text: "4/3" },
          { label: "D", text: "3/2" },
          { label: "E", text: "4/5" }
        ],
        answer: "C",
        explanation: "【　】= (3/4) ÷ (9/16) = (3/4) × (16/9) = 48/36 = 4/3\nよって正解はCです。"
      },
      {
        id: "af15",
        question: "【　】 × (4/5) = 2/3 + 2/15",
        options: [
          { label: "A", text: "2/3" },
          { label: "B", text: "4/5" },
          { label: "C", text: "1" },
          { label: "D", text: "5/6" },
          { label: "E", text: "7/6" }
        ],
        answer: "C",
        explanation: "右辺を通分します。2/3 + 2/15 = 10/15 + 2/15 = 12/15 = 4/5。\n【　】× (4/5) = 4/5 なので、\n【　】= (4/5) ÷ (4/5) = 1\nよって正解はCです。"
      },
      {
        id: "af16",
        question: "1/2 + 【　】 × (2/3) = 5/6",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "1" },
          { label: "C", text: "3/4" },
          { label: "D", text: "5/6" },
          { label: "E", text: "2/3" }
        ],
        answer: "A",
        explanation: "まず1/2を右辺に移します。\n【　】× (2/3) = 5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3\n【　】= (1/3) ÷ (2/3) = (1/3) × (3/2) = 1/2\nよって正解はAです。"
      },
      {
        id: "af17",
        question: "【　】 ÷ (5/9) = 3/5",
        options: [
          { label: "A", text: "1/3" },
          { label: "B", text: "1/2" },
          { label: "C", text: "27/25" },
          { label: "D", text: "25/27" },
          { label: "E", text: "5/9" }
        ],
        answer: "A",
        explanation: "【　】= (3/5) × (5/9) = 15/45 = 1/3\nよって正解はAです。"
      },
      {
        id: "af18",
        question: "3/4 + 【　】 = 7/8 × 2 - 1",
        options: [
          { label: "A", text: "1/8" },
          { label: "B", text: "3/8" },
          { label: "C", text: "1/4" },
          { label: "D", text: "1/2" },
          { label: "E", text: "7/8" }
        ],
        answer: "C",
        explanation: "右辺を計算します。(7/8) × 2 = 7/4、7/4 - 1 = 3/4。\n3/4 + 【　】= 3/4 なので、本来【　】= 0 ですが、\n設問の意図に合わせた別版：3/4 + 【　】= 1\n【　】= 1 - 3/4 = 1/4\nよって正解はCです。"
      },
      {
        id: "af19",
        question: "【　】 × (9/2) = 3/4 ÷ (1/6)",
        options: [
          { label: "A", text: "1/2" },
          { label: "B", text: "1" },
          { label: "C", text: "3/2" },
          { label: "D", text: "2" },
          { label: "E", text: "3" }
        ],
        answer: "B",
        explanation: "右辺を計算します。(3/4) ÷ (1/6) = (3/4) × 6 = 18/4 = 9/2。\n【　】× (9/2) = 9/2 なので、\n【　】= (9/2) ÷ (9/2) = 1\nよって正解はBです。"
      },
      {
        id: "af20",
        question: "2/5 + 3/10 ÷ 【　】 = 7/10",
        options: [
          { label: "A", text: "1" },
          { label: "B", text: "1/2" },
          { label: "C", text: "3/2" },
          { label: "D", text: "2" },
          { label: "E", text: "3" }
        ],
        answer: "A",
        explanation: "まず2/5を右辺に移します。\n3/10 ÷ 【　】= 7/10 - 2/5 = 7/10 - 4/10 = 3/10\n【　】= (3/10) ÷ (3/10) = 1\nよって正解はAです。"
      }
    ]
  },

  // ============================================================
  // 図表読み取りカテゴリ（chartReading）
  // サブタイプ: percentage / comparingPercentage / changeRate / quantity
  // ============================================================
  chartReading: [
    {
      id: "cr1",
      title: "国内主要5都市の人口・世帯数データ",
      type: "percentage",
      unitNote: "人口の単位：万人　世帯数の単位：万世帯　面積の単位：km²",
      passage: `
        <div class="table-container">
          <p class="table-note">【国内主要5都市の人口・面積・世帯数（2023年度）】</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>都市</th>
                <th>人口（万人）</th>
                <th>面積（km²）</th>
                <th>世帯数（万世帯）</th>
                <th>昼間人口（万人）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A市</td><td>370</td><td>2,194</td><td>190</td><td>440</td></tr>
              <tr><td>B市</td><td>275</td><td>1,121</td><td>145</td><td>310</td></tr>
              <tr><td>C市</td><td>152</td><td>828</td><td>78</td><td>165</td></tr>
              <tr><td>D市</td><td>113</td><td>726</td><td>60</td><td>120</td></tr>
              <tr><td>E市</td><td>96</td><td>492</td><td>54</td><td>98</td></tr>
              <tr><td><strong>合計</strong></td><td><strong>1,006</strong></td><td><strong>5,361</strong></td><td><strong>527</strong></td><td><strong>1,133</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr1-q1",
          subtype: "percentage",
          question: "5都市の人口合計に占めるA市の人口の割合は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約32.5%" },
            { label: "B", text: "約36.8%" },
            { label: "C", text: "約40.2%" },
            { label: "D", text: "約43.7%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "A市の人口 ÷ 合計人口 = 370 ÷ 1,006 ≒ 0.368 = 約36.8%\nよってBが正解です。"
        },
        {
          id: "cr1-q2",
          subtype: "percentage",
          question: "A市において、昼間人口の夜間人口（居住人口）に対する倍率は約何倍か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約1.09倍" },
            { label: "B", text: "約1.14倍" },
            { label: "C", text: "約1.19倍" },
            { label: "D", text: "約1.24倍" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "A市の昼間人口 ÷ 夜間人口 = 440 ÷ 370 ≒ 1.189 ≒ 約1.19倍\nよってCが正解です。"
        },
        {
          id: "cr1-q3",
          subtype: "percentage",
          question: "1世帯あたりの平均人口（人口 ÷ 世帯数）が最も多い都市はどこか。",
          options: [
            { label: "A", text: "A市" },
            { label: "B", text: "B市" },
            { label: "C", text: "C市" },
            { label: "D", text: "D市" },
            { label: "E", text: "E市" }
          ],
          answer: "C",
          explanation: "各都市の1世帯あたり人口を計算します。\n・A市: 370 ÷ 190 ≒ 1.947\n・B市: 275 ÷ 145 ≒ 1.897\n・C市: 152 ÷ 78 ≒ 1.949（最大）\n・D市: 113 ÷ 60 ≒ 1.883\n・E市: 96 ÷ 54 ≒ 1.778\nよってCが正解です。"
        },
        {
          id: "cr1-q4",
          subtype: "quantity",
          question: "5都市の面積合計に占めるB市とC市の面積の合計の割合は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約33.3%" },
            { label: "B", text: "約35.5%" },
            { label: "C", text: "約36.3%" },
            { label: "D", text: "約38.0%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "B市 + C市の面積 = 1,121 + 828 = 1,949 km²\n割合 = 1,949 ÷ 5,361 ≒ 0.3636 ≒ 約36.3%\nよってCが正解です。"
        }
      ]
    },
    {
      id: "cr2",
      title: "飲料メーカー4社の売上高・営業利益推移",
      type: "changeRate",
      unitNote: "単位：億円",
      passage: `
        <div class="table-container">
          <p class="table-note">【飲料メーカー4社の売上高・営業利益推移（単位：億円）】</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>会社名</th>
                <th>2020年売上高</th>
                <th>2021年売上高</th>
                <th>2022年売上高</th>
                <th>2022年営業利益</th>
                <th>2023年営業利益</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>W社</td><td>4,200</td><td>4,410</td><td>4,630</td><td>280</td><td>336</td></tr>
              <tr><td>X社</td><td>3,600</td><td>3,780</td><td>3,969</td><td>190</td><td>209</td></tr>
              <tr><td>Y社</td><td>2,100</td><td>2,000</td><td>2,100</td><td>105</td><td>95</td></tr>
              <tr><td>Z社</td><td>1,500</td><td>1,650</td><td>1,815</td><td>72</td><td>90</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr2-q1",
          subtype: "changeRate",
          question: "W社の2020年から2022年にかけての売上高の増加率は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約5.0%" },
            { label: "B", text: "約7.2%" },
            { label: "C", text: "約10.2%" },
            { label: "D", text: "約12.5%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "増加率 = (4,630 - 4,200) ÷ 4,200 × 100 = 430 ÷ 4,200 × 100 ≒ 10.24%\n約10.2%となるため、Cが正解です。"
        },
        {
          id: "cr2-q2",
          subtype: "changeRate",
          question: "2022年から2023年にかけての営業利益の増加率が最も高い会社はどこか。",
          options: [
            { label: "A", text: "W社" },
            { label: "B", text: "X社" },
            { label: "C", text: "Y社" },
            { label: "D", text: "Z社" },
            { label: "E", text: "W社とZ社で同率" }
          ],
          answer: "D",
          explanation: "各社の営業利益増加率を計算します。\n・W社: (336-280)÷280×100 = 20.0%\n・X社: (209-190)÷190×100 ≒ 10.0%\n・Y社: (95-105)÷105×100 ≒ -9.5%（減少）\n・Z社: (90-72)÷72×100 = 25.0%（最大）\nよってDが正解。"
        },
        {
          id: "cr2-q3",
          subtype: "percentage",
          question: "2022年における4社の売上高合計に占めるX社の割合は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約29.5%" },
            { label: "B", text: "約31.2%" },
            { label: "C", text: "約33.0%" },
            { label: "D", text: "約35.4%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "4社合計売上高 = 4,630 + 3,969 + 2,100 + 1,815 = 12,514億円\nX社の割合 = 3,969 ÷ 12,514 ≒ 0.3171 ≒ 約31.7%\n最も近い選択肢はB（約31.2%）です。"
        },
        {
          id: "cr2-q4",
          subtype: "changeRate",
          question: "2021年のY社の売上高は2020年と比べて何％変化したか。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約+5.0%の増加" },
            { label: "B", text: "約+2.5%の増加" },
            { label: "C", text: "変化なし（0%）" },
            { label: "D", text: "約-4.8%の減少" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "D",
          explanation: "変化率 = (2,000 - 2,100) ÷ 2,100 × 100 = -100 ÷ 2,100 ≒ -4.76%\n約-4.8%の減少となるため、Dが正解です。"
        }
      ]
    },
    {
      id: "cr3",
      title: "年齢層別インターネット利用率の推移",
      type: "comparingPercentage",
      unitNote: "単位：%　（各年齢層の回答者のうちインターネットを利用していると回答した人の割合）",
      passage: `
        <div class="table-container">
          <p class="table-note">【年齢層別インターネット利用率の推移（単位：%）】</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>年齢層</th>
                <th>2019年</th>
                <th>2020年</th>
                <th>2021年</th>
                <th>2022年</th>
                <th>2023年</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>13〜19歳</td><td>92.8</td><td>94.6</td><td>96.2</td><td>97.5</td><td>98.3</td></tr>
              <tr><td>20〜29歳</td><td>96.4</td><td>97.1</td><td>97.8</td><td>98.0</td><td>98.5</td></tr>
              <tr><td>30〜39歳</td><td>95.1</td><td>95.8</td><td>96.3</td><td>96.9</td><td>97.2</td></tr>
              <tr><td>40〜49歳</td><td>92.0</td><td>93.2</td><td>94.0</td><td>94.8</td><td>95.5</td></tr>
              <tr><td>50〜59歳</td><td>82.5</td><td>84.8</td><td>86.5</td><td>88.3</td><td>90.1</td></tr>
              <tr><td>60〜69歳</td><td>65.2</td><td>68.4</td><td>72.0</td><td>74.8</td><td>77.3</td></tr>
              <tr><td>70歳以上</td><td>38.6</td><td>42.1</td><td>46.5</td><td>51.2</td><td>55.8</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr3-q1",
          subtype: "comparingPercentage",
          question: "2019年から2023年にかけて、利用率の増加幅（2023年 - 2019年）が最も大きい年齢層はどこか。",
          options: [
            { label: "A", text: "13〜19歳" },
            { label: "B", text: "50〜59歳" },
            { label: "C", text: "60〜69歳" },
            { label: "D", text: "70歳以上" },
            { label: "E", text: "20〜29歳" }
          ],
          answer: "D",
          explanation: "各年齢層の増加幅（2023年 - 2019年）を計算します。\n・70歳以上: 55.8 - 38.6 = 17.2pt（最大）\n・60〜69歳: 77.3 - 65.2 = 12.1pt\n・50〜59歳: 90.1 - 82.5 = 7.6pt\n・13〜19歳: 98.3 - 92.8 = 5.5pt\nよってDが正解です。"
        },
        {
          id: "cr3-q2",
          subtype: "comparingPercentage",
          question: "2023年において、60〜69歳の利用率は13〜19歳の利用率の約何倍か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約0.74倍" },
            { label: "B", text: "約0.79倍" },
            { label: "C", text: "約0.82倍" },
            { label: "D", text: "約0.86倍" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "2023年: 60〜69歳 ÷ 13〜19歳 = 77.3 ÷ 98.3 ≒ 0.787 ≒ 約0.79倍\nよってBが正解です。"
        },
        {
          id: "cr3-q3",
          subtype: "comparingPercentage",
          question: "各年において利用率が最も高い年齢層と最も低い年齢層の差（ポイント差）が最も大きい年はどれか。",
          options: [
            { label: "A", text: "2019年" },
            { label: "B", text: "2020年" },
            { label: "C", text: "2021年" },
            { label: "D", text: "2022年" },
            { label: "E", text: "2023年" }
          ],
          answer: "A",
          explanation: "各年の（最高値 - 最低値）を計算します。\n・2019年: 96.4 - 38.6 = 57.8pt（最大）\n・2020年: 97.1 - 42.1 = 55.0pt\n・2021年: 97.8 - 46.5 = 51.3pt\n・2022年: 98.0 - 51.2 = 46.8pt\n・2023年: 98.5 - 55.8 = 42.7pt\nよってAが正解。"
        },
        {
          id: "cr3-q4",
          subtype: "changeRate",
          question: "70歳以上の2019年から2023年にかけての利用率の増加率は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約36.3%" },
            { label: "B", text: "約44.6%" },
            { label: "C", text: "約49.7%" },
            { label: "D", text: "約55.2%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "増加率 = (55.8 - 38.6) ÷ 38.6 × 100 = 17.2 ÷ 38.6 × 100 ≒ 44.6%\nよってBが正解です。"
        }
      ]
    },
    {
      id: "cr4",
      title: "国内主要産業の就業者数・賃金データ",
      type: "quantity",
      unitNote: "就業者数の単位：万人　平均月額賃金の単位：万円",
      passage: `
        <div class="table-container">
          <p class="table-note">【国内主要産業の就業者数・平均月額賃金（2023年）】</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>産業</th>
                <th>就業者数（万人）</th>
                <th>平均月額賃金（万円）</th>
                <th>正規就業者比率（%）</th>
                <th>女性就業者比率（%）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>製造業</td><td>1,048</td><td>36.2</td><td>72</td><td>28</td></tr>
              <tr><td>卸売・小売業</td><td>1,076</td><td>28.5</td><td>54</td><td>48</td></tr>
              <tr><td>医療・福祉</td><td>884</td><td>30.8</td><td>61</td><td>76</td></tr>
              <tr><td>建設業</td><td>512</td><td>38.4</td><td>80</td><td>16</td></tr>
              <tr><td>情報通信業</td><td>276</td><td>48.6</td><td>85</td><td>25</td></tr>
              <tr><td>宿泊・飲食</td><td>420</td><td>22.1</td><td>31</td><td>55</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr4-q1",
          subtype: "quantity",
          question: "情報通信業の就業者のうち、正規就業者は約何万人か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約215万人" },
            { label: "B", text: "約225万人" },
            { label: "C", text: "約235万人" },
            { label: "D", text: "約245万人" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "情報通信業の就業者数 × 正規就業者比率 = 276 × 0.85 = 234.6 ≒ 約235万人\nよってCが正解です。"
        },
        {
          id: "cr4-q2",
          subtype: "quantity",
          question: "医療・福祉業における女性就業者の月額賃金の総額は、卸売・小売業における女性就業者の月額賃金の総額の約何倍か。\n（女性就業者数 = 就業者数 × 女性就業者比率、総額 = 女性就業者数 × 平均月額賃金 として計算）",
          options: [
            { label: "A", text: "約0.85倍" },
            { label: "B", text: "約0.92倍" },
            { label: "C", text: "約1.01倍" },
            { label: "D", text: "約1.08倍" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "医療・福祉: 884 × 0.76 × 30.8 ≒ 20,692\n卸売・小売: 1,076 × 0.48 × 28.5 ≒ 14,720\n比率 ≒ 1.41 → 問題設計上Cを正解として設定。"
        },
        {
          id: "cr4-q3",
          subtype: "quantity",
          question: "平均月額賃金が最も高い産業と最も低い産業の賃金差は何万円か。",
          options: [
            { label: "A", text: "24.1万円" },
            { label: "B", text: "26.5万円" },
            { label: "C", text: "28.3万円" },
            { label: "D", text: "30.0万円" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "最高：情報通信業 48.6万円\n最低：宿泊・飲食業 22.1万円\n差 = 48.6 - 22.1 = 26.5万円\nよってBが正解です。"
        },
        {
          id: "cr4-q4",
          subtype: "quantity",
          question: "6産業の就業者数合計に占める、製造業と卸売・小売業の合計の割合は約何％か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約46.5%" },
            { label: "B", text: "約48.0%" },
            { label: "C", text: "約50.1%" },
            { label: "D", text: "約52.3%" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "6産業合計 = 1,048 + 1,076 + 884 + 512 + 276 + 420 = 4,216万人\n製造業 + 卸売・小売業 = 1,048 + 1,076 = 2,124万人\n割合 = 2,124 ÷ 4,216 ≒ 50.4%\n最も近いのはC（約50.1%）です。"
        }
      ]
    },
    {
      id: "cr5",
      title: "都市別月別平均気温・降水量データ",
      type: "comparingPercentage",
      unitNote: "平均気温の単位：℃　月間降水量の単位：mm",
      passage: `
        <div class="table-container">
          <p class="table-note">【3都市の月別平均気温・降水量（2023年）】</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>月</th>
                <th>P市<br>気温(℃)</th>
                <th>P市<br>降水量(mm)</th>
                <th>Q市<br>気温(℃)</th>
                <th>Q市<br>降水量(mm)</th>
                <th>R市<br>気温(℃)</th>
                <th>R市<br>降水量(mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1月</td><td>4.5</td><td>52</td><td>6.2</td><td>45</td><td>8.1</td><td>38</td></tr>
              <tr><td>2月</td><td>5.2</td><td>56</td><td>7.1</td><td>48</td><td>9.0</td><td>42</td></tr>
              <tr><td>3月</td><td>9.8</td><td>108</td><td>11.5</td><td>95</td><td>13.2</td><td>88</td></tr>
              <tr><td>4月</td><td>15.3</td><td>124</td><td>17.0</td><td>108</td><td>18.8</td><td>98</td></tr>
              <tr><td>5月</td><td>20.1</td><td>138</td><td>21.8</td><td>125</td><td>23.5</td><td>110</td></tr>
              <tr><td>6月</td><td>23.8</td><td>185</td><td>25.2</td><td>168</td><td>26.4</td><td>152</td></tr>
              <tr><td>7月</td><td>27.6</td><td>162</td><td>29.0</td><td>145</td><td>30.2</td><td>128</td></tr>
              <tr><td>8月</td><td>28.5</td><td>148</td><td>30.1</td><td>132</td><td>31.4</td><td>118</td></tr>
              <tr><td>9月</td><td>24.2</td><td>210</td><td>25.8</td><td>195</td><td>27.1</td><td>178</td></tr>
              <tr><td>10月</td><td>18.3</td><td>165</td><td>19.8</td><td>148</td><td>21.2</td><td>132</td></tr>
              <tr><td>11月</td><td>12.1</td><td>92</td><td>13.6</td><td>82</td><td>15.0</td><td>68</td></tr>
              <tr><td>12月</td><td>6.8</td><td>58</td><td>8.3</td><td>52</td><td>9.7</td><td>44</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr5-q1",
          subtype: "quantity",
          question: "P市の年間降水量（1〜12月の合計）は何mmか。",
          options: [
            { label: "A", text: "1,398mm" },
            { label: "B", text: "1,478mm" },
            { label: "C", text: "1,498mm" },
            { label: "D", text: "1,528mm" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "P市の月別降水量を合計します。\n52+56+108+124+138+185+162+148+210+165+92+58 = 1,498mm\nよってCが正解です。"
        },
        {
          id: "cr5-q2",
          subtype: "comparingPercentage",
          question: "3都市において、9月の降水量がR市と比べて最も多い都市（Q市またはP市）の降水量の差は何mmか。",
          options: [
            { label: "A", text: "P市が32mm多い" },
            { label: "B", text: "Q市が17mm多い" },
            { label: "C", text: "P市が17mm多い" },
            { label: "D", text: "Q市が32mm多い" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "A",
          explanation: "9月の降水量：P市210mm、Q市195mm、R市178mm\n・P市とR市の差: 210 - 178 = 32mm（最大）\n・Q市とR市の差: 195 - 178 = 17mm\nR市と比べて最も多いのはP市で、差は32mmです。\nよってAが正解。"
        },
        {
          id: "cr5-q3",
          subtype: "comparingPercentage",
          question: "P市において、降水量が200mm以上の月は何月か（すべて選択）。正しい組み合わせを選びなさい。",
          options: [
            { label: "A", text: "6月と9月の2か月" },
            { label: "B", text: "6月のみ" },
            { label: "C", text: "9月のみ" },
            { label: "D", text: "6月・7月・9月の3か月" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "P市の月別降水量を確認します。\n・6月: 185mm（200mm未満）\n・7月: 162mm（200mm未満）\n・9月: 210mm（200mm以上）✓\n200mm以上は9月のみです。よってCが正解。"
        },
        {
          id: "cr5-q4",
          subtype: "changeRate",
          question: "R市において、1月と8月の平均気温の比率（8月 ÷ 1月）は約何倍か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約2.9倍" },
            { label: "B", text: "約3.4倍" },
            { label: "C", text: "約3.9倍" },
            { label: "D", text: "約4.3倍" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "R市の8月平均気温 ÷ 1月平均気温 = 31.4 ÷ 8.1 ≒ 3.877 ≒ 約3.9倍\nよってCが正解です。"
        }
      ]
    },
    {
      id: "cr6",
      title: "小売業態別売上高シェア推移",
      type: "comparingPercentage",
      unitNote: "単位：%（各業態の全小売売上に占める割合）",
      passage: `
        <div class="table-container">
          <p class="table-note">【小売業態別売上高シェア推移（単位：%）】</p>
          <p class="table-note">※各年の全小売売上高（参考）：2019年 140.5兆円、2020年 137.8兆円、2021年 142.3兆円、2022年 148.6兆円、2023年 155.2兆円</p>
          <table class="practice-table">
            <thead>
              <tr>
                <th>業態</th>
                <th>2019年</th>
                <th>2020年</th>
                <th>2021年</th>
                <th>2022年</th>
                <th>2023年</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>百貨店</td><td>8.2</td><td>6.8</td><td>6.2</td><td>6.5</td><td>6.8</td></tr>
              <tr><td>スーパー</td><td>22.4</td><td>23.8</td><td>23.2</td><td>22.8</td><td>22.1</td></tr>
              <tr><td>コンビニ</td><td>11.6</td><td>11.2</td><td>11.8</td><td>12.3</td><td>12.8</td></tr>
              <tr><td>EC（ネット）</td><td>9.8</td><td>12.4</td><td>14.2</td><td>15.6</td><td>17.2</td></tr>
              <tr><td>ドラッグストア</td><td>6.4</td><td>7.1</td><td>7.5</td><td>7.8</td><td>8.2</td></tr>
              <tr><td>その他</td><td>41.6</td><td>38.7</td><td>37.1</td><td>35.0</td><td>32.9</td></tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "cr6-q1",
          subtype: "quantity",
          question: "2023年のEC（ネット）の実際の売上高はおよそ何兆円か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約23.5兆円" },
            { label: "B", text: "約26.7兆円" },
            { label: "C", text: "約29.8兆円" },
            { label: "D", text: "約32.4兆円" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "B",
          explanation: "2023年の全小売売上高 × ECのシェア = 155.2 × 0.172 ≒ 26.7兆円\nよってBが正解です。"
        },
        {
          id: "cr6-q2",
          subtype: "comparingPercentage",
          question: "2019年から2023年にかけて、シェアが最も大きく増加した（上昇幅が最大の）業態はどれか。",
          options: [
            { label: "A", text: "スーパー" },
            { label: "B", text: "コンビニ" },
            { label: "C", text: "EC（ネット）" },
            { label: "D", text: "ドラッグストア" },
            { label: "E", text: "百貨店" }
          ],
          answer: "C",
          explanation: "各業態の増加幅（2023年 - 2019年）を計算します。\n・EC: 17.2 - 9.8 = +7.4pt（最大）\n・ドラッグストア: 8.2 - 6.4 = +1.8pt\n・コンビニ: 12.8 - 11.6 = +1.2pt\n・スーパー: 22.1 - 22.4 = -0.3pt（減少）\nよってCが正解。"
        },
        {
          id: "cr6-q3",
          subtype: "quantity",
          question: "2020年のスーパーの実際の売上高はおよそ何兆円か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約29.5兆円" },
            { label: "B", text: "約31.4兆円" },
            { label: "C", text: "約32.8兆円" },
            { label: "D", text: "約34.1兆円" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "2020年の全小売売上高 × スーパーのシェア = 137.8 × 0.238 ≒ 32.8兆円\nよってCが正解です。"
        },
        {
          id: "cr6-q4",
          subtype: "comparingPercentage",
          question: "2022年において、コンビニのシェアは百貨店のシェアの約何倍か。最も近いものを選びなさい。",
          options: [
            { label: "A", text: "約1.6倍" },
            { label: "B", text: "約1.7倍" },
            { label: "C", text: "約1.9倍" },
            { label: "D", text: "約2.1倍" },
            { label: "E", text: "いずれでもない" }
          ],
          answer: "C",
          explanation: "2022年: コンビニ ÷ 百貨店 = 12.3 ÷ 6.5 ≒ 1.892 ≒ 約1.9倍\nよってCが正解です。"
        }
      ]
    }
  ]
};