import React from 'react'

export function ListItem({item}) {
  const {item : {
    _id,
    name,
    about,
    price
  }} = item;
  return (
    <li key={_id} className="list-item">
      <div className="card">
        <h3 className="">{name}</h3>
        <p clasName="">{about}</p>
        <p className="">${price}</p>
      </div>
    </li>
  )
}
