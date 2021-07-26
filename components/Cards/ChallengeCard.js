import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'left',
        paddingHorizontal: '10px',
        paddingVertical:'5px',
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
                <Card.Title title={title} subtitle={creator} titleStyle={{color:'white', fontSize:'15px'}} subtitleStyle={{color:'white', fontSize:'10px'}} />
            </View>

            <Card.Content>
                <Paragraph style={{color:'white', fontSize:'12px'}}>{desc}</Paragraph>
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

export default ChallengeCard;
