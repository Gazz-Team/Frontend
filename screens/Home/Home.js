import * as React from 'react';
import { View, StyleSheet, ScrollView, 
        SafeAreaView,} from 'react-native';
import { Title, IconButton } from 'react-native-paper';

import HomeProfile from '../../components/Home/HomeProfile'

import RecentChallenge from '../../components/Home/RecentChallenge'
import RecentTeam from '../../components/Home/RecentTeam'

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        display:'flex',
        alignItems:'center',
    },
    appbar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
    },
    title:{
        padding:15,
    }
});

export default function Home( {navigation} ) {
    return (
        <SafeAreaView style={{flex:1}}>
        <View 
        style={{flex:1}}
        >
            <View style={styles.appbar}>
                <Title>
                    Hello World
                </Title>
              <IconButton
                    icon="menu"
                    color='black'
                    size={20}
                    onPress={() => navigation.push('Settings')}
                />
            </View>

        
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={styles.container}>
                    <HomeProfile />
                </View>

                <Title style={styles.title}>
                    Recent Challenge
                </Title>

                <View style={styles.container}>
                    <RecentChallenge />
                </View>

                <Title style={styles.title}>
                    Recent Teams
                </Title>

                <ScrollView horizontal={true}>
                    <View style={styles.container}>
                        <RecentTeam />
                    </View>
                </ScrollView>


            </ScrollView>

        </View>
        </SafeAreaView>
    )
}
