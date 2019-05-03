import {ADD_NEW_TASK, TOOGLE_TASK, INCREAMENT, DECREAMENT} from './defineType'

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