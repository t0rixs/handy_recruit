import { TALENTIO_RECRUIT_URL } from '../constants'

/** 職種カテゴリ別の求人タイトル（ダミー含む）。href は Talentio またはプレースホルダー */
export type PositionCategoryId = 'business' | 'engineer' | 'corporate' | 'other'

export type PositionListItem = {
  id: string
  title: string
  /** 外部（Talentio）または `#` プレースホルダー */
  href: string
}

export type PositionCategory = {
  id: PositionCategoryId
  label: string
  description: string
  items: PositionListItem[]
}

export const POSITION_LIST_INTRO =
  '採用ポジションを職種ごとに掲載しています。詳細・応募は各リンク先（Talentio）からお進みください。'

/** 参考: https://open.talentio.com/r/1/c/handy-school/homes/4282 */
export const POSITION_CATEGORIES: PositionCategory[] = [
  {
    id: 'business',
    label: 'ビジネス',
    description: '営業・セールス・カスタマーサクセスなど',
    items: [
      {
        id: '110803',
        title:
          '[正社員]インサイドセールス（学校/企業向け営業職）【東京】【大阪】【福岡】',
        href: 'https://open.talentio.com/r/1/c/handy-school/pages/110803',
      },
      {
        id: '115262',
        title: '[正社員]営業職オープンポジション【東京】【大阪】【福岡】',
        href: 'https://open.talentio.com/r/1/c/handy-school/pages/115262',
      },
      {
        id: 'biz-dummy-1',
        title: '【準備中】フィールドセールス',
        href: '#',
      },
    ],
  },
  {
    id: 'engineer',
    label: 'エンジニア',
    description: 'プロダクト開発・インフラなど',
    items: [
      {
        id: 'eng-dummy-1',
        title: '【準備中】フロントエンドエンジニア',
        href: '#',
      },
      {
        id: 'eng-dummy-2',
        title: '【準備中】バックエンドエンジニア',
        href: '#',
      },
    ],
  },
  {
    id: 'corporate',
    label: 'コーポレート',
    description: '人事・経理・法務・広報など',
    items: [
      {
        id: 'corp-dummy-1',
        title: '【準備中】人事・労務',
        href: '#',
      },
      {
        id: 'corp-dummy-2',
        title: '【準備中】経理・財務',
        href: '#',
      },
    ],
  },
  {
    id: 'other',
    label: 'その他',
    description: '上記以外のポジション',
    items: [
      {
        id: 'other-dummy-1',
        title: '【準備中】オープンポジション（職種相談）',
        href: '#',
      },
    ],
  },
]

export { TALENTIO_RECRUIT_URL }
