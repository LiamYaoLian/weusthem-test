import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {AddrCard} from "./addrcard";
import {ContactList} from "./contactlist";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<AddrCard/>*/}
      <ContactList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
