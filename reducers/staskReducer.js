import {ADD_NEW_TASK, TOOGLE_TASK} from '../actions/defineType';

export default taskReducer = (currentStateStask = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
        return[
            ...currentStateStask,
            {
                taskId: action.taskId,
                taskName: action.taskName,
                completed: false
            }
        ]
        case TOOGLE_TASK :
            
            return currentStateStask.map(item => 
                (item.taskId == action.taskId) ? {...item, completed: !item.completed} : item    
            )
            
        default : 
            return currentStateStask;
    }
}