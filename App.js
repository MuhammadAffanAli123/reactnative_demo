import React, { Component }  from 'react';
import { View, Text , Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from 'native-base'
import  HomeScreen from './Screen/homes'
import AboutScreen from './Screen/about'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import demoReducer from './Screen/reducer/myreducer';

const store = createStore(demoReducer);

const AppDrawerNavigator = createBottomTabNavigator({
    
    Home: {
    screen: HomeScreen,
    navigationOptions: {
     tabBarLabel:"Home",

     tabBarIcon: ({ tintColor }) => (
       <Icon style={{color:"black"}} name="md-menu" size={75}/>
     )
   },
  },
  About: {
    screen:  AboutScreen,
    navigationOptions: {
     tabBarLabel:"profile",

     tabBarIcon: ({ tintColor }) => (
       <Icon style={{color:"black"}} name="person" size={75}/>
     )
   },
  },
  
},

{
   
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    activeBackgroundColor:"#96cd2a",
    activeFontSize:70,
    activeIconColor:"blue",
    showIcon: true ,
    style: {
      backgroundColor: 'white',
      borderWidth:2,
      
      
    }
  },
 // tabBarOptions: { activeTintColor:'blue', },
},
);

const AppStackNavigator= createStackNavigator({
   " defaulter ": AppDrawerNavigator
},

{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  
 }

 );


const AppContainer= createAppContainer(AppStackNavigator);

export default class App extends Component {
  
  render() {
    return (
      <Provider store={ store }>
         <AppContainer/>
      </Provider>
        
      
     
        
      
      
     
    );
  }
}


