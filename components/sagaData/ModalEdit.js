import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from "react-native";

import Modal from 'react-native-modalbox';
import RNPickerSelect from 'react-native-picker-select';

const rangValue = [1,2,3,4,5,6,7,8];

class ModalEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: '',
            type: '',
            min: 1,
            max: 8,
            hasWifi: 0,
            price: '',

        }
    }
    openModalVisible() {
        this.setState({modalVisible: true})
    }

    render() {
        return (
            <View>
                <Modal
                    ref = {"myModal"}
                    style = {styles.modal}
                    backdrop = {true}
                >
                    <View >
                        <Text>Edit Room</Text>
                        <TextInput
                            placeholder = "Type of Room"
                            value = {this.state.type}
                            onChangeText = {(text)=>{this.setState({type: text})} }
                        />
                        <TextInput
                            placeholder = "Number of Room"
                            value = {this.state.number}
                            onChangeText = {(text)=>{this.setState({number: text})} }
                        />
                        <RNPickerSelect
                            placeholder = {{"Selct one option": null}}
                            items ={
                                [
                                    {label: 'Yes' , value : 1},
                                    {label: 'No' , value : 0},
                                ]
                            }
                            onValueChange = { (value, index)=>{this.setState({ hasWifi: value }) } }
                        />

                        {/* <RNPickerSelect
                            placeholder = {{"Selct min of quatity person": null}}
                            items ={
                                rangValue.map( (item) => (
                                    {lable: item, value: item}
                                ))
                            }
                            onValueChange = { (value, index)=>{this.setState({ min: value }) } }
                        /> */}

                        {/* <RNPickerSelect
                            placeholder = {{"Selct max of quatity person": null}}
                            items ={
                                rangValue.map( (item) => (
                                    {lable: item, value: item}
                                ))
                            }
                            onValueChange = { (value, index)=>{this.setState({ min: value }) } } */}
                        />

                        <Button
                            title = "Submit"
                            onPress = { () => {
                                if(!this.state.name.length  || !this.state.job.length){
                                    alert("Required Name and Job field");
                                    return ;
                                }
                                /* TODO: UPDATE DATA TO API */

                                this.refs.myModal.close();
                            }}
                        >

                        </Button>

                    </View>

                </Modal>
            </View>
        );
    }
}
export default ModalEdit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding:10,
    }
});