import { AppRegistry, LogBox } from 'react-native';
import App from './App';
AppRegistry.registerComponent('Mobile_App_Bootstrap', () => App);

LogBox.ignoreLogs(['Warning: isMounted', 'Module RCTImageLoader']);
