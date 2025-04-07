import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"


export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>

      <Tabs.Screen name="search" options={{ title: "", tabBarIcon: () => <Ionicons name='search-outline' size='24' />, }} />

      <Tabs.Screen name="bag" options={{ title: "", tabBarIcon: () => <Ionicons name='bag-outline' size='24' />, }} />

      <Tabs.Screen name="homeScreen" options={{ title: "", tabBarIcon: () => <Ionicons name='home-outline' size='24' />, }} />

      <Tabs.Screen name="profile" options={{ title: "", tabBarIcon: () => <Ionicons name='person-outline' size='24' />, }} />

    </Tabs>
  )
}