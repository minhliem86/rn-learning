import {FETCH_DATA_LIST, FETCH_SUCCESS, FETCH_FAIL, ADD_SAGA_LIST} from '../actions/defineType';
import {Api} from './api';

import {put, takeLatest} from 'redux-saga/effects';

export function* watchFetchData(){
    yield takeLatest(FETCH_DATA_LIST, fetchDataFromApi);
}

function* fetchDataFromApi () {
    try{
        const receivedData = yield Api.getDataApi();
        yield put( {type: FETCH_SUCCESS, listData: receivedData } )
    } catch (error) {
        yield put({type: FETCH_FAIL, error });
    }
}

export function* watchAddData(){
    yield takeLatest(ADD_SAGA_LIST, addNewData);
}

function* addNewData(action) {
    try {
        const result = yield Api.postAddDataApi(action.newData);

        if(result){
            yield put({ type: FETCH_DATA_LIST});
        }
    } catch(error){
        return console.log(error);
    }
}