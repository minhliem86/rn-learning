import {combineReducers} from 'redux';
import taskReducer from './staskReducer';
import counterReducer from './counterReducer';
import sagaReducer from './sagaReducer';

const allReducer = combineReducers({
    taskReducer,
    counterReducer,
    sagaReducer
})

export default allReducer;