// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


const reducer = (state = { value : 10}, action) => {

    switch(action.type){
      case "SET_VAL": return {
        ...state,
        value: action.value
      }

      case "SET_VAL2": return {
        ...state,
        value: action.value * action.value
      }
  
      default: return state
    }

}

const store = configureStore({reducer})

export default store;