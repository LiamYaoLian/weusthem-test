import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {AxiosError, AxiosResponse} from "axios";
const axios = require('axios');


const apiUrl = process.env.REACT_APP_API_URL;

const testUrl = `${apiUrl}/contacts/1`

// TODO
axios.get(`${apiUrl}/contacts/1`)
  .then(function (response: AxiosResponse) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error: AxiosError) {
    // handle error
    console.log(apiUrl);
    console.log(testUrl);
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
