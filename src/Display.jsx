import React, { useState } from 'react'
import axios from 'axios'
import { applyMiddleware,createStore } from 'redux'
import Reducer from './Redux/Reducer'
import { showData } from './Redux/Action'
import { showError } from './Redux/Action'
import { thunk } from 'redux-thunk'

const store = createStore(Reducer,applyMiddleware(thunk))



function fetchData(){
    
    return function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> store.dispatch(showData(res.data)))
        .catch((err)=>store.dispatch(showError(err.message)))
    }
}

function Display(){

    const[state,setState]= useState([])

    store.subscribe(()=>{
        setState(store.getState().User)})

  return (
    <div>
        <button onClick={store.dispatch(fetchData)}>Fetch Data</button>
        {state.map((e)=>{
            return(
                <div key={e.id}>
                    <h2>{e.name}</h2>
                    <h3>{e.username}</h3>
                </div>
            )
        })}
        {state.length>0 && <button onClick={()=>setState([])}>
            BACK
        </button>}
    </div>
  )
}

export default Display