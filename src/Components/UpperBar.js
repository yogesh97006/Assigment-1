import { AccountCircle } from '@mui/icons-material'
import React from 'react'

function UpperBar() {
  return (
    <div className='d-flex justify-content-between'>
    <div>
    <img />  
    </div>
    <div>  
    <h1>Inventory Management</h1>
    </div>
    <div>
      <AccountCircle  color='primary' fontSize='large' className='m-2'/>
    </div>
    </div>
  )
}

export default UpperBar