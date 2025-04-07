import { useState } from 'react'
import './Button.css'

export default function Button({children, className, mode="filled", Icon, ...props}) {
  let cssClasses = `button ${mode}-button`
  const [count, setCount] = useState(0)
  
  if (Icon) {
    cssClasses += ' icon-button';
  }

  if (className) {
    cssClasses += ' ' + ClassName;
  }

  return (
    <button className={cssClasses} {...props} onClick={() => setCount((count) => count + 1)}>
      Click {count}
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
        <span>{children}</span>
    </button>
  );
}