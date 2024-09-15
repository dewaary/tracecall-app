import axios from 'axios';
import {BASE_URL} from './config';
import {storage} from '../state/storage';
import {useUserStore} from '../state/userStore';

export const login = async (phoneNumber: any) => {
//   try {
    const response = await axios.post(`${BASE_URL}/login`, {phoneNumber});
    console.log("ISI RESPONSE 2", response)
    // const {accessToken, refreshToken, user} = response.data;
    // storage.set('accessToken', accessToken);
    // storage.set('refreshToken', refreshToken);
    // const {setUser} = useUserStore.getState();
    // setUser(user);
    // return response.data;
//   } catch (error) {
//     console.log('Login Error', error);
//     throw error;
//   }
};

export const signup = async (phoneNumber: any, email: string, name: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, {phoneNumber, email, name});
      const {accessToken, refreshToken, user} = response.data;
      storage.set('accessToken', accessToken);
      storage.set('refreshToken', refreshToken);
      const {setUser} = useUserStore.getState();
      setUser(user);
      return response.data;
    } catch (error) {
      console.log('SignUp Error', error);
      throw error;
    }
  };
