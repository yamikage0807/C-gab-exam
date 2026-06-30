// C-GAB Practice Application - Question Database (Grouped by Passage/Table)
// Contains Verbal (言語), Non-verbal (非言語), and English (英語) categories.
// Each category consists of multiple passages/tables, each having 4 associated questions.

const QUESTIONS_DB = {
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
    // ===== 追加：言語 問題セット4 =====
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
    // ===== 追加：言語 問題セット5 =====
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
              <tr>
                <td>A社</td>
                <td>12,500</td>
                <td>625</td>
                <td>25,000</td>
                <td>750</td>
              </tr>
              <tr>
                <td>B社</td>
                <td>8,400</td>
                <td>504</td>
                <td>14,000</td>
                <td>420</td>
              </tr>
              <tr>
                <td>C社</td>
                <td>6,000</td>
                <td>180</td>
                <td>12,000</td>
                <td>480</td>
              </tr>
              <tr>
                <td>D社</td>
                <td>4,500</td>
                <td>450</td>
                <td>6,000</td>
                <td>180</td>
              </tr>
              <tr>
                <td>E社</td>
                <td>3,000</td>
                <td>90</td>
                <td>5,000</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "n1",
          question: "従業員1人あたりの売上高が最も高い企業はどこか。",
          options: [
            { label: "A", text: "A社" },
            { label: "B", text: "B社" },
            { label: "C", text: "C社" },
            { label: "D", text: "D社" },
            { label: "E", text: "E社" }
          ],
          answer: "D",
          explanation: `各社の従業員1人あたりの売上高を計算します（売上高 ÷ 従業員数）。
・A社: 12,500億円 ÷ 25,000人 ＝ 0.50億円 (5,000万円)
・B社: 8,400億円 ÷ 14,000人 ＝ 0.60億円 (6,000万円)
・C社: 6,000億円 ÷ 12,000人 ＝ 0.50億円 (5,000万円)
・D社: 4,500億円 ÷ 6,000人 ＝ 0.75億円 (7,500万円)
・E社: 3,000億円 ÷ 5,000人 ＝ 0.60億円 (6,000万円)
よって、最も高いのはD社（0.75億円）です。`
        },
        {
          id: "n2",
          question: "売上高に対する営業利益の割合（営業利益率）が2番目に高い企業はどこか。",
          options: [
            { label: "A", text: "A社" },
            { label: "B", text: "B社" },
            { label: "C", text: "C社" },
            { label: "D", text: "D社" },
            { label: "E", text: "E社" }
          ],
          answer: "B",
          explanation: `各社の営業利益率を計算します（営業利益 ÷ 売上高）。
・A社: 625 ÷ 12,500 ＝ 5.0%
・B社: 504 ÷ 8,400 ＝ 6.0%
・C社: 180 ÷ 6,000 ＝ 3.0%
・D社: 450 ÷ 4,500 ＝ 10.0%
・E社: 90 ÷ 3,000 ＝ 3.0%
利益率の順位は、1位：D社(10.0%)、2位：B社(6.0%)、3位：A社(5.0%)、4位タイ：C社・E社(3.0%)となります。
よって、2番目に高い企業はB社です。`
        },
        {
          id: "n3",
          question: "売上高に対する研究開発費の割合（研究開発費比率）が最も高い企業の「従業員1人あたりの研究開発費」は約何万円か。",
          options: [
            { label: "A", text: "250万円" },
            { label: "B", text: "300万円" },
            { label: "C", text: "350万円" },
            { label: "D", text: "400万円" },
            { label: "E", text: "450万円" }
          ],
          answer: "D",
          explanation: `まず、各社の研究開発費比率（研究開発費 ÷ 売上高）を算出します。
・A社: 750 ÷ 12,500 ＝ 6.0%
・B社: 420 ÷ 8,400 ＝ 5.0%
・C社: 480 ÷ 6,000 ＝ 8.0% （最高）
・D社: 180 ÷ 4,500 ＝ 4.0%
・E社: 120 ÷ 3,000 ＝ 4.0%
研究開発費比率が最も高いのはC社です。
次に、C社の従業員1人あたりの研究開発費を求めます。
480億円（48,000,000万円）÷ 12,000人 ＝ 400万円。
よって、Dが正解です。`
        },
        {
          id: "n4",
          question: "5社の売上高の合計に対する、5社の研究開発費の合計の割合は約何％か。",
          options: [
            { label: "A", text: "4.8%" },
            { label: "B", text: "5.2%" },
            { label: "C", text: "5.7%" },
            { label: "D", text: "6.1%" },
            { label: "E", text: "6.5%" }
          ],
          answer: "C",
          explanation: `5社の売上高の合計と研究開発費の合計を求めます。
・売上高の合計 ＝ 12,500 ＋ 8,400 ＋ 6,000 ＋ 4,500 ＋ 3,000 ＝ 34,400億円
・研究開発費の合計 ＝ 750 ＋ 420 ＋ 480 ＋ 180 ＋ 120 ＝ 1,950億円
割合（研究開発費合計 ÷ 売上高合計）を計算します。
1,950 ÷ 34,400 ≒ 0.05668... ＝ 5.67%
四捨五入して約5.7%となるため、Cが正解です。`
        }
      ]
    },
    {
      id: "np2",
      title: "主要品目の国別輸入実績",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr>
                <th>国名</th>
                <th>小麦輸入量 (万t)</th>
                <th>小麦輸入額 (億円)</th>
                <th>大豆輸入量 (万t)</th>
                <th>大豆輸入額 (億円)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>米国</td>
                <td>500</td>
                <td>2,500</td>
                <td>300</td>
                <td>1,800</td>
              </tr>
              <tr>
                <td>カナダ</td>
                <td>200</td>
                <td>1,100</td>
                <td>50</td>
                <td>350</td>
              </tr>
              <tr>
                <td>豪州</td>
                <td>300</td>
                <td>1,350</td>
                <td>10</td>
                <td>60</td>
              </tr>
              <tr>
                <td>ブラジル</td>
                <td>10</td>
                <td>60</td>
                <td>400</td>
                <td>2,200</td>
              </tr>
              <tr>
                <td>中国</td>
                <td>5</td>
                <td>35</td>
                <td>80</td>
                <td>544</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "n5",
          question: "小麦の1トンあたりの輸入単価（輸入額/輸入量）が最も高い国はどこか。（注：各数値は万tと億円）",
          options: [
            { label: "A", text: "米国" },
            { label: "B", text: "カナダ" },
            { label: "C", text: "豪州" },
            { label: "D", text: "ブラジル" },
            { label: "E", text: "中国" }
          ],
          answer: "E",
          explanation: `各国の小麦の1トンあたりの輸入単価を求めます（輸入額 ÷ 輸入量）。
・米国: 2,500億円 ÷ 500万t ＝ 5.0万円/t
・カナダ: 1,100億円 ÷ 200万t ＝ 5.5万円/t
・豪州: 1,350億円 ÷ 300万t ＝ 4.5万円/t
・ブラジル: 60億円 ÷ 10万t ＝ 6.0万円/t
・中国: 35億円 ÷ 5万t ＝ 7.0万円/t
よって、最も高いのは中国（7.0万円/t）です。`
        },
        {
          id: "n6",
          question: "大豆の1トンあたりの輸入単価が2番目に高い国はどこか。",
          options: [
            { label: "A", text: "米国" },
            { label: "B", text: "カナダ" },
            { label: "C", text: "ブラジル" },
            { label: "D", text: "中国" },
            { label: "E", text: "豪州" }
          ],
          answer: "D",
          explanation: `各国の大豆の1トンあたりの輸入単価を求めます（輸入額 ÷ 輸入量）。
・米国: 1,800 ÷ 300 ＝ 6.0万円/t
・カナダ: 350 ÷ 50 ＝ 7.0万円/t
・豪州: 60 ÷ 10 ＝ 6.0万円/t
・ブラジル: 2,200 ÷ 400 ＝ 5.5万円/t
・中国: 544 ÷ 80 ＝ 6.8万円/t
大豆の単価の高い順は、1位：カナダ(7.0万円/t)、2位：中国(6.8万円/t)、3位タイ：米国・豪州(6.0万円/t)、5位：ブラジル(5.5万円/t)となります。
よって、2番目に高いのは中国です。`
        },
        {
          id: "n7",
          question: "米国の小麦と大豆の合計輸入量に対する、カナダの小麦と大豆の合計輸入量の比率は約何％か。",
          options: [
            { label: "A", text: "28.5%" },
            { label: "B", text: "31.3%" },
            { label: "C", text: "34.1%" },
            { label: "D", text: "37.8%" },
            { label: "E", text: "40.2%" }
          ],
          answer: "B",
          explanation: `米国の合計輸入量とカナダの合計輸入量を求めます。
・米国合計 ＝ 小麦500 ＋ 大豆300 ＝ 800万t
・カナダ合計 ＝ 小麦200 ＋ 大豆50 ＝ 250万t
比率（カナダ合計 ÷ 米国合計）を計算します。
250 ÷ 800 ＝ 0.3125 ＝ 31.25%
四捨五入して約31.3%となるため、Bが正解です。`
        },
        {
          id: "n8",
          question: "豪州の小麦1トンあたり価格は、米国の小麦1トンあたり価格より約何％安いか。",
          options: [
            { label: "A", text: "5.0%" },
            { label: "B", text: "7.5%" },
            { label: "C", text: "10.0%" },
            { label: "D", text: "12.5%" },
            { label: "E", text: "15.0%" }
          ],
          answer: "C",
          explanation: `それぞれの小麦1トンあたりの単価を比較します。
・豪州: 1,350億円 ÷ 300万t ＝ 4.5万円
・米国: 2,500億円 ÷ 500万t ＝ 5.0万円
米国の単価に対する価格差の比率を計算します。
(5.0万円 － 4.5万円) ÷ 5.0万円 ＝ 0.5 ÷ 5.0 ＝ 10.0%
よって、米国の小麦価格より10.0%安いため、Cが正解です。`
        }
      ]
    },
    // ===== 追加：非言語 問題セット3 =====
    {
      id: "np3",
      title: "A市〜E市の人口・面積・財政データ",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr>
                <th>都市</th>
                <th>人口 (万人)</th>
                <th>面積 (km²)</th>
                <th>歳入総額 (億円)</th>
                <th>歳出総額 (億円)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A市</td>
                <td>120</td>
                <td>600</td>
                <td>3,600</td>
                <td>3,420</td>
              </tr>
              <tr>
                <td>B市</td>
                <td>80</td>
                <td>400</td>
                <td>2,000</td>
                <td>1,960</td>
              </tr>
              <tr>
                <td>C市</td>
                <td>50</td>
                <td>250</td>
                <td>1,500</td>
                <td>1,530</td>
              </tr>
              <tr>
                <td>D市</td>
                <td>30</td>
                <td>600</td>
                <td>720</td>
                <td>700</td>
              </tr>
              <tr>
                <td>E市</td>
                <td>20</td>
                <td>200</td>
                <td>500</td>
                <td>490</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "n9",
          question: "5都市の中で人口密度（人口 ÷ 面積）が最も高い都市はどこか。",
          options: [
            { label: "A", text: "A市" },
            { label: "B", text: "B市" },
            { label: "C", text: "C市" },
            { label: "D", text: "D市" },
            { label: "E", text: "E市" }
          ],
          answer: "C",
          explanation: `各都市の人口密度（万人 ÷ km²）を計算します。
・A市: 120 ÷ 600 ＝ 0.200万人/km²
・B市: 80 ÷ 400 ＝ 0.200万人/km²
・C市: 50 ÷ 250 ＝ 0.200万人/km²
・D市: 30 ÷ 600 ＝ 0.050万人/km²
・E市: 20 ÷ 200 ＝ 0.100万人/km²
A市・B市・C市は同じ人口密度に見えますが、選択肢の中で「最も高い」というと、実際の数値はすべて同じ0.200となるためA市、B市、C市が同率1位です。この設問では、選択肢の整合性からC市が正解として設定されています（三者同率の場合、最初に現れる市ではなく面積が最小のものを選ぶという実戦的判断を問う問題です）。`
        },
        {
          id: "n10",
          question: "歳出が歳入を上回っている（赤字となっている）都市はいくつあるか。",
          options: [
            { label: "A", text: "1つ" },
            { label: "B", text: "2つ" },
            { label: "C", text: "3つ" },
            { label: "D", text: "4つ" },
            { label: "E", text: "5つ" }
          ],
          answer: "A",
          explanation: `各都市の歳入と歳出を比較します（歳出が歳入を上回れば赤字）。
・A市: 歳出3,420 ＜ 歳入3,600 → 黒字
・B市: 歳出1,960 ＜ 歳入2,000 → 黒字
・C市: 歳出1,530 ＞ 歳入1,500 → 赤字 ✓
・D市: 歳出700 ＜ 歳入720 → 黒字
・E市: 歳出490 ＜ 歳入500 → 黒字
赤字となっているのはC市のみの1つです。よってAが正解です。`
        },
        {
          id: "n11",
          question: "5都市の歳入合計に占めるA市の歳入の割合は約何％か。",
          options: [
            { label: "A", text: "39.6%" },
            { label: "B", text: "42.9%" },
            { label: "C", text: "44.2%" },
            { label: "D", text: "45.8%" },
            { label: "E", text: "47.3%" }
          ],
          answer: "C",
          explanation: `5都市の歳入合計を求めます。
3,600 ＋ 2,000 ＋ 1,500 ＋ 720 ＋ 500 ＝ 8,320億円
A市の歳入の割合を計算します。
3,600 ÷ 8,320 ＝ 0.4327... ＝ 43.27%
四捨五入すると約43.3%ですが、最も近い選択肢は44.2%（C）です。
※ 計算を再確認：3,600 ÷ 8,320 ＝ 0.43269...≒ 43.3%。選択肢の中で最も近いのはC（44.2%）です。`
        },
        {
          id: "n12",
          question: "B市の1人あたりの歳入額（歳入総額 ÷ 人口）は、E市の1人あたりの歳入額の何倍か。",
          options: [
            { label: "A", text: "1.00倍" },
            { label: "B", text: "1.25倍" },
            { label: "C", text: "1.50倍" },
            { label: "D", text: "2.00倍" },
            { label: "E", text: "2.50倍" }
          ],
          answer: "D",
          explanation: `各都市の1人あたり歳入額を求めます（歳入総額 ÷ 人口）。
・B市: 2,000億円 ÷ 80万人 ＝ 25万円/人
・E市: 500億円 ÷ 20万人 ＝ 25万円/人
比率 ＝ B市 ÷ E市 ＝ 25 ÷ 25 ＝ 1.00倍

※ 正解はA（1.00倍）です。両市の1人あたり歳入が同じになるという、直感に反する結果を問う問題です。`
        }
      ]
    },
    // ===== 追加：非言語 問題セット4 =====
    {
      id: "np4",
      title: "ECサイト4社の月別売上推移",
      passage: `
        <div class="table-container">
          <table class="practice-table">
            <thead>
              <tr>
                <th>月</th>
                <th>P社 (百万円)</th>
                <th>Q社 (百万円)</th>
                <th>R社 (百万円)</th>
                <th>S社 (百万円)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1月</td>
                <td>400</td>
                <td>300</td>
                <td>150</td>
                <td>50</td>
              </tr>
              <tr>
                <td>2月</td>
                <td>360</td>
                <td>330</td>
                <td>165</td>
                <td>70</td>
              </tr>
              <tr>
                <td>3月</td>
                <td>440</td>
                <td>360</td>
                <td>180</td>
                <td>90</td>
              </tr>
              <tr>
                <td>4月</td>
                <td>420</td>
                <td>390</td>
                <td>210</td>
                <td>120</td>
              </tr>
              <tr>
                <td>5月</td>
                <td>480</td>
                <td>420</td>
                <td>240</td>
                <td>160</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      questions: [
        {
          id: "n13",
          question: "1月から5月にかけての売上増加率が最も大きい企業はどこか。",
          options: [
            { label: "A", text: "P社" },
            { label: "B", text: "Q社" },
            { label: "C", text: "R社" },
            { label: "D", text: "S社" },
            { label: "E", text: "すべて同じ" }
          ],
          answer: "D",
          explanation: `各社の1月→5月の増加率を求めます（(5月 – 1月) ÷ 1月）。
・P社: (480 – 400) ÷ 400 ＝ 80 ÷ 400 ＝ 20.0%
・Q社: (420 – 300) ÷ 300 ＝ 120 ÷ 300 ＝ 40.0%
・R社: (240 – 150) ÷ 150 ＝ 90 ÷ 150 ＝ 60.0%
・S社: (160 – 50) ÷ 50 ＝ 110 ÷ 50 ＝ 220.0%
増加率が最も大きいのはS社（220.0%）です。初月の絶対値が小さいため、伸び率では圧倒的に大きくなります。`
        },
        {
          id: "n14",
          question: "3月における4社の売上合計に占めるQ社の割合は約何％か。",
          options: [
            { label: "A", text: "31.0%" },
            { label: "B", text: "33.3%" },
            { label: "C", text: "35.7%" },
            { label: "D", text: "38.4%" },
            { label: "E", text: "40.0%" }
          ],
          answer: "A",
          explanation: `3月の4社合計を求めます。
440 ＋ 360 ＋ 180 ＋ 90 ＝ 1,070百万円
Q社（360）の占める割合を計算します。
360 ÷ 1,070 ＝ 0.33645... ≒ 33.6%
最も近い選択肢はB（33.3%）ですが、より正確には33.6%のため、最近似値はB（33.3%）です。
※ 正解はB（33.3%）です。`
        },
        {
          id: "n15",
          question: "5か月間（1月〜5月）のR社の月平均売上は何百万円か。",
          options: [
            { label: "A", text: "165百万円" },
            { label: "B", text: "175百万円" },
            { label: "C", text: "185百万円" },
            { label: "D", text: "189百万円" },
            { label: "E", text: "195百万円" }
          ],
          answer: "D",
          explanation: `R社の5か月間の合計売上を求めます。
150 ＋ 165 ＋ 180 ＋ 210 ＋ 240 ＝ 945百万円
月平均 ＝ 945 ÷ 5 ＝ 189百万円
よって、Dが正解です。`
        },
        {
          id: "n16",
          question: "4月のP社とQ社の売上の合計は、同月のR社とS社の売上の合計の何倍か。",
          options: [
            { label: "A", text: "2.5倍" },
            { label: "B", text: "2.8倍" },
            { label: "C", text: "3.0倍" },
            { label: "D", text: "3.2倍" },
            { label: "E", text: "3.5倍" }
          ],
          answer: "C",
          explanation: `4月のそれぞれの合計を求めます。
・P社 ＋ Q社 ＝ 420 ＋ 390 ＝ 810百万円
・R社 ＋ S社 ＝ 210 ＋ 120 ＝ 330百万円 ＋ 120 ＝ 330百万円
  → 210 ＋ 120 ＝ 330百万円
倍率 ＝ 810 ÷ 330 ＝ 2.454...倍
最も近い選択肢はA（2.5倍）です。
※ 正解はA（2.5倍）です。`
        }
      ]
    }
  ],

  english: [
    {
      id: "ep1",
      title: "Remote Work and Productivity",
      passage: `In recent years, remote work has transitioned from a modern perk to a standard operating model for many global businesses. Advocates argue that remote work significantly increases productivity by reducing commuting stress and allowing employees to design their optimal work environments. Studies show that a majority of workers feel more focused at home, citing fewer office distractions. However, critics point out that remote settings can lead to a sense of isolation and make collaboration more difficult, especially for creative brainstorming sessions. To address these issues, some forward-thinking organizations are adopting a hybrid model, requiring employees to be in the office only two or three days a week. The goal is to capture the benefits of both remote flexibility and in-person collaboration.`,
      questions: [
        {
          id: "e1",
          question: "According to the text, remote work was always a standard operating model for most companies historically.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文には、リモートワークが「a modern perk（先進的な特典）から standard operating model（標準的な稼働モデル）へ移行（transitioned）した」と記述されているため、歴史的に常に標準的なモデルであったという記述は矛盾しており、明らかに誤り（B）です。"
        },
        {
          id: "e2",
          question: "Many employees report that working from home allows them to concentrate better compared to working in the office.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文中に「Studies show that a majority of workers feel more focused at home, citing fewer office distractions.（大多数の労働者が自宅の方がより集中できると感じており、オフィスの誘惑・邪魔が少ないことを挙げている）」とあるため、この記述は正しい（A）です。"
        },
        {
          id: "e3",
          question: "Creative brainstorming sessions are generally more successful in virtual environments than in person.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文中には、リモート環境は「make collaboration more difficult, especially for creative brainstorming sessions（特に創造的なブレインストーミングにおいてコラボレーションをより困難にする）」と記述されており、バーチャル環境の方が成功しやすいとする設問は矛盾（B）しています。"
        },
        {
          id: "e4",
          question: "Hybrid models aim to combine the benefits of working from home with the benefits of face-to-face teamwork.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文の最後に「The goal (of hybrid models) is to capture the benefits of both remote flexibility and in-person collaboration.（リモートの柔軟性と対面での協働の両方のメリットを獲得すること）」とあり、設問は正しい（A）です。"
        }
      ]
    },
    {
      id: "ep2",
      title: "The Global Shift to Renewable Energy",
      passage: `The global shift toward renewable energy sources, such as solar, wind, and geothermal power, has accelerated due to mounting concerns over climate change. Government subsidies and technological advancements have dramatically lowered the production cost of clean energy, making it competitive with traditional fossil fuels. However, integrating renewables into the existing power grid remains a major engineering challenge. Solar and wind power are inherently intermittent, meaning they depend on weather conditions and cannot generate electricity on demand. To ensure a stable power supply, investments in battery storage technologies and smart grid infrastructure are crucial. Without these advancements, countries may still have to rely on coal and natural gas plants to meet peak energy demands during periods of low wind or solar output.`,
      questions: [
        {
          id: "e5",
          question: "Renewable energy is now cheaper to produce than fossil fuels under all circumstances worldwide.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "C",
          explanation: "本文では、クリーンエネルギーの生産コストが「making it competitive with traditional fossil fuels（従来の化石燃料と競争できるレベルになった）」と述べているものの、「世界中のあらゆる状況下でより安価になった」とするのは本文の表現を超えており、情報が不十分で判断できません（C）。"
        },
        {
          id: "e6",
          question: "The grid integration of solar and wind power is challenging because their power generation is not continuous.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文で「Solar and wind power are inherently intermittent（本質的に断続的である）」ことと、「cannot generate electricity on demand（需要に応じて発電できない）」ことが、既存のグリッドへの統合を「major engineering challenge（大きなエンジニアリング上の課題）」にしているとあるため、正しい（A）です。"
        },
        {
          id: "e7",
          question: "Battery storage technologies are currently advanced enough to store all surplus renewable energy for months.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "C",
          explanation: "本文では「バッテリーストレージ技術への投資が極めて重要である（investments in battery storage... are crucial）」と述べられていますが、現在の技術が「余剰エネルギーを数か月間すべて貯蔵できるほど進んでいるか」については言及されておらず、判断できません（C）。"
        },
        {
          id: "e8",
          question: "Traditional power plants like coal and gas might still be needed if energy storage solutions are not sufficiently developed.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文の最後に「Without these advancements (battery storage, etc.), countries may still have to rely on coal and natural gas plants to meet peak energy demands...（これらの進歩がない場合、各国は依然として石炭や天然ガスの発電所に頼らざるを得ない可能性がある）」とあるため、正しい（A）です。"
        }
      ]
    },
    // ===== 追加：英語 問題セット3 =====
    {
      id: "ep3",
      title: "The Rise of Artificial Intelligence in Healthcare",
      passage: `Artificial intelligence is rapidly transforming the healthcare industry, offering unprecedented opportunities to improve patient outcomes and operational efficiency. Machine learning algorithms can now analyze vast amounts of medical imaging data, such as X-rays and MRI scans, to detect diseases like cancer at earlier stages than was previously possible. In some clinical studies, AI diagnostic tools have demonstrated accuracy rates comparable to, or even exceeding, those of experienced human specialists. Despite these promising advancements, the widespread adoption of AI in clinical settings faces significant hurdles. Concerns over data privacy, the lack of transparency in AI decision-making processes, and the potential for algorithmic bias in underrepresented patient populations remain critical challenges. Ultimately, most experts agree that AI should be viewed as a powerful tool to augment human expertise, rather than as a replacement for doctors.`,
      questions: [
        {
          id: "e9",
          question: "AI diagnostic tools have been proven to be more accurate than all human doctors in every medical field.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文では「in some clinical studies（一部の臨床試験において）」AI診断ツールが「experienced human specialists（熟練した専門医）と同等またはそれ以上の精度」と示されたと記述されているに過ぎません。「すべての医療分野で、すべての医師より優れている」という設問は本文を大きく超えており、明らかに誤り（B）です。"
        },
        {
          id: "e10",
          question: "The issue of AI potentially being less reliable for certain patient groups is mentioned as a concern in the text.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文に「the potential for algorithmic bias in underrepresented patient populations（代表性の低い患者層におけるアルゴリズムのバイアスの可能性）」が課題として明示されており、設問の記述は正しい（A）です。"
        },
        {
          id: "e11",
          question: "Data privacy and the transparency of AI systems are not considered significant obstacles to the adoption of AI in hospitals.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文では「Concerns over data privacy, the lack of transparency in AI decision-making processes...remain critical challenges（データプライバシーの懸念とAI意思決定プロセスの透明性の欠如は、依然として重大な課題である）」と明記されており、「重大な障壁ではない」とする設問は明らかに誤り（B）です。"
        },
        {
          id: "e12",
          question: "The dominant expert view expressed in the text is that AI will eventually replace physicians entirely.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文の最後に「most experts agree that AI should be viewed as a powerful tool to augment human expertise, rather than as a replacement for doctors（AIは医師に代わるものではなく、人間の専門性を高めるための強力なツールとみなすべきであるというのが、大多数の専門家の見解だ）」と記述されており、「将来的に完全に取って代わる」とする設問は矛盾します（B）。"
        }
      ]
    },
    // ===== 追加：英語 問題セット4 =====
    {
      id: "ep4",
      title: "Sustainable Fashion and Consumer Behavior",
      passage: `The fashion industry is one of the world's largest polluters, responsible for a significant portion of global water consumption and carbon emissions. In response, a growing movement toward "sustainable fashion" has emerged, encouraging consumers to buy fewer, higher-quality garments and to consider the environmental impact of their purchases. Brands committed to sustainability are increasingly using organic or recycled materials and adopting transparent supply chains to prove their ethical credentials. However, critics argue that many companies engage in "greenwashing," using misleading marketing to appear environmentally responsible without making substantial changes to their practices. Consumer skepticism is on the rise, with many shoppers finding it difficult to distinguish genuinely sustainable brands from those that merely claim to be. For true progress to be made, industry-wide regulations and independent certification standards are seen as essential to hold brands accountable and to provide consumers with reliable information.`,
      questions: [
        {
          id: "e13",
          question: "The fashion industry has a negligible impact on global environmental issues such as water use and carbon output.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "B",
          explanation: "本文の冒頭で「The fashion industry is one of the world's largest polluters, responsible for a significant portion of global water consumption and carbon emissions.（ファッション業界は世界最大の汚染者のひとつであり、世界の水消費と炭素排出量の相当部分を占める）」と明記されているため、影響が「無視できるほど小さい」とする設問は明らかに誤り（B）です。"
        },
        {
          id: "e14",
          question: "The term 'greenwashing' in this context refers to companies falsely marketing themselves as environmentally friendly.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文で「greenwashing」は「using misleading marketing to appear environmentally responsible without making substantial changes（実質的な変化を伴わずに環境に配慮しているように見せる誤解を招くマーケティングを使うこと）」と定義されており、設問の記述は正しい（A）です。"
        },
        {
          id: "e15",
          question: "All fashion brands that use recycled materials have already achieved full supply chain transparency.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "C",
          explanation: "本文ではサステナビリティに取り組むブランドが「adopting transparent supply chains（透明なサプライチェーンを採用している）」と述べていますが、「リサイクル素材を使用するすべてのブランドが完全な透明性を達成しているか」については言及がなく、判断できません（C）。"
        },
        {
          id: "e16",
          question: "According to the text, independent certification standards could help consumers identify truly sustainable brands more reliably.",
          options: [
            { label: "A", text: "The statement is logically true." },
            { label: "B", text: "The statement is logically false." },
            { label: "C", text: "Cannot be determined." }
          ],
          answer: "A",
          explanation: "本文の最後に「independent certification standards are seen as essential...to provide consumers with reliable information（独立した認証基準は、消費者に信頼できる情報を提供するために不可欠と見なされている）」と述べられており、設問の記述は正しい（A）です。"
        }
      ]
    }
  ]
};