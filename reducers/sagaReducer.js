import {FETCH_SUCCESS, FETCH_FAIL, ADD_SAGA_LIST} from '../actions/defineType';

export default sagaReducer = (datas = [], action) => {
    switch (action.type) {
        case ADD_SAGA_LIST:
        return  [
            ...datas,
            action.newMovie
        ]

        case FETCH_SUCCESS:
        return  action.listData;

        case FETCH_FAIL:
        return  action.error;

        default:
            return datas;
    }
};