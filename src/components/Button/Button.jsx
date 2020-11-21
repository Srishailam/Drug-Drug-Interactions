import React from 'react'
import './Button.css'
function Button(props) {
  const {
    text,
    handleClick
  } = props;
  return (
    <div className="Button" onClick={handleClick}>
      {text}
    </div>
  )
}

export default Button
