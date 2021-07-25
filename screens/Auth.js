import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { AuthContext } from "../context";
import { TextInput, Appbar, Button, Text } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginTop:'80px',
    },

    textForm:{
        color:'#353FDF',
        margin:'4px'
    },

    inputSignin:{
        display:'flex',
        alignItems:'left',
    },

    form:{
        height:'40px',
        width:'80vw',
        margin:'4px'
    }

  });
  

const ScreenContainer = ({children}) => {
    return(
        <View>
            <View style={styles.container}> {children}</View>
        </View>
    )
};


export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ScreenContainer>
            
            <View style={styles.inputSignin}>
                <Text style = {styles.textForm}>Email</Text>
                <TextInput
                    placeholder="Enter your email here"
                    value={mail}
                    onChangeText={mail => setMail(mail)}
                    style={styles.form}
                />

                <Text style = {styles.textForm}>Password</Text>
                <TextInput
                    placeholder="Enter your password here"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={styles.form}
                />

            </View>

            <Button mode="contained" color="#353FDF" onPress={() => signIn()} style={{marginTop:'20px', marginBottom:'10px'}}>
                Sign In
            </Button>


            <Button mode="text" color="#353FDF" onPress={() => navigation.push("SignUp")} >
                Sign Up for free
            </Button>
        </ScreenContainer>
    );
};

export const SignUp = () => {
    const { signUp } = React.useContext(AuthContext);
    const [name, setName] = React.useState('')
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <ScreenContainer>
        <Text>Create Account Screen</Text>

        <View style={styles.inputSignin}>

            <Text style = {styles.textForm}>Name</Text>
            <TextInput
                placeholder="Enter your name here"
                value={name}
                onChangeText={name => setName(name)}
                style={styles.form}
            />


            <Text style = {styles.textForm}>Email</Text>
            <TextInput
                placeholder="Enter your email here"
                value={mail}
                onChangeText={mail => setMail(mail)}
                style={styles.form}
            />


            <Text style = {styles.textForm}>Password</Text>
            <TextInput
                placeholder="Enter your password here"
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.form}
            />

        </View>

        <Button mode="contained" color="#353FDF" onPress={() => signUp()} style={{marginTop:'20px', marginBottom:'10px'}}>
            Sign Up
        </Button>


            {/* <Button mode="text" color="#353FDF"  >
                Sign Up for free
            </Button> */}
        </ScreenContainer>
    );
};

export const Splash = () => (
    <ScreenContainer>
      <Text>Please wait a while...</Text>
    </ScreenContainer>
  );