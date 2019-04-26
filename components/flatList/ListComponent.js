import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from "react-native";

import data from '../../data/data';
import Swipeout from 'react-native-swipeout';



class ListComponent extends Component 
{
    render() {
        return (
            <View style={styles.container}>
                <View style= {styles.header}>
                    <Text style= {styles.title}>
                       {'Recent Lead'.toUpperCase()} 
                    </Text>
                </View>

                <FlatList 
                    keyExtractor = {(item, index) => index.toString() }
                    data= {data}
                    renderItem = {
                        ({item, index}) => {
                            return (
                                <Item item={item} index= {index} />
                            );
                        }
                    }
                >
                    
                </FlatList>
            </View>
        );
    }
}

class Item extends Component{
    render(){
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {

            },
            right: [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: ()=>{
                        alert('Delete');
                    },
                
                }
            ],
            sectionId: 1     
        }
        return (
            <Swipeout {...swipeSetting}>
                <View style={{...styles.item}}>
                    <Image source={{uri : 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'}} style={{width: 100, height: 100, margin:5, marginRight: 20}} />
                    <View>
                        <Text style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>First Name:</Text>  {this.props.item.first_name}</Text>
                        <Text style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>Last Name:</Text>  {this.props.item.last_name}</Text>
                        <Text style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>Email:</Text>  {this.props.item.email}</Text>
                        <Text style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>Country:</Text>  {this.props.item.country}</Text>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        backgroundColor: 'indianred'
    },
    imageWrapper: {
        marginRight: 10,
    },
    header: {
        marginBottom:10,
        justifyContent:'center',
        alignItems: 'center',
        height:30
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 14,
        color: 'chocolate',
        fontWeight: '600'
    },
});