// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  h4: {
    fontSize: 10,
    margin: 5
  },
  
  h3: {
    fontSize: 15,
    margin: 10
  },

  h2: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  pressable: {
    backgroundColor: '#242424',
    padding: 5,
    borderRadius: 10,
    margin: 10
  },
  pressableText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});