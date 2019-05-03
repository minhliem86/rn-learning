import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DisplayComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Count: 1</Text>
            </View>
        );
    }
}
export default DisplayComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});