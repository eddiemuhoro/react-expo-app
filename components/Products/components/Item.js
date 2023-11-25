import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useMemo, useState } from 'react'
import CardSkeleton from '../../loadingSkeleton/Skeleton';
import { Skeleton } from 'moti/skeleton'
import { Link } from 'expo-router';

const Item = ({product, loading}) => {
    const commonSkeletonProps = {
        colorMode: 'light',
        transition: {
          type: 'timing',
          duration: 2000,
          loop: true,
        },
        backgroundColor: '#F5F5F5',
    
        }
    
        const cutTitle = (title) => {
            const words = title.split(' ')
            const newTitle = words.slice(0,3).join(' ')
            return newTitle
          }
        
    
  return (
    <View style={styles.productItem}>
          <Skeleton.Group show={loading}>
              <Skeleton height={100} width={'100%'} {...commonSkeletonProps}>
                 
                      <View style={styles.imageView}>
                      {product &&   <Image source={{ uri: product.thumbnail }} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />}
                      </View>
                  
              </Skeleton>
              {!product && <View style={{ height: 5 }} />}
              <Skeleton height={25} width={'100%'} {...commonSkeletonProps}>
                  {product && <Text style={{ fontWeight: 'bold' }}>{(product.title)}</Text>}
              </Skeleton>
              {!product && <View style={{ height: 5 }} />}
              <Skeleton width={'100%'} height={25} {...commonSkeletonProps}>
                  {product &&
                      <View style={styles.bottomCard}>
                          <Text style={styles.price}>${product.price}</Text>
                          <Link 
                          href={{
                            pathname:`products/${product.id}`,
                            params: {product}
                          }}
                          style={styles.arrowNextView} 
                          asChild
                          >
                              <Ionicons name="ios-arrow-forward" size={20} color="#202727" />
                          </Link>
                      </View>
                  }
              </Skeleton>
          </Skeleton.Group>
  </View>
  )
}

export default Item

const styles = StyleSheet.create({
    productItem: {
        width: '48%',
        backgroundColor: '#F5F5F5',
        marginBottom: 10,
        marginHorizontal: 5,
        padding: 10,
        //add boxshadow
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: .1,
        shadowRadius: 3.84,
        elevation: 5,
      },
      imageView: {
        height: 100,
        marginBottom: 10,
        padding: 10
      },
      bottomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
      },
      price: {
        fontWeight: 'bold',
        color: '#4E5A37'
      },
      arrowNextView: {
        padding: 3,
        borderRadius: 10,
        borderColor: '#37495733',
        borderWidth: 1
      }
})