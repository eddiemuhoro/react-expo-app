import { StyleSheet, Text, View , TextInput, Button, TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const signIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin=()=> {
        router.replace("/products")
    }
  return (
    <View style={styles.container}>
    <View style={styles.half1}></View>
    <Text style={styles.titleText}>Sign up</Text>
   <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
   />
   <TextInput
       style={styles.input}
       placeholder="Password"
       secureTextEntry
       value={password}
       onChangeText={setPassword}
   />

  
        <Pressable style={styles.button} onPress={handleSignin}>
            <Text>Sign up</Text>
        </Pressable>


   <Text style={styles.accountText}>Already have an account? Sign in </Text>
</View>
  )
}

export default signIn


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'orange',
        width: '100%',
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: '30%',

    },
    accountText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        top: '70%',
    },
    input: {
        width: '80%',
        height: 40,
        width: 300,
        borderRadius: 10,
        margin: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 10,
    },

      half1: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '60%',
        bottom: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
      },
});

