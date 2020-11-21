import React from 'react'
import DrugInteractionItem from '../DrugInteractionItem/DrugInteractionItem'

import './DrugInteractionItemList.css';
function DrugInteractionItemList({ data }) {
  console.log(data)
  return (
    <ul className="DrugInteractionItemList">
      {
        (data || []).map(item =>
          <DrugInteractionItem
            severity={item.result && item.result.severity}
            interaction={item.result && item.result.interaction}
          />)
      }
    </ul>
  )
}

export default DrugInteractionItemList
