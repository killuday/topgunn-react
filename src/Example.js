import React from 'react'

export default function example(props) {
  return (
    <div>
        <h2 style={{color:'#61DBFB',fontFamily: 'Poor Story'}}>{props.title}</h2>
    </div>
  )
}

example.defaultProps={
    title:'On prod mode...........................'

}