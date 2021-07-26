import React from 'react';
import teamData from '../../data/team'
import TeamCard from '../Cards/TeamCard'
import {StyleSheet, View,TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:'20px',
        paddingBottom:'30px',
    }
})

const RecentTeam = () => {
    return (
        <View style={styles.container}>
            {
            teamData.map((data)=>{
                return(
                    <TouchableOpacity
                    onPress={()=>console.log('pressed')}
                >
                    <TeamCard title={data.title} desc={data.desc} creator={data.creator}/>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    );
}

export default RecentTeam;
