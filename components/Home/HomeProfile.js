import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'flex-start',
        padding: 10,
        margin: 5,
        maxWidth:90,
        height:'auto',
        borderRadius:10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    profileTitle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:16,
    }
  });


const HomeProfile = () => (

        <Card style={styles.cardContainer}>
            <View style={styles.profileTitle}>
                <Avatar.Image size={35} source={require('../../assets/favicon.png')} />
                <Card.Title title="Angel C. Powell" subtitle="Marketing Manager and Analytics" style={{color:'white'}} titleStyle={{color:'white'}} subtitleStyle={{color:'white'}}/>
            </View>

            <Card.Content>
                <Paragraph style={{color:'white'}}>I Enjoy Intramural Basketball and Doing Daily Training for the Chicago Marathon.</Paragraph>
            </Card.Content>

        </Card>

);

export default HomeProfile;