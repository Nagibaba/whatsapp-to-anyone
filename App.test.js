import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, TextInput, Button, Alert, Linking } from 'react-native';
import { Constants } from 'expo';

// You can import from local files


export default class App extends Component {
  state = {
    inputValue: "+994"
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
        
        <TextInput 
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
          keyboardType='numeric'
          
        />
      
        <Button
          title="Whatsapp"
          onPress={this._handleButtonPress}
        />
      
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
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
