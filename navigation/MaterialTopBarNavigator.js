import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreDefault from '../components/Explore/ExploreDefault'
import ExploreCustom from '../components/Explore/ExploreCustom'

const Tab = createMaterialTopTabNavigator();

import React from 'react';

export const ExploreTabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='ExploreDefault' component={ExploreDefault} />
            <Tab.Screen name='ExploreCustom' component={ExploreCustom} />
        </Tab.Navigator>
    );
}
