import {delay} from 'redux-saga';
import {call, all, fork} from 'redux-saga/effects';

import {sayHello, watchDescrease, watchIncrease} from './counterSaga';
import {watchFetchData, watchAddData} from './dataSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchData),
        fork(watchAddData),
    ])


}