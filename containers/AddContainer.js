import AddComponent from '../components/tasks/AddComponent';
import {addNewTask} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent);

export default AppContainer;

