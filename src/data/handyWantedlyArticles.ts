/**
 * 社員インタビュー記事リンク（採用サイト掲載用・手動更新）
 */
export type WantedlyArticle = {
  id: number
  title: string
  url: string
}

export const WANTEDLY_LATEST_ARTICLES: WantedlyArticle[] = [
  {
    id: 1044346,
    title:
      '胸を張って売れるプロダクトがある。—Handy進路指導室で、“世の中を変える営業”をやる理由｜営業部長インタビュー',
    url: 'https://www.wantedly.com/companies/company_5984483/post_articles/1044346',
  },
  {
    id: 1046201,
    title:
      '怖くて話せなかった私が、営業の面白さに出会うまで。営業未経験から始まった私の挑戦｜営業メンバーインタビュー',
    url: 'https://www.wantedly.com/companies/company_5984483/post_articles/1046201',
  },
  {
    id: 996690,
    title:
      '「経験より、行動。」—知識ゼロでも成長できる環境が、ここにはあった｜社員インタビュー',
    url: 'https://www.wantedly.com/companies/company_5984483/post_articles/996690',
  },
]
