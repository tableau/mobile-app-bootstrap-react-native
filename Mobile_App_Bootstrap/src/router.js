import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Viz1 from './screens/Viz1';
import Viz2 from './screens/Viz2';
import Viz3 from './screens/Viz3';
import Home from './screens/Home';
import CardDetails from './screens/CardDetails';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerTitle: () => (
                            <Image
                                source={require('../assets/HeaderLogo.png')}
                                style={styles.headerImage}
                            />
                    ),
            }}
        />
      <HomeStack.Screen 
        name="Details" 
        component={CardDetails} 
        options={({ route }) => ({ title: route.params.headerTitle })}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function navContainer() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarIcon: ({ color }) => ( <Icon name='home-outline' color={color} size={30} style={styles.icon}/> )}} />
                    <Tab.Screen name="Viz1" component={Viz1} options={{tabBarIcon: ({ color }) => ( <Icon name='pulse-outline' color={color} size={30} style={styles.icon}/> )}}/>
                    <Tab.Screen name="Viz2" component={Viz2} options={{tabBarIcon: ({ color }) => ( <Icon name='pulse-outline' color={color} size={30} style={styles.icon}/> )}}/>
                    <Tab.Screen name="Viz3" component={Viz3} options={{tabBarIcon: ({ color }) => ( <Icon name='pulse-outline' color={color} size={30} style={styles.icon}/> )}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        height: 60
    },
    headerImage: {
        flex: 1,
        resizeMode: 'contain',
        height: 60,
    },
});
