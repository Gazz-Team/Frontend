import React from 'react';
import challengeData from '../../data/challenge'
import ChallengeCard from '../Cards/ChallengeCard'
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native'

const RecentChallenge = () => {
    return (
        <View>
            {
            challengeData.map((data)=>{
                return(
                    <TouchableOpacity
                        onPress={()=>console.log('pressed')}
                    >
                    <ChallengeCard title={data.title} desc={data.desc} creator={data.creator}/>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    );
}

export default RecentChallenge;
