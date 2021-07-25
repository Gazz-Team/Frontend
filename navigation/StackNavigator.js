import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn, SignUp} from '../screens/Auth';
import BottomTabs from './BottomTabs';

import Home from '../screens/Home/Home';
import Settings from '../screens/Settings/Settings'

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();


export const HomeStackScreen = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <HomeStack.Screen name='Settings' component={Settings}/>
        </HomeStack.Navigator>
    )
}

const AuthStackScreen = () => {
    return(
      <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component = {SignIn}/>
        <AuthStack.Screen name='SignUp' component = {SignUp}/>
      </AuthStack.Navigator>
    )
  }
  
export const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={BottomTabs}
          options={{
            animationEnabled: true
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: true
          }}
        />
      )}
    </RootStack.Navigator>
  );