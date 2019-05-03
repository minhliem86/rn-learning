import TaskListComponent from '../components/tasks/TaskListComponent';
import {toggleTask} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        tasks : !state.taskReducer ? [] : state.taskReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTask: (taskId) => {
            dispatch(toggleTask(taskId));
        }
    }
}

export default TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
