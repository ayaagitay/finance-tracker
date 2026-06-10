import { Expense } from "@/types/expense"
import Link from 'next/link'

type ExpenseCardProps = {
  expense: Expense
  onDelete: (id: number) => void
}

export const ExpenseCard = ({expense, onDelete}: ExpenseCardProps) => {
  return (
    <div>
      <div>
        <p>{expense.name}</p>
        <p>{expense.amount}</p>
        <p>{expense.category}</p>
        <p>{expense.date}</p>        
      </div>

      <Link href={`/edit/${expense.id}`}>Edit</Link>

      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  )
}