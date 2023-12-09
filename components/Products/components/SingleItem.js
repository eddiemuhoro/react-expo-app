import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import IonIcons from 'react-native-vector-icons/Ionicons'
import { Link, Stack } from 'expo-router'
import commons from '../commonStyles'
import axios from 'axios'
import Cart from './Cart';
const SingleItem = ({ params }) => {
  const [product, setProduct] = useState({})
  const [currenImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${params}`)
      setProduct(response.data)
    }



    fetchData();
  }, [params])

  console.log(product);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerRight: () => (
            <Cart/>
          )
        }}
      />
   

      <View style={styles.productDetails}>
        <View style={styles.descriptionImage}>
          { product && product.images &&
            <Image source={{ uri: product.images[currenImage] }}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          }
          
        </View>
        <View style={styles.otherImages}>
        {
  product && product.images && product.images.map((image, index) => (
    <TouchableOpacity key={index} onPress={() => setCurrentImage(index)} style={{ width: '13%',  marginHorizontal: 10 }}>
      <Image source={{uri : image}} style={{ width: '100%', height: '80%', resizeMode: 'contain',}} />
    </TouchableOpacity>
  ))
}

</View>



        <Text style={commons.h2}>{product.title}</Text>

        <View style={styles.priceSection}>

          <Text style={commons.h2}>$50</Text>

          <View style={styles.quantitySection}>
            <Pressable style={styles.quatityButtons}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </Pressable>
            <Text>01</Text>
            <Pressable style={styles.quatityButtons}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </Pressable>
          </View>

        </View>

        <View style={styles.ratingSection}>
          <View style={styles.reviewRate}>
            <IonIcons name="star" size={25} color="orange" />
            <Text style={commons.h2}>4.5</Text>
          </View>
          <Pressable>
            <Text style={commons.h3}>(200 Reviews)</Text>
          </Pressable>
        </View>

      </View>

      <Text style={commons.h3}>{product.description} </Text>

      <View style={styles.cartSection}>
        <IonIcons name="ios-bookmark" size={24} color="black" />
        <Pressable style={[commons.pressable, { width: "70%" }]}>
          <Text style={[commons.h2, commons.pressableText]}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SingleItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  quantitySection: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center'
  },
  ratingSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  reviewRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  textRateCount: {
    color: 'gray'
  },
  quatityButtons: {
    marginHorizontal: 5,
  },
  descriptionImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    marginRight: 10,
    marginVertical: 10,
  },
  otherImages: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    width: 'auto',
    },
  cartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})