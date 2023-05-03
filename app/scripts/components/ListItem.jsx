import React from 'react'

export function ListItem({item}) {
  const {item : {
    _id,
    name,
    about,
    price,
    picture
  }} = item;
  console.log('item', item)
  return (
    <li key={_id} className="list-item">
      <div className="card">
        <h3>{name}</h3>
        <p>{about}</p>
        <p>${price}</p>
        <div style={{display: 'inline-block', textAlign: 'center', width: '100%'}}>
          <figure style={{
            display: 'inline-block',
            maxWidth: '6rem',
            maxHeight: '6rem',
          }}>
            <img src={picture} alt={name} style={{width: '100%', height: '100%'}}/>
          </figure>
        </div>
      </div>
    </li>
  )
}
