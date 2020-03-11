
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore} from "redux"
import {Reducer} from "./reducer/Reducer"
import {Provider} from "react-redux"

/* create your redux store */
let store=createStore(Reducer)


reactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))