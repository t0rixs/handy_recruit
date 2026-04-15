import { Link } from 'react-router-dom'
import './KnowHandyPage.css'

export function KnowHandyPage() {
  return (
    <main className="know-handy">
      <div className="know-handy__inner">
        <Link className="know-handy__back" to="/">
          ← 採用トップに戻る
        </Link>

        <header className="know-handy__header">
          <h1 className="know-handy__title">ハンディを知る</h1>
          <p className="know-handy__lead">
            ハンディは、とにかく<strong className="know-handy__em">即決断・即実行</strong>
            が特徴の会社です。意思決定と行動が速いからこそ、プロダクトも組織も成長のスピードを落としません。
          </p>
        </header>

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
