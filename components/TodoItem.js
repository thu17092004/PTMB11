import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.todoItem}>
      <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
        {text}
      </Text>
      <Button title="Toggle" onPress={() => dispatch(toggleTodo(id))} />
      <Button title="Delete" onPress={() => dispatch(deleteTodo(id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f9c2ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoItem;
