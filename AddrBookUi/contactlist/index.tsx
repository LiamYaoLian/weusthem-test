import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {AxiosError, AxiosResponse} from "axios";
const axios = require('axios');


const apiUrl = process.env.REACT_APP_API_URL;

axios.get(`${apiUrl}/contacts`)
  .then(function (response: AxiosResponse) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error: AxiosError) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


export const ContactList = () => {
  return (
    <View></View>
  )
}
