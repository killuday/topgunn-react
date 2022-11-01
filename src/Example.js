import React from 'react'

export default function example(props) {
  return (
    <div>
        <h1 style={{color:'#61DBFB'}}>{props.title}</h1>
    </div>
  )
}

example.defaultProps={
    title:'On prod mode...........................'

}