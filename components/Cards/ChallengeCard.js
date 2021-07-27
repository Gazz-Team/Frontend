import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#353FDF',
        display: 'flex',
        alignItems:'flex-start',
        paddingHorizontal: 10,
        paddingVertical:5,
        margin: 5,
        width:90,
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



const ChallengeCard = ({title, desc, creator}) => {
    return (
        <Card style={styles.cardContainer}>
            <View style={styles.profileTitle}>
                <Avatar.Image size={35} source={require('../../assets/favicon.png')} />
                <Card.Title title={title} subtitle={creator} titleStyle={{color:'white', fontSize:15}} subtitleStyle={{color:'white', fontSize:10}} />
            </View>

            <Card.Content>
                <Paragraph style={{color:'white', fontSize:12}}>{desc}</Paragraph>
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
