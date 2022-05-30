import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./screens/Home";
import CategoryDetail from "./screens/CategoryDetail";
import Store from "./screens/Store";
import Food from "./screens/Food";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetail}
        />
        <Stack.Screen
          name="Store"
          component={Store}
        />
        <Stack.Screen
          name="Food"
          component={Food}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
