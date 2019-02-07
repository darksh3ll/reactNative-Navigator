import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Login1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.props.navigation.navigate('Login')}>login1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  }
});
