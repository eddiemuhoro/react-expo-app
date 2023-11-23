import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Payment from '../../components/Stripe/Payment'

const payment = () => {
  return (
    <View>
      <Text>payment using stripe</Text>
      {/* <Payment /> */}
    </View>
  )
}

export default payment

const styles = StyleSheet.create({})