import React, {useContext} from 'react'
import {Context} from '../../pages/PgInput'
function Ptemp () {
  const val = useContext(Context)
  return (
    <>
      <p>{val}</p>
    </>
  ) 
}
export default Ptemp