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
              <View style={styles.container}>
                  <FlatlistItem {...item} itemIndex={index} parentsComponent={this} />
              </View>
            }
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
      name: '',
      job: ''
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
            name="name"
            onChangeText = {(text) => {this.setState({name: text})} }
          />
          <TextInput
            style= {styles.inputText}
            placeholder = "Enter Description"
            name="job"
            onChangeText = {(desc) => {this.setState({job: desc})} }
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            style = {styles.btnAdd}
            title="Add New"
            color="orangered"
            onPress= { ()=>{
              const {name, job} = this.state;
              if( !name.length  || !job.length ){
                alert('Vui lòng nhập name, job');
                return;
              }
              this.props.onAdd({name: name, job: job});

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
});
