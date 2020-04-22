import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Events from "../Events";
import Detail from "../Detail";

export default function Home() {
  return (
    <AppStack.Navigator
      initialRouteName="Events"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Events" component={Events} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  );
}
