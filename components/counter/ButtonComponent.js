import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class ButtonComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                title="Increase" 
                color="coral" 
                accessibilityLabel="Increase Counter" 
                style={styles.btnInc}
                onPress= {() => {this.props.onIncrease(3)}}
                />

                <Button title="Decrease" color="crimson"  accessibilityLabel="Decrease Counter" style={styles.btnDec}
                onPress= {() => {this.props.onDecrease(1)}}
                />
            </View>
        );
    }
}
export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'lightblue',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    btnInc: {
        shadowColor: 'black',
        shadowOffset:{width: 10, height: 10}
        
    },
    btnDec: {
        
    }
});