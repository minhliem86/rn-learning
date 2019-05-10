import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal
} from "react-native";
import Swipeout from 'react-native-swipeout';

class FlatlistItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const settingSwipeout = {
            autoClose: true,
            right: [
                {
                    onPress: ()=> {
                        const {parentComponent} = this.props;

                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'danger'
                }
            ],
            sectionId: 1,
            rowId: this.props.id
        }
        return (
            <Swipeout {...settingSwipeout}>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <View style = {styles.colorGroup}>
                            <View style= {{flex:1, witdh: 10, height: 10, backgroundColor: 'red' }}>
                            </View>
                            <Text  style={{...styles.name, color: `${item.color}`}}>{item.name}</Text>
                        </View>
                        <Text  style={styles.time}>{item.year}</Text>
                    </View>
                    <View style = {styles.separator}></View>
                </View>
            </Swipeout>
        );
    }
}
export default FlatlistItem;

const styles = StyleSheet.create({

      content: {
        flex: 1,
      },
      contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
      },
      separator: {
        height: 2,
        backgroundColor: "#222222"
      },
      image:{
        width:45,
        height:45,
        borderRadius:20,
        marginLeft:20
      },
      colorGroup: {
        flexDirection: 'row'
      },
      time:{
        fontSize:11,
        color:"#808080",
      },
      name:{
        fontSize:16,
        fontWeight:"bold",
      },

});