import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from "../context";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
  });
  

const ScreenContainer = ({children}) => {
    return(
        <View style={styles.container}> {children}</View>
    )
};

export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" 
                onPress={() => signIn()} 
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.push("SignUp")}
            />
            <Button
                title="Home"
                onPress={() => navigation.push("Home")}
            />
        </ScreenContainer>
    );
};

export const SignUp = () => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <ScreenContainer>
        <Text>Create Account Screen</Text>
        <Button title="Sign Up" 
            onPress={() => signUp()} 
        />
        </ScreenContainer>
    );
};

export const Splash = () => (
    <ScreenContainer>
      <Text>Please wait a while...</Text>
    </ScreenContainer>
  );