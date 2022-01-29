/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Profile from './src/screens/Profile';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Profile);
