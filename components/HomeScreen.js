import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

 

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: 'https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/07/reactrouter.png'
    };

    this.userHandleClick = this.userHandleClick.bind(this);
  }

  userHandleClick(){ 
    this.props.navigation.navigate('User')
  }

  render() {
    return (
      <View style={styles.container}>
 
        <Button
          title="Go to User"
          onPress={this.userHandleClick}
        /> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});

export default HomeScreen;