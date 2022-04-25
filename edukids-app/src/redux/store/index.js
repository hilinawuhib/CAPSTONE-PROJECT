import { createStore,combineReducers, compose , applyMiddleware} from 'redux';
import thunk from 'react-thunk';
 const aComposeFunction=window._REDUX_DEVROOLS_EXTENSION_COMPOSE__|| compose 
 export const initialState={
     user:{
         first_name:"",
         last_name:"",
         email:"",
         password:"",
         role:""

     },
     course:{
         title:""
     }
 }
 const bigReducer = combineReducers({

 })
 export const configureStore =createStore(
     bigReducer,initialState,aComposeFunction(applyMiddleware (thunk)))
 