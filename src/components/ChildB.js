import React from 'react'
import ChildC from './ChildC'

export default function ChildB({name, data_roll}) {
  return (
    <div>
      <ChildC name={name} roll={data_roll}></ChildC>
    </div>
  )
}
