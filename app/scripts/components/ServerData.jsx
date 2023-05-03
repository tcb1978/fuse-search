import React, { useState, useEffect, useContext } from 'react';
import {useFetchData} from '../../utils/use-fetch-data';
import { SearchContext } from '../context/search-context.jsx';

export function ServerData() {
  const [data, setData] = useFetchData();
  const {state, setState} = useContext(SearchContext);

  return (
    <div>
      <menu>
        {data.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.about}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </menu>
    </div>
  );
}

