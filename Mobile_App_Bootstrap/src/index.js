import * as React from 'react';
import { AppRegistry } from 'react-native';
import { RootNavigator } from './router'

export default class App extends React.Component<> {
    render() {
        return (
            <RootNavigator />
        );
    }
}

AppRegistry.registerComponent('Mobile_App_Bootstrap', () => App);