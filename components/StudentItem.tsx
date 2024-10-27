// components/StudentItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Student } from '../interfaces/Student';

interface StudentItemProps {
  id: Student['id'];
  name: Student['name'];
}

const StudentItem: React.FC<StudentItemProps> = ({ id, name }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{`${id}. ${name}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    paddingtop: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: 'blue',
    borderRadius: 6,
    marginBottom: 15, 
    width: '100%', 
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default StudentItem;