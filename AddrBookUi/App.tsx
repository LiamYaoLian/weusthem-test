import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {AddrCard} from "./addrcard";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Address Book</Text>*/}
      {/*<TextInput placeholder="First Name"/>*/}
      {/*<TextInput placeholder="Last Name"/>*/}
      {/*<TextInput placeholder="Email" />*/}
      {/*<TextInput placeholder="Phone number"/>*/}
      <AddrCard/>
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
