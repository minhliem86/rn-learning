import {INCREAMENT, DECREAMENT} from '../actions/defineType';

import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

/* DEFINE REDUX-SAGA FUNCTION */
export function* sayHello(){
    console.log('Hello World');
}
function* increase(){
    console.log('Increase saga run here');
}

export function* watchIncrease() {
    yield(takeEvery(INCREAMENT, increase));
}

function* descrease() {
    console.log('Decrease saga run');
}

export function* watchDescrease() {
    yield(takeEvery(DECREAMENT, descrease));
}