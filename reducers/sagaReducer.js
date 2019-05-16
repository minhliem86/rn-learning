import {FETCH_SUCCESS, FETCH_FAIL, UPDATE_SUCCESS,} from '../actions/defineType';

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
                    type: action.dataUpdate.type,
                    number: action.dataUpdate.number,
                    min: action.dataUpdate.min,
                    max: action.dataUpdate.max,
                    price: action.dataUpdate.price,
                }
            : item
        });

        default:
            return datas;
    }
};