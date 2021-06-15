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
            title="Transfer"
            onPress={() => navigation.navigate("Transfer")}
            />
            <Button
                title="Settings"
                onPress={() => navigation.navigate("Settings")}
            />
        </View>
    )
}
