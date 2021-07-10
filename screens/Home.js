import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, Text } from 'react-native';


export default function Home( {navigation} ) {
    return (
        <View>
            <Text>
                Hello Home
            </Text>
            <Button
            title="ExploreCustom"
            onPress={() => navigation.navigate("ExploreCustom")}
            />
            <Button
                title="ExploreDefault"
                onPress={() => navigation.navigate("ExploreDefault")}
            />
        </View>
    )
}
