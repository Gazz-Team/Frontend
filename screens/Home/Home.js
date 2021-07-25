import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, Text, Paragraph, Avatar, Card, StyleSheet, ScrollView, FlatList} from 'react-native';
import { TextInput, IconButton, Title, } from 'react-native-paper';

import HomeProfile from '../../components/Home/HomeProfile'
import RecentChallenge from '../../components/Home/RecentChallenge'

import challengeData from '../../data/challenge'
import ChallengeCard from '../../components/Cards/ChallengeCard'

const styles = StyleSheet.create({
    container:{
        backgroundcolor: 'blue',
        display:'flex',
        alignItems:'center',
    },
    appbar:{
        disply:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'15px'
    },
    title:{
        // alignSelf:'left',
        padding:'15px',
    }
});

export default function Home( {navigation} ) {
    return (
        <View >
            {/* <ScrollView> */}
            <View style={styles.appbar}>
                <Title>
                    Home
                </Title>
              <IconButton
                    icon="menu"
                    color='black'
                    size={20}
                    onPress={() => navigation.push('Settings')}
                />
            </View>

        
            <View style={styles.container}>
                <HomeProfile />
            </View>

            <Title style={styles.title}>
                Recent Challenge
            </Title>

            <View style={styles.container}>
                <RecentChallenge />
                {/* {
                challengeData.map((data)=>{
                    return(
                        <ChallengeCard title={data.title} desc={data.desc} creator={data.creator}/>
                    )
                })
                } */}
            </View>

            {/* <FlatList
                data={challengeData}
                renderItem={({data})=>(
                    <ChallengeCard title={data.title} desc={data.desc} creator={data.creator} />
                )}
            /> */}

        {/* </ScrollView> */}

        </View>
    )
}
