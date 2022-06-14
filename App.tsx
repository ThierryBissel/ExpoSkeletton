import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const store = configureStore()

import { NavigationHandler } from './Navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationHandler />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
