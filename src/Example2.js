import React from 'react'

export default function Example2(props) {
  return (
    <div >
        <h1 style={{color:"crimson"}}>{props.title}</h1>
    </div>
  )
}

Example2.defaultProps={
  title:'Second component using default props'

}