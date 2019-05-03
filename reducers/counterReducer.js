import {INCREAMENT, DECREAMENT} from '../actions/defineType';

export default counterReducer = (state = {step: 1}, action) => {
    switch (action.type) {
        case INCREAMENT:
        return  {
            ...state,
            step: step+action.step
        }

        case DECREAMENT:
        return  {
            ...state,
            step: step-action.step
        }
            
        default:
            return state;
    }
};