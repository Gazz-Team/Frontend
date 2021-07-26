import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import challengeData from '../../data/customChallengeMain'
import ChallengeCard from '../Cards/ChallengeCard'

const ExploreCustom = () => {
    return (
        <ScrollView >
            <View style={{alignItems:'center', justifyContent:'center', marginVertical:'15px'}}>


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
        </ScrollView>
    );
}

export default ExploreCustom;
