import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { Explore } from "./src/screens/Explore";
import Home from "./src/screens/Home";
import ProductDetails from "./src/screens/ProductDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="explore" component={Explore} options={{ headerShown: false }} />
          <Stack.Screen name="/product/view" component={ProductDetails} options={{ headerShown: false }} />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
