import React from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
<ActivityIndicator size="large" />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
