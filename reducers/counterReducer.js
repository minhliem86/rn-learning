import {INCREAMENT, DECREAMENT} from '../actions/defineType';

export default counterReducer = (count = 0, action) => {
    switch (action.type) {
        case INCREAMENT:
        return  count + action.step;

        case DECREAMENT:
        return  count - action.step;
            
        default:
            return count;
    }
};