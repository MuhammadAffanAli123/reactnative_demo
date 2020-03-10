import React, { Component }  from 'react';
import { View, Text , Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AboutScreen from './about'
import { connect } from 'react-redux';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
   
    // drawerIcon: () => (
    //  <Ionicons name="md-home" size={32} color="black" />
    // ),
  };

  render() {
    return (
      <View style={{ color:"pink" , marginRight: 30, width:200 , marginTop:30 , marginLeft:75}}>
      <Button
     onPress={() => this.props.navigation.navigate('About')}
     title="Go to Profile"
   />
   
   </View>
  
    );
  }
  }
  
  const mapStateToProps = (state) => {
    const { demotest } = state
    return { demotest }
  };

  export default connect(mapStateToProps)(HomeScreen);