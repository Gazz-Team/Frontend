import React from 'react';
import challengeData from '../../data/challenge'
import ChallengeCard from '../Cards/ChallengeCard'
import {StyleSheet, View, ScrollView} from 'react-native'

const RecentChallenge = () => {
    return (
        <View>
            {
            challengeData.map((data)=>{
                return(
                    <ChallengeCard title={data.title} desc={data.desc} creator={data.creator}/>
                )
            })
            }
        </View>
    );
}

export default RecentChallenge;
