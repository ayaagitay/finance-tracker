// tells ts what values are allowed
export type Category = 'Food' | 'Transport' | 'Rent' | 'Entertainment' | 'Health' | 'Other'

// what values exist
export const CATEGORIES: Category[] = ['Food', 'Transport', 'Rent', 'Entertainment', 'Health', 'Other']

// overall type
export interface Expense {
  id: number
  name: string
  amount: number
  category: Category
  date: string
  created_at: string
}