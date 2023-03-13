// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './counter';
import authSlice from './auth'


const store = configureStore({
    //for multiple reducers
    reducer: {counter: counterSlice, auth: authSlice},
    //for single reducers
    // reducer: counterSlice.reducer
});

export default  store;



// const couterReducer = (state = initialState, action) => {

//     if(action.type === 'increment'){

//         return{
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         }
        
//     }

//     if(action.type === 'increase'){

//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter  
//         }
        
//     }
    

//     if(action.type === 'decrement'){

//         return{
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         }
        
//     }

//     if(action.type === 'toggle'){

//         return{
//             showCounter:!state.showCounter,
//             counter: state.counter
//         }
        
//     }


//     return state;

// }

// const textReducer = (state = {text: 'first-text'}, action) => {
//     if(action.type === 'setText'){

//         return{
//             text:state.text = 'denis test text' 
//         }
        
//     }
// }

// const store = createStore(couterReducer);