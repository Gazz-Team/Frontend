import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';
import {ExploreTabScreen} from '../../navigation/MaterialTopBarNavigator';


const Explore = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View 
        style={{flex:1}}
        >
            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{margin:10}}
            />

            <View style={{flex:1}} >
                <ExploreTabScreen />
            </View>
        </View>
    );
}

export default Explore;
