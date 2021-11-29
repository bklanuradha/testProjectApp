/**
 * @format
 */

 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import testProject from './src/screens/welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => testProject);
