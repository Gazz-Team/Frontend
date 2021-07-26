import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'left',
        paddingHorizontal: '5px',
        paddingVertical:'5px',
        margin: '5px',
        maxWidth:'40vw',
        height:'40vw',
        borderRadius:'10px',
        elevatoion: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    profileTitle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'16px',
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
                <Card.Title title={title} subtitle={creator} titleStyle={{color:'white', fontSize:'15px'}} subtitleStyle={{color:'white', fontSize:'10px'}} />
            </View>

            <Card.Content>
                <Text style={{color:'white', fontSize:'10px'}}>{desc}</Text>
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
