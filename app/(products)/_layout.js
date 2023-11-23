import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      initialTabName="products"
      style={{ backgroundColor: '#000' }}
    >
        <Tabs.Screen name="products" options={{
          tabBarLabelStyle: { color: 'black' },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? 'ios-home' : 'ios-home-outline'} 
            size={24} 
            color="black" 
          />
          ) 
          }} />
  <Tabs.Screen 
    name="history" 
    options={{
      tabBarLabelStyle: { color: 'black' },
      tabBarIcon: ({ focused }) => (
        <Ionicons 
          name={focused ? 'ios-search' : 'ios-search-outline'} 
          size={24} 
          color="black" 
        />
      ),
    }} 
  />
  <Tabs.Screen 
    name="notifications" 
    options={{
      tabBarLabelStyle: { color: 'black' },
      tabBarIcon: ({ focused }) => (
        <Ionicons 
          name={focused ? 'ios-notifications' : 'ios-notifications-outline'} 
          size={24} 
          color="black" 
        />
      ),
    }} 
  />
    </Tabs>
    
  )
}
