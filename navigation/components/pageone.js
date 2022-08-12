import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const pageone = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: '../assets/cat,jpg',
        }}
      />
    </View>
  );
}

export default pageone;