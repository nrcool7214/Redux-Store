import React, { useState } from 'react'
import C from './C'
import { connect } from 'react-redux'


 function B(props) {

    const [userInput, setUserInput]=useState("")
    console.log(props)
    const Additem=()=>{
        props.dispatch({type:"delete",payload:0})
        setUserInput("")
    }
    return (
        <div>
            <h2>This is B Component</h2>
            <ul>
            {props.state.items.map(item=>{
                return <li key={item}> {item}</li>
            })} </ul>
          {/*    <p>{props.state.status? "True":"False"}</p> */}

          <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
             <button onClick={Additem}>Add item</button>
            <C/>
        </div>
    )
}
/* convention is to use mapStateToProps */
 const getState=(state)=>{
    return {state:state}
} 
 

export default connect(getState)(B)