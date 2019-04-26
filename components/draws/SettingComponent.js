import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderBar from './HeaderBar';

class SettingComponent extends Component {
    static navigationOptions = {
        drawerLabel: "Setting",
        drawerIcon: ({}) => (
            <Icon name="cogs" size={20} color="dimgray" />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar {...this.props} />
                <View style={styles.setting}>
                <Text>SettingComponent</Text>
                    <Button 
                        onPress = {() => {this.props.navigation.navigate('Home')}} 
                        title = "Go to Home"
                    />
                </View>
            </View>
        );
    }
}
export default SettingComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lemonchiffon',
        flexDirection: 'column',
    },
    setting:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {

    }
});