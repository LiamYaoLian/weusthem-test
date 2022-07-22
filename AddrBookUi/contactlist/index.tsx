import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {AxiosError, AxiosResponse} from "axios";
const axios = require('axios');


const apiUrl = process.env.REACT_APP_API_URL;

const useContacts = async () => {
   return await axios.get(`${apiUrl}/contacts`)
    .then(function (response: AxiosResponse) {
      // handle success
      // console.log(response.data)
      return response.data
    })
    .catch(function (error: AxiosError) {
      // handle error
      // TODO
      console.log("error")
      console.log(error)
    })


}


export const ContactList = () => {

  const contacts = useContacts();

  if (contacts) {
    console.log(contacts)
    return (
      <View>
        {/*{contacts?.map((contact:any) => <Text>{contact.name}</Text>)}*/}
        <Text>contacts</Text>
      </View>
    );
  } else {
    return (
      <View><Text>loading</Text></View>
    )
  }
}
