import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Button style={styles.button}
        title="Logo"
        onPress={() => navigation.navigate('Logo')}
      />
      
       <Button style={styles.button}
        title="Building"
        onPress={() => navigation.navigate('Building')}
      />
    </View>
  );
}

function Pageone({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logo</Text>
      <Image 
      style = {styles.logo2}
        source={require('./assets/1.png')}
      />
      <Button
             onPress={() => {setCount(count + 1)}} title= {'Love'+' '+count}
           />
    </View>
  );
}

function Pagetwo({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Building</Text>
     <Image 
      style = {styles.logo1}
        source={require('./assets/2.jpg')}
      />
      <Button
             onPress={() => {setCount(count + 1)}} title= {'Love'+' '+count}
           />
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Logo" component={Pageone} />
        <Stack.Screen name="Building" component={Pagetwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  header: {
    fontSize: 'large',
    fontWeight: 'bold',
  },

  button: {
    flex: 1,
   marginBottom: 20,
    padding: 30,
  },

  logo1: {
    width: '400px',
    height: '200px',
  },

  logo2: {
    width: '200px',
    height: '200px',
  }
});

export default App;
