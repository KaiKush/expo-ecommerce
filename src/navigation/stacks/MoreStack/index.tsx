import { MoreScreen, ProductDetailScreen } from "@/pages";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{ title: "More Page" }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={{ title: "Details Page" }}
      />
    </Stack.Navigator>
  );
}

export default MoreStack;
