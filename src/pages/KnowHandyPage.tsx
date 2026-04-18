import './KnowHandyPage.css'

type ValueItem = {
  en: string
  jaTitle: string
  body: string
  note?: string
}

const VALUE_ITEMS: ValueItem[] = [
  {
    en: 'For People, For the Future',
    jaTitle: '全ては人のため、未来のため',
    body: '仕事は自身のためにあるのではなく、ユーザー、チーム、社会、未来のためにある',
  },
  {
    en: 'Students First',
    jaTitle: '生徒が第一',
    body: '高校生の未来につながる意思決定を優先する',
  },
  {
    en: 'Decisive and Fast-acting',
    jaTitle: '自ら考え、決め、神速に行動する',
    body:
      '他責に成長なし。自ら決断し、責任を持ち、考える前に動きだすことで、スピードを生み出す',
  },
  {
    en: 'Reliable Professional',
    jaTitle: '当たり前を、確実に',
    body:
      '当たり前レベルが高い、誰からも信頼されるプロフェッショナルを目指す',
  },
  {
    en: 'Mutually Respectful',
    jaTitle: '他者への敬意',
    body:
      '全てのステークホルダーの考え方を尊重し、敬意をもって接する',
    note:
      '（※ユーザー、クライアント、パートナー企業、雇用形態に関わらずチームメンバー全員）',
  },
  {
    en: 'Flat Team',
    jaTitle: '目的のために、結束する',
    body:
      '役職やキャリアに関係なく、正しい意見を採用し、本質や、中身を大切にする組織にする',
  },
  {
    en: 'Health-focused Mindset',
    jaTitle: '健康が全てのベース',
    body:
      '自ら健康に生き、自分に関わる人たちも健康であることは、人生を楽しむ全ての基点になる',
  },
]

export function KnowHandyPage() {
  return (
    <main className="know-handy">
      <div className="know-handy__inner">
        <div className="know-handy__mission-stage">
          <section
            className="know-handy__mission"
            aria-labelledby="know-handy-mission-heading"
          >
            <h2 id="know-handy-mission-heading" className="know-handy__mission-label">
              Mission
            </h2>
            <p className="know-handy__mission-text">
              <span className="know-handy__mission-line">
                高校生が、進路の自己決定に
              </span>
              <span className="know-handy__mission-line">
                必要な情報と支援を最適な形で提供する
              </span>
            </p>
            <p className="know-handy__mission-desc">
              高校生の進路を、本人の手にとり戻す。
              <br />
              そのために私たちは、情報と支援を最適な形で届ける。
              <br />
              学校とともに進路情報を開き、
              <br />
              迷いを減らし、自分で選ぶ力を支える。
              <br />
              そんな希望のある選択を、未来に残していくために。
            </p>
          </section>
        </div>
      </div>

      <section
        className="know-handy__value-band"
        aria-labelledby="know-handy-value-heading"
      >
        <div className="know-handy__value-inner">
          <header className="know-handy__value-header">
            <h2 id="know-handy-value-heading" className="know-handy__value-heading-en">
              Value
            </h2>
            <p className="know-handy__value-heading-ja">大切にする価値</p>
            <p className="know-handy__value-intro">
              組織として、Vision、Missionを果たすために
              <br />
              下記7つのValueを大切にしています。
            </p>
          </header>
          <ul className="know-handy__value-list">
            {VALUE_ITEMS.map((item) => (
              <li key={item.en} className="know-handy__value-card">
                <p className="know-handy__value-card-en">{item.en}</p>
                <div className="know-handy__value-card-body">
                  <span className="know-handy__value-card-dot" aria-hidden="true" />
                  <div className="know-handy__value-card-text">
                    <p className="know-handy__value-card-line">
                      <strong className="know-handy__value-card-ja-title">
                        {item.jaTitle}
                      </strong>
                      {' '}
                      <span className="know-handy__value-card-desc">{item.body}</span>
                    </p>
                    {item.note ? (
                      <p className="know-handy__value-card-note">{item.note}</p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="know-handy__inner">
        <section
          className="know-handy__section"
          aria-labelledby="know-handy-culture-heading"
        >
          <h2 id="know-handy-culture-heading" className="know-handy__h2">
            スピードと成果を重んじる文化
          </h2>
          <div className="know-handy__prose">
            <p>
              議論を尽くすことも大切ですが、私たちは「決めたらすぐ動く」「動いた結果から学ぶ」を何より重視しています。現場の課題に向き合うほど、迷いよりも試行の回数が価値を生む場面が多く、個人・チームともに実行力が信頼の土台になります。
            </p>
          </div>
        </section>

        <section
          className="know-handy__section"
          aria-labelledby="know-handy-reward-heading"
        >
          <h2 id="know-handy-reward-heading" className="know-handy__h2">
            評価と待遇——成果が還元される仕組み
          </h2>
          <div className="know-handy__prose">
            <p>
              そのような<strong className="know-handy__em">即決断・即実行の姿勢</strong>
              と、目標に対するコミットや成果を土台に、活躍している人がより良い待遇を得られるよう、人事評価と報酬の設計を整えています。ミッションや事業への貢献が見える化され、努力と成果が正当に評価される環境を目指しています。
            </p>
            <p>具体的には、次のような考え方で制度を運用しています。</p>
            <ul className="know-handy__list">
              <li>
                会社のミッション・事業目標に対する貢献度を軸にしたグレードや評価の枠組み
              </li>
              <li>
                成果や役割の変化に応じた報酬・ボーナス（チームや事業の成果を分かち合うプログラムも含む）
              </li>
              <li>
                日々の業務や受注などを通じたフィードバックと、評価面談を通じたキャリアのすり合わせ
              </li>
            </ul>
            <p>
              制度の細目や適用条件は入社後のオンボーディングや人事との面談で説明し、納得して挑戦できる状態をつくることを大切にしています。
            </p>
          </div>
        </section>

        <section
          className="know-handy__section know-handy__section--last"
          aria-labelledby="know-handy-welfare-heading"
        >
          <h2 id="know-handy-welfare-heading" className="know-handy__h2">
            健康経営と福利厚生
          </h2>
          <div className="know-handy__prose">
            <p>
              長く挑戦し続けるためには、心身の健康と働きやすさの両立が欠かせません。健康経営の考え方のもと、メンバーが自分らしくパフォーマンスを発揮できるよう、次のような支援の軸を設けています。
            </p>
            <ul className="know-handy__list">
              <li>
                健康診断・ストレスチェックなど、体調管理のための仕組みと情報の活用
              </li>
              <li>
                柔軟な働き方（リモートワークや勤務形態の工夫など、職種・フェーズに応じた運用）
              </li>
              <li>
                学び直しや資格取得、書籍購入など、成長を後押しする学習支援の仕組み
              </li>
              <li>
                慶弔見舞金や各種手当など、生活に安心感を持って働けるための基盤
              </li>
            </ul>
            <p>
              利用できる制度や申請方法は、社内ポータルや労務窓口で案内しています。採用選考の段階でも、気になる点があれば遠慮なくおたずねください。
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
