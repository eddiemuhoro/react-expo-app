import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cart"
        options={{
          title: 'Cart',
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack>
  )
};
export default Layout;
