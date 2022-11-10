import React from 'react'
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const ItemProduct = (props) => (
    <View style={styles.cardView}>
       <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
         {props.nombre}
       </Text>
       <Text style={{}}>
       Precio:  ${props.precio}
       </Text>
       <Text style={{}} >
       Cantidad:  {props.cantidad} 
       </Text> 
       <View style={{flexDirection:'row-reverse'}}>
      <TouchableOpacity  style={{marginTop:-50} }
         onPress={props.getProduct.bind(this, props)} >
         <Ionicons name="md-create" size={30} color="#07C71F" />
      </TouchableOpacity>
          <Text style={{marginRight:-40, marginTop:-15, fontSize:10, color:'#07C71F'} }>Modificar</Text>
      <TouchableOpacity  
         style={{marginRight:20, marginTop:-50} }
         onPress={props.mypress.bind(this, props)} >
         <Ionicons name="md-trash" size={30} color="#FF1818" />
      </TouchableOpacity>
      <Text style={{marginRight:-35, marginTop:-15, fontSize:10, color:'#FF1818'} } >Eliminar</Text>
      </View>

   </View>
  );
  
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "#11468F",
        borderRadius: 20,
        marginVertical:5,
        padding: 35,
        shadowColor: "#000",
        height:135,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }

});

  export default ItemProduct;