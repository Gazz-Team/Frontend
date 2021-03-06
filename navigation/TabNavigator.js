import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {HomeStackScreen} from './StackNavigator'

import {ExploreTabScreen} from './MaterialTopBarNavigator';
import Create from '../screens/Create/Create';
import Teams from '../screens/Teams/Teams';
import Explore from '../screens/Explore/Explore';

import { View, Text, Image } from 'react-native';
const Tabs = createBottomTabNavigator()

const TabNavigator = () => (
    <Tabs.Navigator
        tabBarOptions={{
            showLabel:false,    
            style:{
                backgroundColor: 'white',
                height:90,
                borderRadius:20,
                boxShadow:'10 10 black solid'
            }
        }}

    >
      <Tabs.Screen name="Home" component={HomeStackScreen} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', color: focused ? "#353FDF" : "black",}}>
                    <Image 
                        source={require('../assets/Icons/BottomTabsIcon/home.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? "#353FDF" : "black",
                            boxshadow: focused? "20 solid black" : 'none',
                        }}
                    />
                    <Text>Home</Text>
                </View>
            )
        }}
      />
      <Tabs.Screen name="Explore" component={Explore} 
        options={{
            tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', color: focused ? "#353FDF" : "black"}}>
                    <Image 
                        source={require('../assets/Icons/BottomTabsIcon/explore.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? "#353FDF" : "black",
                            boxshadow: focused? "20 solid black" : 'none',
                        }}
                    />
                    <Text>Explore</Text>
                </View>
            )
        }}
      />
      <Tabs.Screen name='Create' component = {Create}
            options={{
            tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', color: focused ? "#353FDF" : "black"}}>
                    <Image 
                        source={require('../assets/Icons/BottomTabsIcon/create.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? "#353FDF" : "black",
                            boxshadow: focused? "20 solid black" : 'none',
                        }}
                    />
                    <Text>Create</Text>
                </View>
            )
        }}
      />
      <Tabs.Screen name='Teams' component = {Teams}
            options={{
            tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', color: focused ? "#353FDF" : "black"}}>
                    <Image 
                        source={require('../assets/Icons/BottomTabsIcon/teams.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? "#353FDF" : "black",
                            boxshadow: focused? "20 solid black" : 'none',
                        }}
                    />
                    <Text>Teams</Text>
                </View>
            )
        }}
      />
    </Tabs.Navigator>
  );

export default TabNavigator