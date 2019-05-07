import {delay} from 'redux-saga';
import {call, all} from 'redux-saga/effects';

import {sayHello, watchDescrease, watchIncrease} from './counterSaga';
import {watchFetchData} from './dataSaga';

export default function* rootSaga() {
    yield call(watchFetchData);
    // yield all([
    //     sayHello,
    //     watchDescrease(),
    //     watchIncrease(),
    // ])
}