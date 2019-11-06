import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Viz1 from './screens/Viz1';
import Viz2 from './screens/Viz2';
import Viz3 from './screens/Viz3';
import Home from './screens/Home';
import CardDetails from './screens/CardDetails';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: (() => {
                return (
                    <View style={styles.headerView}>
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
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-home' color={tintColor} size={30} style={styles.icon}/>
            ),
        },
    },
    Viz1: {
        screen: Viz1,
        navigationOptions: {
            tabBarLabel: 'Viz1',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-pulse' color={tintColor} size={30} style={styles.icon}/>
            ),
        },
    },
    Viz2: {
        screen: Viz2,
        navigationOptions: {
            tabBarLabel: 'Viz2',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-pulse' color={tintColor} size={30} style={styles.icon}/>
            ),
        },
    },
    Viz3: {
        screen: Viz3,
        navigationOptions: {
            tabBarLabel: 'Viz3',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-pulse' color={tintColor} size={30} style={styles.icon}/>
            ),
        },
    },
});

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        flexDirection: 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        height: 60
    },
    headerImage: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: undefined
    },
});
