import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'left',
        padding: '10px',
        margin: '5px',
        maxWidth:'90vw',
        height:'auto',
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



const ChallengeCard = ({title, desc, creator}) => {
    return (
        <Card style={styles.cardContainer}>
            <View style={styles.profileTitle}>
                <Avatar.Image size={35} source={require('../../assets/favicon.png')} />
                <Card.Title title={title} subtitle={creator} titleStyle={{color:'white'}} subtitleStyle={{color:'white'}}/>
            </View>

            <Card.Content>
                <Paragraph style={{color:'white'}}>{desc}</Paragraph>
            </Card.Content>

            <Card.Actions>
                <Button 
                color='white'
                // style={{color:'white'}}
                onPress={()=>console.log('euy')}
                >Take Challenge</Button>
            </Card.Actions>

        </Card>
    );
}

export default ChallengeCard;
