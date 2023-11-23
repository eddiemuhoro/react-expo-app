import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'

const SingleItem = () => {
  return (
    <View style={styles.container}>
     <View>
        {/* <Image source={require('../../../assets/images/1.jpg')} /> */}
     </View>

     <View style={styles.productDetails}>
         <Text>Product Name</Text>
         <View style={styles.priceSection}>
                <Text>$50</Text>
                <View style={styles.quantitySection}>
                    <Text>+</Text>
                    <Text>01</Text>
                    <Text>-</Text>
                </View>
         </View>

         <View style={styles.ratingSection}>
                <IonIcons name="star" size={25} />
                <Text>4.5</Text>
                <Text style={styles.textRateCount}>(200)</Text>
         </View>

     </View>

     <Text>Product description</Text>
    </View>
  )
}

export default SingleItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5
    },
    priceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantitySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ratingSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textRateCount: {
        color: 'gray'
    }
})