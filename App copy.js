
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import {SignIn, SignUp, Splash} from './screens/Auth'
import ExploreDefault from './screens/ExploreDefault'
import ExploreCustom from './screens/ExploreCustom'

import Home from './screens/Home'
import { AuthContext } from "./context";

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();


const AuthStackScreen = () => {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component = {SignIn}/>
      <AuthStack.Screen name='SignUp' component = {SignUp}/>
      <AuthStack.Screen name='Home' component = {Home}/>
    </AuthStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return(
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home}/>
        <HomeStack.Screen name='ExploreDefault' component={ExploreDefault}/>
        <HomeStack.Screen name='ExploreCustom' component={ExploreCustom}/>
    </HomeStack.Navigator>
  )
}

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={HomeStackScreen}
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

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("fksfm");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdmnf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App