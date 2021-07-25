import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const HomeStackScreen = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}/>

        </HomeStack.Navigator>
    )
}

const HomeProfile = () => (

        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions>
        </Card>

);

export default HomeProfile;