import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects';

import {sayHello, watchDescrease, watchIncrease} from './counterSaga';

export default function* rootSaga() {
    yield all([
        sayHello,
        watchDescrease(),
        watchIncrease(),
    ])
}  