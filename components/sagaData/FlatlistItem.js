import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Image,
    Alert
} from "react-native";
import Swipeout from 'react-native-swipeout';


class FlatlistItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const {parentsComponent} = this.props;
        const settingSwipeout = {
            autoClose: true,
            onOpen: ()=> {},
            right: [
                {
                    onPress: ()=> {

                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        Alert.alert(
                            'Delete Item ?',
                            'Are you want to delete item?',
                            [
                                {
                                    text: 'OK', onPress: () =>  {
                                        parentsComponent.props.onClickDelete(this.props.id);
                                    }
                                },
                                {
                                  text: 'Cancel',
                                  style: 'cancel',
                                },

                            ],
                            {cancelable: false},
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            sectionId: 1,
            rowId: this.props.itemIndex
        }
        return (
            <Swipeout {...settingSwipeout}>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Image style = {styles.image} source={{uri : 'https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg'}} />
                        <View style = {styles.contentWrapper}>
                            <Text style = {styles.title}>Type: <Text style={styles.name}>{this.props.type}</Text> </Text>
                            <Text style = {styles.title}>Number: <Text style={styles.name}>{ this.props.number }</Text> </Text>
                            <Text style = {styles.title}>Wifi: <Text style={styles.name}>{ this.props.hasWifi }</Text> </Text>
                            <Text style = {styles.title}>Price: <Text style={styles.name}>{ this.props.price }</Text> </Text>
                        </View>
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
        marginBottom: 6,
        padding:10,
      },
      separator: {
        height: 2,
        backgroundColor: "#222222"
      },
      image:{
        width:45,
        height:45,
        marginRight: 25
      },
      contentWrapper: {
        flex:1
      },
      time:{
        fontSize:11,
        color:"#808080",
      },
      name:{
        fontSize:16,
        fontWeight:"bold",
      },
      title: {
          fontWeight: 'bold',
          fontSize:12,
          color: '#666'
      }

});