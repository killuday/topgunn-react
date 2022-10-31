import React from 'react'

export default function example(props) {
  return (
    <div>
        <h1 style={{color:'hotpink'}}>{props.title}</h1>
    </div>
  )
}

example.defaultProps={
    title:'I am using the first component using default props'

}