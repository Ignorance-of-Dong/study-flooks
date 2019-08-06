import React, { useState, useRef, useEffect } from 'react'

function PgRef() {
  const ulRef = useRef(null)
  useEffect(() => {
    console.log(ulRef.current.offsetHeight)
  })
  return (
    <>
      <p className='testP' ref={ulRef}></p>
    </>
  )
}

export default PgRef