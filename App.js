import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Splash} from './screens/Auth';
import { AuthContext } from "./context";
import { RootStackScreen } from './navigation/StackNavigator';


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