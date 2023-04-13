import { HomeScreen, ProductDetailScreen } from "@/pages";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={{ title: "Product Detail" }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
