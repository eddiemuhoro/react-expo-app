import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'
import CourseRegistration from '../../components/Students/CourseReg'

const home = () => {


  return (
    <View>
      
     <CourseRegistration />
    </View>
  )
}

export default home

const styles = StyleSheet.create({})