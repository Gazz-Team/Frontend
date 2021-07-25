import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn, SignUp, Splash} from './screens/Auth';
import { AuthContext } from "./context";

import Home from './screens/Home/Home';
import BottomTabs from './navigation/BottomTabs'

const MyTheme = {
  dark: false,
  colors: {
    primary: '#353FDF',
    background: 'white',
    card: '#353FDF',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component = {SignIn}/>
      <AuthStack.Screen name='SignUp' component = {SignUp}/>
      <AuthStack.Screen name='Home' component = {Home}/>
    </AuthStack.Navigator>
  )
}

const RootStackScreen = ({ userToken }) => (
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
      <NavigationContainer theme={MyTheme}>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App