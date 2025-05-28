import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    // <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    // </AuthProvider>
  );
}
