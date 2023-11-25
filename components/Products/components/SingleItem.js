import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { Link, Stack } from 'expo-router'
import commons from '../commonStyles'
import axios from 'axios'
const SingleItem = ({params}) => {
  const [product, setProduct] = useState({})

  useEffect(()=>{
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
          title: params,
          headerShown: true
        }}
      />


     <View style={styles.productDetails}>
     <View style={styles.descriptionImage}>
            <Image source={{uri: product.thumbnail}}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </View>
          <Text style={commons.h2}>{product.title}</Text>

         <View style={styles.priceSection}>
        
                <Text style={commons.h2}>$50</Text>
                <View style={styles.quantitySection}>
                   <Pressable style={styles.quatityButtons}>
                      <Text style={commons.h2}>+</Text>
                    </Pressable>
                       <Text >01</Text>
                    <Pressable style={styles.quatityButtons}>
                    <Text style={commons.h2}>-</Text>
                    </Pressable>
                </View>
         </View>

         <View style={styles.ratingSection}>
          <View style={styles.reviewRate}>
                <IonIcons name="star" size={25} color="orange"/>
                <Text style={commons.h2}>4.5</Text>
          </View>
             <Pressable>
             <Text style={commons.h3}>(200 Reviews)</Text>
              </Pressable>  
         </View>

     </View>

     <Text style={commons.h3}>Minimal Sofa is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. </Text>
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
    }
})