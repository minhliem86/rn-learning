import {FETCH_SUCCESS, FETCH_FAIL, ADD_SAGA_LIST, UPDATE_SUCCESS} from '../actions/defineType';

export default sagaReducer = (datas = [], action) => {
    switch (action.type) {

        case FETCH_SUCCESS:
        return  action.listData;

        case FETCH_FAIL:
        return  action.error;

        case UPDATE_SUCCESS:
        return datas.map( item =>  {
            return item.id.toString() === action.dataUpdate.id  ?
                {
                    ...item,
                    name: action.dataUpdate.name,
                    job: action.dataUpdate.name,
                }
            : item
        })

        default:
            return datas;
    }
};