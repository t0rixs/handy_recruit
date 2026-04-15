/** 公開中求人リンク（採用サイト掲載用・手動更新） */
export type TalentioJobPosting = {
  id: string
  title: string
  url: string
}

export const TALENTIO_JOB_POSTINGS: TalentioJobPosting[] = [
  {
    id: '110803',
    title:
      '[正社員]インサイドセールス（学校/企業向け営業職）【東京】【大阪】【福岡】',
    url: 'https://open.talentio.com/r/1/c/handy-school/pages/110803',
  },
  {
    id: '115262',
    title: '[正社員]営業職オープンポジション【東京】【大阪】【福岡】',
    url: 'https://open.talentio.com/r/1/c/handy-school/pages/115262',
  },
]
