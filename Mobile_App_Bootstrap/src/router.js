import * as React from 'react';
import { ViewStyle, Image, StyleSheet, View, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';

import Viz1 from './screens/Viz1';
import Viz2 from './screens/Viz2';
import Viz3 from './screens/Viz3';
import Home from './screens/Home';
import CardDetails from './screens/CardDetails';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: (() => {
                return (
                    <View style={{flex: 1}}>
                        <Image
                            source={require('../assets/HeaderLogo.png')}
                            style={styles.headerImage}
                        />
                    </View>
                );
            }),
        }
    },
    Details: {
        screen: CardDetails,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.headerTitle}`,
        }),
    },
});

export const RootNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: <Icon name="ios-home" size={35} />,
        },
    },
    Viz1: {
        screen: Viz1,
        navigationOptions: {
            tabBarLabel: 'Viz1',
            tabBarIcon: <Icon name="ios-pulse" size={35} />
        },
    },
    Viz2: {
        screen: Viz2,
        navigationOptions: {
            tabBarLabel: 'Viz2',
            tabBarIcon: <Icon name="ios-pulse" size={35} />
        },
    },
    Viz3: {
        screen: Viz3,
        navigationOptions: {
            tabBarLabel: 'Viz3',
            tabBarIcon: <Icon name="ios-pulse" size={35} />
        },
    },
});

const styles = StyleSheet.create({
    headerImage: {
        flex: 1,
        resizeMode: 'contain'
    },
});
