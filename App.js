import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./screens/Home";
import CategoryDetail from "./screens/CategoryDetail";
import Store from "./screens/Store";
import Food from "./screens/Food";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Order from "./screens/Order";
import Register from "./screens/Register";
import Information from './screens/Information';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Cart"
                onPress={() => navigation.navigate("Cart")}
              />
            ),
          })}
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
        <Stack.Screen
          name="Order"
          component={Order}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Information"
          component={Information}
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
