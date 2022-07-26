import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';
import FormBuilder from 'react-native-paper-form-builder/dist/FormBuilder';
import {AxiosError, AxiosResponse} from "axios";
const axios = require('axios');

const apiUrl = process.env.REACT_APP_API_URL;

export const AddrCard = () => {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',

    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Contact</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'text',
              name: 'firstName',

              rules: {
                required: {
                  value: true,
                  message: 'required',
                }
              },
              textInputProps: {
                label: 'First Name',
              }
            },
            {
              type: 'text',
              name: 'lastName',

              rules: {
                required: {
                  value: true,
                  message: 'required',
                }
              },
              textInputProps: {
                label: 'Last Name',
              }
            },
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
              textInputProps: {
                label: 'Email',
              },
            },
            {
              type: 'text',
              name: 'phoneNumber',
              rules: {
                required: {
                  value: true,
                  message: 'required',
                },
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Phone number is invalid',
                },
              },
              textInputProps: {
                label: 'Phone Number',
              }
            },
          ]}
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit((data: any) => {
            console.log('form data', data);
            axios.post(`${apiUrl}/contacts/create`, {
              ...data
            })
              .then(function (response: AxiosResponse) {
                console.log(response.data);
              })
              .catch(function (error: AxiosError) {
                console.log(error);
              });
          })}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

