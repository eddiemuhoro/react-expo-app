import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useMemo, useState } from 'react'
import CardSkeleton from '../loadingSkeleton/Skeleton';
import { Skeleton } from 'moti/skeleton'
import Item from './components/Item';
import FilterTabs from './components/FilterTabs';


const Furmiture = () => {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(3);
  const [loading , setLoading] = useState(true)
  const [filterData, setFilterData] = useState('')
  const [search, setSearch] = useState('')

  const productsPlaceHolder = useMemo(() => {
    return Array.from({length: 10}).map((_) => null)
  })

  //filter laptops, phones, tablets, and accessories
  const tabs = [
    {
      id:1,
      name: 'Popular',
      icon: 'ios-star'
    },

    {
      id:2,
      name: 'Laptops',
      icon: 'ios-laptop'
    },
    {
      id:3,
      name: 'Tablets',
      icon: 'ios-tablet-portrait'
    },
    {
      id:4,
      name: 'Accessories',
      icon: 'ios-headset'
    }
  ]

  useEffect(()=> {
    const fetchData = async () =>{
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      console.log(data.products);
      //delay the data for 2 seconds
      setTimeout(() => {
        setProducts(data.products)
        setLoading(false)
      }, 1000);
    }
    fetchData()
  },[])

  //cut title to 3 words
  
 const filterProducts = (text) => {
    if(text){
      const newData = products.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData)
    }else{
      setFilterData(products)
    }
  }

  
console.log(products)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>AprikaCo.</Text>
      <View style={styles.cartCounter}>
        <Ionicons name="ios-cart" size={24} color="black" />
        {cartCount > 0 && (
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartCountText}>{cartCount}</Text>
          </View>
        )}
      </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search..." onChangeText={(text) => filterProducts(text)} />
        <Ionicons name="ios-filter" size={24} color="black" style={styles.icon} />
      </View>
           
        <FlatList
          data={
            loading ? productsPlaceHolder : filterData ? filterData : products
          }
          renderItem={({ item: product }) => (
           <Item product={product} loading={loading}/>
          )}
          ListHeaderComponent={<FilterTabs tabs={tabs} />}
         numColumns={2}
        />

       

    </View>
  )
}

export default Furmiture

//style the top margin 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50,
      paddingRight: 10,
      paddingLeft: 10,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    header: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
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
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#F8F8F8',
      color:'#808080'
    },
    input: {
      flex: 1,
      borderWidth: 0,
      padding:10
    },
    icon: {
      marginLeft: 5,
    },
   
    productsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-between'
    },
  
  });