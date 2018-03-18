import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

//REDUCERS 

import news from './allNews'


const rootReducer = combineReducers({
   
    news,
    loadingBar: loadingBarReducer

});

export default rootReducer;
