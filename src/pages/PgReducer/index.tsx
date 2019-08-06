import React, {useState, useReducer} from 'react'

import renducer, {initialState} from '../../renducer/expamel'

function testRenducer() {
  const [count, dispatch] = useReducer(renducer, initialState)
  return (
    <>
      <p>{count}</p>
      <p onClick={() => {dispatch('count')}}>+</p>
    </>
  )
}

export default testRenducer