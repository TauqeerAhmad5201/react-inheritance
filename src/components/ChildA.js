import React from 'react'
import ChildB from './ChildB'

export default function ChildA() {
    const name = "Tauqeer"
    const Roll = "20"
  return (
    <div>
        <ChildB name={name} data_roll={Roll}/>
    </div>
  )
}

