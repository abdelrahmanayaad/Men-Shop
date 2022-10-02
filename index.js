import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configAxios} from './src/utils/HelperFunction';

{
  configAxios();
}
AppRegistry.registerComponent(appName, () => App);
