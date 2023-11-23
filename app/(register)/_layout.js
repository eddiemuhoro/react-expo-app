import { Stack, Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="signIn" options={{headerShown: false}} />
    </Stack>
  )
}
