import {connect} from 'react-redux';
import DisplayComponent from '../../components/counter/DisplayComponent';

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = state => {
    return {
        
    }
}

const DisplayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayComponent);

export default DisplayContainer;