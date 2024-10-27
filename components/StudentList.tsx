// components/StudentList.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StudentItem from './StudentItem';
import { Student } from '../interfaces/Student';

const initialStudents: Student[] = [
  { id: '1', name: 'Hector' },
  { id: '2', name: 'Rene' },
  { id: '3', name: 'Carlos' },
  { id: '4', name: 'Reniery' },
  { id: '5', name: 'Rosmery' },
  { id: '6', name: 'Lissa' },
  { id: '7', name: 'Cecilia' },
  { id: '8', name: 'Moshe' },
  { id: '9', name: 'Karla' },
  { id: '10', name: 'Elizabeth' },
];

const additionalStudents: Student[] = [
  { id: '11', name: 'Sarah' },
  { id: '12', name: 'Ruth' },
  { id: '13', name: 'Noaj' },
  { id: '14', name: 'Iahuda' },
  { id: '15', name: 'Efrayin' },
 
  
];

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents((prevStudents) => [...prevStudents, ...additionalStudents]);
    }, 5000);
// Limpia el temporizador al desmontar
    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentItem id={item.id} name={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    
  },
});

export default StudentList;