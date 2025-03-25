export default function TabButton({children, onSelect, isSelected }) {
  console.log ("here tabButton")
  return (
    <li>
      <button className={isSelected ? 'active' : undefined } onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}

