import React, { useState, createContext } from 'react'

const SearchContext = createContext()

function SearchProvider({ children }) {
  const [state, setState] = useState()

  const value = {state, setState}

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export {SearchContext,  SearchProvider}
