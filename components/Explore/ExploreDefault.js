// import React from 'react';
// import {View} from 'react-native';

// const ExploreDefault= () => {
//     return (
//         <View style={{flex:'1', justifyContent:'center', alignItems:'center'}}>
//             'Hello from Explore Default'
//         </View>
//     );
// }

// export default ExploreDefault
// ;


import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import challengeData from '../../data/defaultChallengeMain'
import ChallengeCard from '../Cards/ChallengeCard'

const ExploreDefault = () => {
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

export default ExploreDefault;
