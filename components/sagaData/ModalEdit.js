import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TextInput,
    Button,

} from "react-native";
import Modal from 'react-native-modalbox';

class ModalEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: true,
            name: '',
            jpb: '',
        }
    }
    openModalVisible() {
        this.setState({modalVisible: true});
    }

    render() {
        return (
            <View >
                <Modal
                    ref = {"myModal"}
                    style = {styles.modal}
                    backdrop = {true}
                }
                >
                    <View >
                        <Text>Edit Modal</Text>
                        <TextInput
                            placeholder = "Name"
                            value = {this.state.name}
                            onChangeText = {(text)=>{this.setState({name: text})} }
                        />
                        <TextInput
                            placeholder = "Job"
                            value = {this.state.jov}
                            onChangeText = {(text)=>{this.setState({job: text})} }
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