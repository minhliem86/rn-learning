import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import ButtonContainer from '../../containers/counter/ButtonContainer';
import DisplayContainer from '../../containers/counter/DisplayContainer';

class CounterComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Button Component */}
                <ButtonContainer/>
                {/* DISPLAY COMPONENT */}
                <DisplayContainer/>
            </View>
        );
    }
}
export default CounterComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});