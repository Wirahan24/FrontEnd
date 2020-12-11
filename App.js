import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 200, height: 200 }}
   />
      <InputUsername id="txtUsername" name="txtUsername"/>
      <InputPassword/>
      <BtnSubmit/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const InputUsername = (props) =>  <Input placeholder="Comment" leftIcon={{ type: 'font-awesome-5', name: 'user' }} />
const InputPassword = (props) => <Input placeholder="Password" leftIcon={{type: 'font-awesome-5', name: 'unlock-alt'}} secureTextEntry={true} />
const BtnSubmit = (props) => <Button icon={{ name: "arrow-right",size: 15,color: "white"}} title="Button with icon object"
/>