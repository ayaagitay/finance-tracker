import {Category} from '@/types/expense'
import {CATEGORIES} from '@/types/expense'

type CategoryFilterProps = {
  selected: Category | "All"
  onSelect: (category: Category | 'All') => void
}

export const CategoryFilter = ({selected, onSelect}: CategoryFilterProps) => {
  return (
    <div>
      <button onClick={() => onSelect('All')}>All</button>
      {CATEGORIES.map(category => (
        <button key={category} onClick={()=>onSelect(category)}>{category}</button>
      ))}
    </div>
  )
}