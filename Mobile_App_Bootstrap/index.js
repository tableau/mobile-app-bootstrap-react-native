import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
AppRegistry.registerComponent('Mobile_App_Bootstrap', () => App);

YellowBox.ignoreWarnings(['Warning: isMounted', 'Module RCTImageLoader']);
