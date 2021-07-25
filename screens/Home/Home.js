import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, Text,Title, Paragraph, Avatar, Card} from 'react-native';
import { TextInput } from 'react-native-paper';

import HomeProfile from '../../components/Home/HomeProfile'




export default function Home( {navigation} ) {
    return (
        <View>
            <HomeProfile />
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
