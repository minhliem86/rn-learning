import {ADD_NEW_TASK, TOOGLE_TASK, INCREAMENT, DECREAMENT, ADD_SAGA_LIST, FETCH_DATA_LIST, FETCH_SUCCESS, FETCH_FAIL} from './defineType'

let taskId = 0;

export const addNewTask = (valueInput) => {
    return {
        type: ADD_NEW_TASK,
        taskName: valueInput,
        taskId : taskId++,
    }
}

export const toggleTask = (taskId) => {
    return {
        type : TOOGLE_TASK,
        taskId: taskId
    }
}

export const increase = (step) => {
    return {
        type : INCREAMENT,
        step: step
    }
}

export const descrease = (step) => {
    return {
        type : DECREAMENT,
        step: step
    }
}

export const fetch_data = (sort) => {
    return {
        type: FETCH_DATA_LIST,
        sort
    }
}

export const add_saga_data = (newMovie) => {
    return {
        type: ADD_SAGA_LIST,
        newMovie
    }
}

/* ACTION SEND BY REDUX SAGA */
export const fetchSucces = (listData) => {
    return {
        type: FETCH_SUCCESS,
        listData
    }
}

export const fetchFail = (error) => {
    return {
        type: FETCH_FAIL,
        error
    }
}