import DataComponent from '../components/sagaData/DataComponent';

import {add_saga_data, fetch_data, deleteData, updateData} from '../actions';

import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        data: state.sagaReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (newData) => {
            dispatch(add_saga_data(newData));
        },
        onClickFetch: () => {
            dispatch(fetch_data())
        },
        onClickDelete: (id) => {
            dispatch(deleteData(id))
        },
        onClickUpdate: (data) => {
            dispatch(updateData(data));
        }
    }
}

const SagaContainer = connect(mapStateToProps, mapDispatchToProps)(DataComponent);

export default SagaContainer;
