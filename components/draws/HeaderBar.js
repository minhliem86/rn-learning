import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


class HeaderBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.buttonBar}
                    onPress ={() => this.props.navigation.openDrawer()} 
                    title = 'Open Navigation'
                    underlayColor = "linen"
                >
                    <Icon name="bars" size={30} color="cornsilk" />
                </TouchableHighlight>
            </View>
        );
    }
}
export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'darkgreen',
    },
    buttonBar: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    
    }
});