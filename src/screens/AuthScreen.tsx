import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomeSaveAreaView from '../components/global/CustomeSafeAreaView';
import CustomeInput from '../components/ui/CustomeInput';
import CustomeButtom from '../components/ui/CustomeButtom';

const AuthScreen = () => {
  const [phone, setPhone] = useState('');
  const [loading, isLoading] = useState(false);

  const handleAuth = async () => {};

  return (
    <KeyboardAvoidingView
      className="flex-1"
      keyboardVerticalOffset={10}
      behavior="padding">
      <CustomeSaveAreaView classStyle="py-2 px-2">
        <Image
          source={require('../assets/logo_text.png')}
          className="h-6 w-32 resize self-center"
        />
        <Text className="mt-8 font-semibold text-lg text-text">
          Enter Your Phone Number
        </Text>
        <Text className="mt-8  mt-2 text-md text-text">
          Truecaller wil send you a one-time password viw SMS to verify your
          Phone Number
        </Text>
        <CustomeInput
          label="Phone Number"
          value={phone}
          maxLength={10}
          keyboardType="number-pad"
          placeholder="Your phone number"
          onChangeText={setPhone}
        />

        <View className="bottom-1 absolute w-full self-center">
          <CustomeButtom
            title="Continue"
            onPress={handleAuth}
            loading={loading}
          />
        </View>
      </CustomeSaveAreaView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
