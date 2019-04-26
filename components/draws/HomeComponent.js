import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from './HeaderBar';
import ListComponent from '../flatList/ListComponent';

class HomeComponent extends Component {
    static navigationOptions = {
        drawerLabel: "Home",
        drawerIcon: ({}) => (
            <Icon name="home" size={20} color="dimgray" />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar {...this.props}/>
                <ListComponent/>
            </View>
        );
    }
}
export default HomeComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aquamarine',
        flexDirection: 'column',
    },
    home:{
        flex: 1,
    },
    button: {

    }
});