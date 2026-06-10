import { Expense } from "@/types/expense"
import { ExpenseCard } from "./ExpenseCard"

type ExpenseListProps = {
  expenses: Expense[]
  onDelete: (id: number) => void
}

export const ExpenseList = ({expenses, onDelete}: ExpenseListProps) => {
  return (
    <div>
      {expenses.map(expense => (
        <ExpenseCard key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  )
}