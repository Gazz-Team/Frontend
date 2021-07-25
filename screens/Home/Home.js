import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function Home( {navigation} ) {
    return (
        <View>
            <Text>
                Hello Home
            </Text>
            <TextInput />
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
