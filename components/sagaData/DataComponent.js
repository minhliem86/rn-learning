import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import FlatlistItem from './FlatlistItem';
import EditModal from './ModalEdit';
import RNPickerSelect from 'react-native-picker-select';

const rangValue = [1,2,3,4,5,6,7,8];

export default class DataComponent extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.root}>
        <ActionComponent onFetch={this.props.onClickFetch} onAdd={this.props.onClickAdd} />

        <FlatList
          style={styles.root}
          data = {this.props.data}
          keyExtractor={(item, index)=>{ return index.toString()}}
          renderItem={({item, index}) =>{
            return (

                  <FlatlistItem {...item} itemIndex={index} parentsComponent={this} />

            )}
          }/>
          <EditModal ref={"editModal"} parentsComponent = {this} />

      </View>
    );
  }
}

class ActionComponent extends Component{
  constructor (props){
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
  render(){
    return (
      <View style={styles.actionBar}>
        <Text style={styles.textActionBar}>ADD NEW LIST</Text>
        <View style={styles.formWrapper} >
          <TextInput
            style= {styles.inputText}
            placeholder = "Enter Room Type"
            onChangeText = {(text) => {this.setState({type: text})} }

          />
          <TextInput
            style= {styles.inputText}
            placeholder = "Enter Num of room"
            onChangeText = {(text) => {this.setState({number: text})} }
            keyboardType = "numeric"

          />
        </View>
        <View style = {styles.formWrapper}>
          <TextInput
              style= {styles.inputText}
              placeholder = "Enter Price per night"
              onChangeText = {(text) => {this.setState({price: text})} }
              keyboardType = "numeric"
          />

          <RNPickerSelect
            placeholder = {{
              label: 'Do has Wifi ?',
              value: null,
              color: '#9EA0A4',
            }}
            useNativeAndroidPickerStyle = {false}
            style = {
              {
                inputAndroidContainer: {
                  height:35,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: 'seashell',
                  padding:5,
                  color: 'white',
                  marginBottom: 10,
                }
              }
            }
            onValueChange = { (value, index) => {this.setState({hasWifi: value})}}
            items = {
              [
                {
                  label: 'Yes',
                  value: 1
                },
                {
                  label: 'No',
                  value: 0
                },
              ]
            }
          />

        </View>

        <RNPickerSelect
          placeholder = {{
            label: 'Select a min of quatity person...',
            value: null,
            color: '#9EA0A4',
          }}
          useNativeAndroidPickerStyle = {false}
          style = {
            {
              inputAndroidContainer: {
                height:35,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'seashell',
                padding:5,
                color: 'white',
                marginBottom: 10
              }
            }
          }
          onValueChange = { (value, index) => {this.setState({min: value})}}
          items ={
            rangValue.map( value => {
              return {label: value.toString(), value: value}
            })
          }
        />
        <RNPickerSelect
          placeholder = {{
            label: 'Select a max of quatity person...',
            value: null,
            color: '#9EA0A4',
          }}
          useNativeAndroidPickerStyle = {false}
          style = {
            {
              inputAndroidContainer: {
                height:35,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'seashell',
                padding:5,
                color: 'white',
                marginBottom: 10
              }
            }
          }
          onValueChange = { (value, index) => {this.setState({max: value})}}
          items ={
            rangValue.map( value => {
              return {label: value.toString(), value: value}
            })
          }
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            style = {styles.btnAdd}
            title="Add New"
            color="orangered"
            onPress= { ()=>{
              const {number, type, hasWifi, min, max, price} = this.state;
              console.log(this.state.hasWifi);
              if( !number  || !type.length  || !min || !max ){
                alert('Vui lòng nhập đầy đủ thông tin !');
                return;
              }
              this.props.onAdd({
                number,
                type,
                min,
                max,
                hasWifi,
                price,
              });

            }} ></Button>
          <Button
            style = {styles.btnFetch}
            title="Fetch Data"
            color="limegreen"
            onPress= {()=>{this.props.onFetch()}}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'lightyellow',
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  actionBar: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    backgroundColor: 'slategray',
  },
  textActionBar: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    fontWeight: '600',
    textAlign:'center',
    marginBottom:10
  },
  formWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputText: {
    width: '49%',
    height:35,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'seashell',
    padding:5,
    color: 'white',
    marginBottom: 10
  },
  btnAdd: {
    width: 120,
    borderRadius: 3,
    height:35,
    justifyContent: 'center',
  },
  btnFetch: {
    width: 120,
    borderRadius: 3,
    height:35,
    justifyContent: 'center',
  },
  inputAndroidContainer: {
    height:35,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'seashell',
    padding:5,
    color: 'white',
    marginBottom: 10
  }
});
