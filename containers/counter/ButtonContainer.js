import {connect} from 'react-redux';
import ButtonComponent from '../../components/counter/ButtonComponent';

import {increase, descrease} from '../../actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        onIncrease: (step) => {
            dispatchEvent(increase(step));
        },
        onDecrease: (step) => {
            dispatchEvent(descrease(step));
        }
    }
}

const ButtonContainer = connect(mapStateToProps,mapDispatchToProps)(ButtonComponent);

export default ButtonContainer;