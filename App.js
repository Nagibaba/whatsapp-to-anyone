import React, { Component } from 'react';
import { Image, View, Text, KeyboardAvoidingView, StyleSheet, TextInput, Button, Alert, Linking, TouchableNativeFeedback } from 'react-native';
import { Constants } from 'expo';

// You can import from local files


export default class App extends Component {
  state = {
    inputValue: "+994",
    text: 'Whatsapp !'
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleButtonPress = () => {
    Linking.openURL('whatsapp://send?text=&phone='+this.state.inputValue)
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
        <Image 
          source={require('./brainnn.png')} 
          style={styles.backgroundImage} 

        />
        
        <TextInput 
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={ styles.input }
          keyboardType='numeric'
          
        />
      

       
        <TouchableNativeFeedback
          onPress={this._handleButtonPress}
          background={TouchableNativeFeedback.SelectableBackground()}
          style={styles.button}
          >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}> 
              {this.state.text}
          </Text>
        </View>
      </TouchableNativeFeedback>
      
      </KeyboardAvoidingView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  input:{
    width: 200, 
    height: 44, 
    padding: 8
  },
  button:{

    
   
    
  },
  buttonView:{
    width: 200, 
    height: 44, 
    padding: 8,
    backgroundColor: '#9b59b6',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText:{
    color: 'white',
    fontSize: 12,
  },
  backgroundImage: {
    
    width: 100,
    height: 100,
    resizeMode: 'contain', // or 'stretch'
  }
});
