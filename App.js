import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,FlatList ,View, Text,TouchableOpacity} from 'react-native';
import axios from 'axios';

import ItemUser from './component/ItemProduct'
import Input from './component/Input'

export default function App() {
  
  const [listaProducts, setListaProducts] = useState([])
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [id_prod, setId_prod] = useState('')
  const [flag, setFlag] = useState(false) 
  
  useEffect(() => {
      getProducts()
    }, [])
  
  const getProducts = async() => {
      const respuesta = await axios.get('http://192.168.0.8/productos/')
      setListaProducts(respuesta.data)
   }
   const addProduct = async() => {
    const obj = {nombre, precio, cantidad}
    const respuesta = await axios.post('http://192.168.0.8/productos/', obj)
    alert(respuesta.data.msg)
    getProducts()
    setNombre('')
    setPrecio('')
    setCantidad('')
  }
  const deleteProduct = async (props) => {
    const id_prod = props.id_prod
    const respuesta = await axios.delete('http://192.168.0.8/productos/?id_prod='+id_prod)
    alert(respuesta.data.msg)
    getProducts()
  }
  const getProduct = async(props) => {
    const id_prod = props.id_prod
    const respuesta = await axios.get('http://192.168.0.8/productos/?id_prod='+id_prod)
    setId_prod(respuesta.data.id_prod)
    setNombre(respuesta.data.nombre)
    setPrecio(respuesta.data.precio)
    setCantidad(respuesta.data.cantidad)
    setFlag(!flag)
  } 
  const updateProduct = async() => {
    const obj = {id_prod, nombre, precio, cantidad} 
    const respuesta = await axios.put('http://192.168.0.8/productos/',obj)
    alert(respuesta.data.msg)
    setId_prod('') 
    setNombre('')
    setPrecio('')
    setCantidad('')
    setFlag(false)
    getProducts()
  } 
  const addOrUpdate = () => {
    {flag? updateProduct() : addProduct() }
   }
   
    const renderItem = ({ item }) => (
       <ItemUser id_prod={item.id_prod} getProduct={getProduct}
       nombre={item.nombre} precio={item.precio} cantidad={item.cantidad} mypress={deleteProduct}
       /> )

       return (
        
        <View style={styles.container}>
           <View style={{marginTop:50}} >
              <Text style={{fontWeight:'bold',color:'#051367', fontSize:20, fontFamily:'' }}>
                  CRUD REACT NATIVE PHP API MYSQL
               </Text>
               <Text style={styles.texto2} >
                  Registro de Productos
               </Text>
           </View> 
           <View style={styles.form}  >
           <Input texto={"Digite nombre del producto:"} valor={nombre} campo={e=>setNombre(e)}/>
           <Input texto={"Precio:"} valor={precio} campo={e=>setPrecio(e)} />
           <Input texto={"Cantidad:"} valor={cantidad} campo={e=>setCantidad(e)}/>
           <TouchableOpacity 
                 style={{backgroundColor:'#FEF5AC', padding:15,borderRadius:12, marginTop:30}}
                 onPress={addOrUpdate}  >
               <Text style={{color:'#25316D', textAlign:'center', fontWeight:'bold'}}>{flag? "ACTUALIZAR":"INSERTAR"}</Text>
           </TouchableOpacity>
           </View>
          <FlatList
             style={{marginTop:15, width:400, height:100}}
             data={listaProducts}
             renderItem={renderItem}
             keyExtractor={item =>item.id_prod} 
           />
           <StatusBar style="auto" /> 
        </View>
       );
      
}
     
     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: '#86C6F4',
         alignItems: 'center',
         justifyContent: 'center',
       },
       texto2: {
        fontWeight:'bold',
        color:'#051367', 
        fontSize:15,
        marginTop:20,
        textAlign: 'center'
       },
       form: {
        marginTop:25,
      
       },
     });
     
