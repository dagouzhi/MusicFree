/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {

    }
  }, [])
  return <App  />
}


AppRegistry.registerComponent(appName, () => Root);
