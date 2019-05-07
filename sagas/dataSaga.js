import {FETCH_DATA_LIST, FETCH_SUCCESS, FETCH_FAIL} from '../actions/defineType';
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