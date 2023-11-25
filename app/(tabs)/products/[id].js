import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import SingleItem from '../../../components/Products/components/SingleItem';

const productDetails = () => {
  const { id } = useLocalSearchParams();
  return (
   <SingleItem params={id}/>
  )
}

export default productDetails

