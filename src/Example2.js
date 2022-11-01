import React from 'react'

export default function Example2(props) {
  return (
    <div >
        <h2 style={{color:'#61DBFB',fontFamily: 'Poor Story'}}>{props.title}</h2>
    </div>
  )
}

Example2.defaultProps={
  title:'RIP Lil Peep '

}