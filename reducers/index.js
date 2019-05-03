import {combineReducers} from 'redux';
import taskReducer from './staskReducer';
import counterReducer from './counterReducer';

const allReducer = combineReducers({
    taskReducer,
    counterReducer
})

export default allReducer;