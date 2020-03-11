import React from 'react'
import {connect} from "react-redux"

function D(props) {
    console.log(props) 
    const ChangemyName=()=>{
        props.dispatch({type:"changeName",payload:"Ali"})
    }
    return (
        <div>
            <h2> {props.state.status? "True": "False"}</h2>
            <h2>This is D Component</h2>
    <p>{props.state.name}</p>
            <button onClick={ChangemyName}>Changename</button>
        </div>
    )
}

/* convention is to use mapStateToProps */
 const getState=(state)=>{
    return {state:state}
} 

export default connect(getState)(D);  
