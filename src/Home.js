import React from 'react'
export default class Home extends React.Component{
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),1000
        );

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h1 style={{color:"#61DBFB",fontFamily:"cursive"}}>React.js</h1>
                <h2 style={{color:"#61DBFB"}}>{new Date().toLocaleTimeString()}</h2>
                
            </div>
           
        )
       
    }
    
}

