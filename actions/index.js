import {
    ADD_NEW_TASK,
    TOOGLE_TASK,
    INCREAMENT,
    DECREAMENT,
    ADD_SAGA_LIST,
    FETCH_DATA_LIST,
    FETCH_SUCCESS,
    FETCH_FAIL,
    UPDATE_DATA,
    UPDATE_SUCCESS,
    DELETE_DATA,
    DELETE_SUCCESS
} from './defineType'

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

export const fetch_data = () => {
    return {
        type: FETCH_DATA_LIST
    }
}

/* ACTION SEND BY REDUX SAGA */
export const fetchSucces = (listData) => {
    return {
        type: FETCH_SUCCESS,
        listData
    }
}

export const add_saga_data = (newData = {}) => {
    return {
        type: ADD_SAGA_LIST,
        newData: newData
    }
}



export const fetchFail = (error) => {
    return {
        type: FETCH_FAIL,
        error
    }
}

// UPDATE SAGA
export const updateData = (dataUpdate = {}, id) => {
    return {
        type: UPDATE_DATA,
        dataUpdate,
        id
    }
}
// export const updateDataSuccess = (dataUpdateSuccess) => {
//     return {
//         type: UPDATE_SUCCESS,
//         dataUpdateSuccess
//     }
// }

/* DELETE DATA */
export const deleteData = (id) => {
    return {
        type: DELETE_DATA,
        id
    }
}
