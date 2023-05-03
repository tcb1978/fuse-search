import React, { useContext } from 'react';
import {useFetchData} from '../../utils/use-fetch-data';
import { SearchContext } from '../context/search-context.jsx';
import { ListItem } from './ListItem.jsx';

import Fuse from "fuse.js";

export function ServerData() {
  const [data] = useFetchData();
  const {state} = useContext(SearchContext);

  const fuse = new Fuse(data, {
    keys: ['name', 'tags']
  })

  const results = state ? fuse.search(state) : null;

  const products = results ? results.map(item => item) : null;

  return (
    <ul className="list">
      {products && products.map(item => (
        <ListItem item={item} />
      ))}
    </ul>
  );
}

