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
          question: "5社の売上高의合計に対する、5社の研究開発費の合計の割合は約何％か。",
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
    }
  ]
};
