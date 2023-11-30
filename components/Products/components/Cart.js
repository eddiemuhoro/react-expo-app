import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const Cart = () => {
  const [cartCount, setCartCount] = useState(3);

  return (
    <View style={styles.cartCounter}>
    <Link href={'products/cart'}>
    <Ionicons name="ios-cart" size={24} color="black" />
    </Link>
    {cartCount > 0 && (
      <View style={styles.cartCountContainer}>
        <Text style={styles.cartCountText}>{cartCount}</Text>
      </View>
    )}
  </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartCounter: {
        position: 'relative'
      },
      cartCountContainer: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: 'orange',
        borderRadius: 50,
        padding: 3,
      },
      cartCountText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
      },
})