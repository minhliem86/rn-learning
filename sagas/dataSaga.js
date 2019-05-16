import {
    FETCH_DATA_LIST,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_SAGA_LIST,
    DELETE_DATA,
} from '../actions/defineType';
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


/* CREATE */
export function* watchAddData(){
    yield takeLatest(ADD_SAGA_LIST, addNewData);
}

function* addNewData(action) {
    try {
        const result = yield Api.postAddDataApi(action.newData);

        if(result){
            yield put({ type: FETCH_DATA_LIST});
            alert('New Room is created !');
        }
    } catch(error){
        return console.log(error);
    }
}

/* DELETE */
export function* watchDeleteData(){
    yield takeLatest(DELETE_DATA, deleteData);
}

function* deleteData(action){
    try{

        const response = yield Api.postDeleteDataApi(action.id.toString());

        yield put({type: FETCH_DATA_LIST});
        alert('The Room is deleted');
    }catch (err){

    }
}

/* UPDATE */
export function* watchUpdateData(){
    yield takeLatest(UPDATE_DATA, updateData);
}

// function* updateData(dataUpdate, )