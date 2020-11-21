import React from 'react'
import './DrugInteractionItem.css'
function DrugInteractionItem({ severity, interaction}) {
  if(!severity) return null;
  return (
    <li className="DrugInteractionItem">
      <span className="DrugInteractionItem_Severity">{severity && severity.toUpperCase() + ' '}</span>
      <span className="DrugInteractionItem_Severity">{interaction}</span>
    </li>
  )
}

export default DrugInteractionItem
