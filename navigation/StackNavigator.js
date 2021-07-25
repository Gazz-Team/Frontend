import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn, SignUp} from '../screens/Auth';
import BottomTabs from './BottomTabs';
import Home from '../screens/Home/Home';

const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();


export const HomeStackScreen = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}/>

        </HomeStack.Navigator>
    )
}

const AuthStackScreen = () => {
    return(
      <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component = {SignIn}/>
        <AuthStack.Screen name='SignUp' component = {SignUp}/>
        <AuthStack.Screen name='Home' component = {Home}/>
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