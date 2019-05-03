import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import AddContainer from '../../containers/AddContainer';
import TaskListContainer from '../../containers/TaskListContainer';

class TaskComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddContainer />    
                <TaskListContainer/>
            </View>
        );
    }
}
export default TaskComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});