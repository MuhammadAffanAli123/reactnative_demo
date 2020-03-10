import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ScrollView  , TouchableHighlight } from 'react-native';
import {  Button } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './homes'
// import BackgroundCarousel from "./Slider";
import { SliderBox } from "react-native-image-slider-box";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { Ionicons } from '@expo/vector-icons';
//import AboutScreen from './about'

export default class AboutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/mount1.png'),
                require('../assets/mount2.png'),
                require('../assets/mount3.png'),
                require('../assets/mount4.png'),
                
            ]
        };
    }
    static navigationOptions = {
        drawerLabel: 'About',

        // drawerIcon: ( ) => (
        //   <Ionicons name="md-notifications" size={32} color="black" />
        // ),
    };
    onLayout = e => {
        this.setState({
            width: e.nativeEvent.layout.width
        });
    };

    render() {
        return (
            <View style={{ backgroundColor: "lightgray" }}>
                <ScrollView>
                    <View style={{height:"6%", flexDirection:"row"  , width:"100%" , backgroundColor:"white",borderColor:"white" , borderStyle:"solid" , borderWidth:7}}> 
                     <Image source={require('../assets/mono1.png')}  style={{width:"10%" , marginLeft:"10%",height:"70%"}} />
                     <Image source={require('../assets/mono2.png')}  style={{width:"35%" , Top:5,marginLeft:"10%" ,height:"90%"}} />
                     <Image source={require('../assets/mono2.png')}  style={{width:"40%" , marginLeft:"0.5%", height:"90%"}} />


                    </View>
                
                    <View style={{ marginLeft: 17, marginTop: 10, marginRight: 30, borderWidth: 5, borderColor: "white", backgroundColor: "white", width: "90%" , height:"20%" }}>
                        <Image source={require('../assets/mount1.png')} style={{ width: "100%", height: 150, Top:15 }} />
                        
                        <View style={{
                            bottom:130,
                            width:"30%"
                        }}>
                           
                            <Button style={{width:'150%',borderRadius:25,backgroundColor:"yellow", justifyContent:'center', borderColor:'black'}} >
            <Text style={{ color:'Black',fontSize:18,fontWeight:"bold",borderBottomWidth: 4,borderBottomColor:"white"}}>FEATURED</Text>
          </Button>
                            
                        
                        </View>
                        <View style={{
                            bottom:110,
                            width:"30%",
                            left:"50%"
                        }}>
                        <Button style={{width:'150%',borderRadius:25,backgroundColor:"black", justifyContent:'center', borderColor:'black'}}>
            <Text style={{ color:'yellow',fontSize:18,fontWeight:"bold",borderBottomWidth: 4,borderBottomColor:"white"}}>09 Questions</Text>
          </Button>
                        </View>
                     
                        <Text style={{ color: "blue", fontSize: 25 , bottom:80 }}>
                            Veterons Day
        </Text>
                        <Text style={{ bottom:80}}>
                            Veterons Day
        </Text>
                    </View>
                    <View onLayout={this.onLayout} style={{ marginLeft: 15, marginTop: 10, marginRight: 30, borderWidth: 5, borderColor: "white", backgroundColor: "white", width: "90%" }}>
                    <Text>
                        In Progress
                    </Text>

                        <SliderBox
                            images={this.state.images}
                            sliderBoxHeight={200}
                            onCurrentImagePressed={index =>
                                console.warn(`image ${index} pressed`)
                            }
                            parentWidth={this.state.width}
                            dotColor="skyblue"
                            inactiveDotColor="#90A4AE"
                          
                            dotStyle={{
                                width: 15,
                                height: 15,
                                borderRadius: 15,
                                marginHorizontal: 10,
                                padding: 0,
                                margin: 0,
                                bottom:190,
                                left:10
                            }}
                        />
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Top Pixcel
        </Text>
                    </View>

                    <View style={{ marginLeft: 17, marginTop: 10, marginRight: 30, borderWidth: 5, borderColor: "white", backgroundColor: "white", width: "90%" , height:"20%" }}>
                        <Image source={require('../assets/mount3.png')} style={{ width: "100%", height: 150, Top:15 }} />
                        
                           
                          
                        <View style={{
                            bottom:90,
                            width:"30%",
                            left:"50%"
                        }}>
                          <Button style={{width:'150%',borderRadius:25,backgroundColor:"black", justifyContent:'center', borderColor:'black'}}>
            <Text style={{ color:'yellow',fontSize:18,fontWeight:"bold",borderBottomWidth: 4,borderBottomColor:"white"}}>20 Questions</Text>
          </Button>
                        </View>
                     
                        <Text style={{ color: "blue", fontSize: 25 , bottom:50 }}>
                            Halveen Trial
        </Text>
                        <Text style={{ bottom:50}}>
                            BY Trial
        </Text>
                    </View>

                    <View style={{ marginLeft: 17, marginTop: 10, marginRight: 30, borderWidth: 5, borderColor: "white", backgroundColor: "white", width: "90%" , height:"20%" }}>
                        <Image source={require('../assets/mount2.png')} style={{ width: "100%", height: 150, Top:15 }} />
                        
                           
                          
                        <View style={{
                            bottom:90,
                            width:"30%",
                            left:"50%"
                        }}>
                          <Button style={{width:'150%',borderRadius:25,backgroundColor:"black", justifyContent:'center', borderColor:'black'}}>
            <Text style={{ color:'yellow',fontSize:18,fontWeight:"bold",borderBottomWidth: 4,borderBottomColor:"white"}}>04 Questions</Text>
          </Button>
                        </View>
                     
                        <Text style={{ color: "blue", fontSize: 25 , bottom:50 }}>
                           Aconomy Session
        </Text>
                        <Text style={{ bottom:50}}>
                            By session
        </Text>
                    </View>


                </ScrollView>


            </View>

        );
    }
}

const styles = StyleSheet.create({

  
    container: {
  
      justifyContent: 'center',
      alignItems: 'center',
      margin: 50,
    },
  
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottomWidth: 7,
      borderColor: '#000',
      height: 70,
      
      width: 340,
      borderRadius: 22,
      borderColor:"green",
      borderBottomWidth: 6,
      margin: 10
    },
  
    ImageStyle: {
      padding: 10,
      margin: 5,
      height: 35,
      width: 35,
      resizeMode: 'stretch',
      alignItems: 'center'
    },
  
  })
  