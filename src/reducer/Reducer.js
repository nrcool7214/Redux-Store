
let initialState={
    name:"Naqvi",
    items:["item1","item2"],
    count:0,
    status:false
}


export const Reducer=(state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case "changeName":
            return {...state, name:action.payload}
        case "changeStatus":
            return {...state,status:!state.status }
        case "delete":
            let items= [...state.items]
            items.splice(action.payload,1)
            return {...state,items:items}
        default:
            return state
    }
}
