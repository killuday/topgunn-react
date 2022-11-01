import React from 'react'

export default function example(props) {
  return (
    <div>
        <h2 style={{color:'#61DBFB',fontFamily: 'Poor Story'}}>{props.title.tribute.g}</h2>
    </div>
  )
}

example.defaultProps={
    title:'On prod mode...........................',
    tribute:'RIP Lil Peep',
    g:'A small tribute'


}