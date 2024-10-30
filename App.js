import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoScreen from './screens/TodoScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;
