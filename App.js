import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';
import AddButton from './components/AddButton';
import { KeyboardAvoidingView } from 'react-native-web';


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
      <View style={styles.listWrapper}>
        <Text style={styles.listTitle}>Lists</Text>
        <View style={styles.items}>
          {/* This is where the lists will go */}
          <Task text={'task 5'} />
        </View>
      </View>

      <AddButton />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  listWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 35,
    fontStyle: 'normal',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 35,
    left: 20,
    width: '100%',
    flexDirection: 'row',

    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  items: {},
});