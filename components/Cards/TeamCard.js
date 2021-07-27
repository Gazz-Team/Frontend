import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'flex-start',
        paddingHorizontal: 5,
        paddingVertical:5,
        margin: 5,
        maxWidth:40,
        height:40,
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



const TeamCard = ({title, desc, creator}) => {
    return (
        <Card
            style={styles.cardContainer}
            // onPress={()=>console.log('card clicked')}
            >
            <View style={styles.profileTitle}>
                <Avatar.Image size={35} source={require('../../assets/favicon.png')} />
                <Card.Title title={title} subtitle={creator} titleStyle={{color:'white', fontSize:15}} subtitleStyle={{color:'white', fontSize:10}} />
            </View>

            <Card.Content>
                <Text style={{color:'white', fontSize:10}}>{desc}</Text>
            </Card.Content>

            {/* <Card.Actions>
                <Button 
                color='white'
                // style={{color:'white'}}
                onPress={()=>console.log('euy')}
                >Take Challenge</Button>
            </Card.Actions> */}

        </Card>
    );
}

export default TeamCard;
