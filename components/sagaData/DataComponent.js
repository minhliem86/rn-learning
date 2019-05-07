import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from 'react-native';

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
          renderItem={({item, index}) =>

              <View style={styles.container}>
                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text  style={styles.name}>{item.title}</Text>
                  </View>
                  <Text rkType='primary3 mediumLine'>{item.body}</Text>
                </View>
              </View>
          }/>
      </View>
    );
  }
}

class ActionComponent extends Component{
  constructor (props){
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }
  render(){
    return (
      <View style={styles.actionBar}>
        <Text style={styles.textActionBar}>ADD NEW LIST</Text>
        <View style={styles.formWrapper} >
          <TextInput
            style= {styles.inputText}
            placeholder = "Enter Title"
            name="title"
            onChangeText = {(text) => {this.setState({title: text})} }
          />
          <TextInput
            style= {styles.inputText}
            placeholder = "Enter Description"
            name="description"
            onChangeText = {(desc) => {this.setState({description: desc})} }
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            style = {styles.btnAdd}
            title="Add New"
            color="orangered"
            onPress= { ()=>{
              const {title, description} = this.state;
              if( !title.length  || !description.length ){
                alert('Vui lòng nhập title, description');
                return;
              }
              this.props.onAdd({title: title, description: description});

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
    backgroundColor: "#ffffff",
    marginTop:10,
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
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
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