import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import React, { FC, useEffect } from 'react';
import {Colors} from '../utils/Constants';
import { resetAndNavigate } from '../utils/NavigationUtils';

const SplashScreen: FC = () => {

  const tokenCheck = async () => {
    resetAndNavigate('AuthScreen')
  }

  useEffect(() => {
    setTimeout(() => {
      tokenCheck()
    }, 1000)
  }, [])

  return (
    <View className="bg-white justify-center items-center flex-1">
      <Image
        source={require('../assets/logo.png')}
        className="h-40 w-40 rounded-full"
      />
      <View className='absolute bottom-20'>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
