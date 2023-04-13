// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import "react-native-gesture-handler";

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeFilled,
  HeartOutlined,
  SearchOutlined,
  ScheduleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import { ShoppingListScreen, SearchScreen, MyOrderScreen } from "@/pages";
import { HomeStack, MoreStack } from "../stacks";

const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeFilled style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{
          tabBarLabel: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <HeartOutlined style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <SearchOutlined style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="MyOrder"
        component={MyOrderScreen}
        options={{
          tabBarLabel: "My Order",
          tabBarIcon: ({ color, size }) => (
            <ScheduleOutlined style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MoreOutlined style={{ color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;
