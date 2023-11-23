import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const FilterTabs = ({tabs}) => {
  return (
    
    <View style={styles.filterTabs}>
    {tabs.map(tab => (
      <View key={tab.id} style={{alignItems: 'center'}}>
        <View style={[styles.iconView, {backgroundColor: tab.id === 1 ? '#000' : '#F5F5F5'}]}>
        <Ionicons name={tab.icon} size={24} color={tab.id === 1 ? '#fff' : '#000'} />
        </View>
        <Text>{tab.name}</Text>
      </View>
    ))}
    </View>
  )
}

export default FilterTabs

const styles = StyleSheet.create({
    filterTabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      },
      iconView: {
        backgroundColor: '#909090',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
      },
})