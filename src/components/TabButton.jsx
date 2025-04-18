export default function TabButton({children, isSelected, ...props }) {
  // console.log ("here tabButton")
  return (
    <li>
      <button className={isSelected ? 'active' : undefined } {...props}>
        {children}
      </button>
    </li>
  )
}

