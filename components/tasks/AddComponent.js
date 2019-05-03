import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from "react-native";
import {addNewTask} from '../../actions';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
        }
    }
    render() {
        return (
            <View style={styles.btnWrapper}>
                <TextInput 
                style={styles.textInput} 
                value = {this.state.taskName} 
                placeholder="Input New Task" 
                keyboardType="default"
                keyboardAppearance="light"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
                onChangeText = {(text) => {this.setState({taskName: text})}} />             

                <TouchableHighlight
                    underlayColor="blue"
                    style = {styles.btn}
                    onPress = {(event) => {
                        if(!this.state.taskName.trim()){
                            return;
                        }
                        this.props.onClickAdd(this.state.taskName);
                    }}
                >
                        <Icon name='plus' color="white" size={20} /> 
                </TouchableHighlight>
            </View>
        );
    }
}
export default AddComponent;

const styles = StyleSheet.create({
    btnWrapper: {
        height:30,
        flexDirection: 'row',
        padding : 5,
        marginBottom:10
    },
    textInput: {
        flex:1,
        height:30,
        borderColor: '#009688',
        borderWidth: 1,
        borderRadius: 3,
        padding:5,
        marginRight:5,
        justifyContent: 'flex-start',
    },
    btn: {
        height:30,
        paddingVertical:5,
        paddingHorizontal: 15,
        backgroundColor: '#194d33',
        justifyContent: 'flex-end'
    },
    
});