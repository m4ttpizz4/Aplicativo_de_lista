import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Keyboard, Alert } from 'react-native';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert('Ops!', 'Digite uma tarefa válida.');
      return;
    }

    if (editIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { text: task, completed: updatedTasks[editIndex].completed };
      setTasks(updatedTasks);
      setEditIndex(-1);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask('');
    Keyboard.dismiss();
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (editIndex === index) {
      setEditIndex(-1);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>{editIndex !== -1 ? '✔' : '+'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.taskItem, item.completed && styles.completedTask]}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(index)}>
              <Text style={styles.taskText}>
                {item.completed ? '✅' : '🔲'} {item.text}
              </Text>
            </TouchableOpacity>
            
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEditTask(index)}>
                <Text style={styles.editButton}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4682b4',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4682b4',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4682b4',
    borderRadius: 8,
    padding: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  completedTask: {
    opacity: 0.6,
    borderColor: '#90ee90',
  },
  taskText: {
    fontSize: 16,
    flexShrink: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  editButton: {
    fontSize: 18,
  },
  deleteButton: {
    fontSize: 18,
    color: '#ff4500',
  },
});
