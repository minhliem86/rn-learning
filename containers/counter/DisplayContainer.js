import {connect} from 'react-redux';
import DisplayComponent from '../../components/counter/DisplayComponent';

const mapStateToProps = state => {
    return {
        count: state.counterReducer ? state.counterReducer : 0
    }
}

const mapDispatchToProps = state => {
    return {
        
    }
}

const DisplayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayComponent);

export default DisplayContainer;