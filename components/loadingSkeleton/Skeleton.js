
import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet, Text } from 'react-native'; 
  
const CardSkeleton = () => { 
    return ( 
        <View style={styles.container}> 
            {/* Placeholder card content */} 
            <View style={styles.imageHolder} /> 
            <View style={styles.placeholder} /> 
            <View style={styles.placeholder} /> 
        </View> 
    ); 
}; 
  
export default CardSkeleton;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#F6F6F6', 
        borderRadius: 13, 
        padding: 16, 
        marginBottom: 16, 
        marginTop: 50, 
    },
    imageHolder: {
        width: '100%',
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 10,
    },
    placeholder: {
        width: '100%',
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
    },
})