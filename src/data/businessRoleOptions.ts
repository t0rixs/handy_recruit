export type BusinessRoleOptionId =
  | 'open_position'
  | 'field_sales'
  | 'customer_success'
  | 'inside_sales'
  | 'retention_sales'

export type BusinessRoleOption = {
  id: BusinessRoleOptionId
  label: string
}

/** ビジネス職の業務分類（各項目で詳細ページへ遷移） */
export const BUSINESS_ROLE_OPTIONS: BusinessRoleOption[] = [
  { id: 'open_position', label: 'オープンポジション' },
  { id: 'field_sales', label: 'フィールドセールス' },
  { id: 'customer_success', label: 'カスタマーサクセス' },
  { id: 'inside_sales', label: 'インサイドセールス' },
  { id: 'retention_sales', label: 'リテンションセールス' },
]
