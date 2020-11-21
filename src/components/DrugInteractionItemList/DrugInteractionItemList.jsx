import React from 'react'
import DrugInteractionItem from '../DrugInteractionItem/DrugInteractionItem'

import './DrugInteractionItemList.css';
function DrugInteractionItemList({ data }) {
  console.log(data)
  return (
    <ul className="DrugInteractionItemList">
      {
        (data || []).map( (item, id) =>
          <DrugInteractionItem
            severity={item.result && item.result.severity}
            interaction={item.result && item.result.interaction}
            key={id}
          />)
      }
    </ul>
  )
}

export default DrugInteractionItemList
