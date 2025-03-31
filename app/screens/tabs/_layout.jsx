import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>

      <Tabs.Screen name="search" options={{ title: "", tabBarIcon: () => <Ionicons name='create-outline' size='24' />, }} />

      <Tabs.Screen name="bag" options={{ title: "", tabBarIcon: () => <Ionicons name='search-outline' size='24' />, }} />

      <Tabs.Screen name="home" options={{ title: "", tabBarIcon: () => <Ionicons name='home-outline' size='24' />, }} />

      <Tabs.Screen name="profile" options={{ title: "", tabBarIcon: () => <Ionicons name='person-outline' size='24' />, }} />

    </Tabs>
  )
}