import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight
} from "react-native";
import Swipeout from 'react-native-swipeout';

class TaskListComponent extends Component {
    constructor(props){
        super(props);
        this._onToggleTask = this._onToggleTask.bind(this);
    }
    _onToggleTask(staskId){
        this.props.onToggleTask(staskId);
    }
    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    style= {styles.flatList}
                    data={this.props.tasks}
                    renderItem= {({item, index}) => {
                        return (
                            <ItemTaskComponent {...item} index={index} onPressButton={this._onToggleTask} />        
                        );
                    }}
                    keyExtractor= {(item , index) => index.toString()}
                >

                </FlatList>
            </View>
        );
    }
}

class ItemTaskComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentRowId: ''
        }
    }
    
    render() {
        let swipeOutSetting = {
            autoClose: true,
            backgroundColor: 'tomato',
            onOpen: (sectionID, rowID, direction) => {
                this.setState({currentRowId: this.props.taskId})
            },
            onClose: (sectionID, rowID, direction) => {
                if(!this.state.currentRowId){
                    this.setState({currentRowId: ''})
                }
            },
            right: [
                {
                    text: 'Done',
                    type: 'primary',
                    backgroundColor: 'orangered',
                    onPress: () => {
                        if(!this.props.completed){
                            this.props.onPressButton(this.state.currentRowId);
                        }else{
                            alert('Task Done');
                        }
                        
                    }
                }
            ]
        }
        return (
            <Swipeout {...swipeOutSetting}>
                <View style={{...styles.wrapperItem, backgroundColor: this.props.completed ? 'olive' : 'lightsalmon'}} >
                    <Text style={{fontSize:16, textTransform:'uppercase', color:'white'}}>{this.props.taskName}</Text>
                </View>
            </Swipeout>
            
        );
    }
}

export default TaskListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
    },
    wrapperItem : {
        flex: 1,
        justifyContent: 'flex-start',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        shadowColor: '#ccc',
    },
});