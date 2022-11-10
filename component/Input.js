import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

 const Input =(props) =>
       <TextInput  
       
            placeholder={props.texto} 
            style={styles.input}
            onChangeText={props.campo}
            value={props.valor}>
       </TextInput>
                               
const styles = StyleSheet.create({
    input:{
        borderRadius:10,
        width:275,
        height:40,
        marginVertical:5,
        backgroundColor:'white'
        
     },

});

export default Input;