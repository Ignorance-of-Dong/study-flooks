import React, {useState, useEffect, createContext} from 'react'
import Buttons from '../../components/Button'
export const Context = createContext(null)
function PgInput() {
  const [val, setval] = useState('')
  useEffect(() => {
    document.title = val
  }, [val])
  return (
    <>
      <h1>input</h1>
      <input value = {val} onChange={(e) => {
        setval(e.target.value)
      }}></input>
      <Context.Provider value = {val}>
        <Buttons></Buttons>
      </Context.Provider>
      
    </>
  )
}

export default PgInput