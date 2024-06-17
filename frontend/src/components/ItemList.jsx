import React from 'react'

const ItemList = ({items}, handleEdit, hanldeDelete) => {

  return (
    <div className='item-card'>
        <h4>{items.item}</h4>
        <button onClick={()=>handleEdit} >Edit</button>
        <button onClick={()=>hanldeDelete} >Delete</button>
    </div>
  )
}

export default ItemList
