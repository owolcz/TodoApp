import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text={'task 1'} />
          <Task text={'task 2'} />
          <Task text={'task 3'} />
          <Task text={'task 4'} />
          <Task text={'task 5'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});