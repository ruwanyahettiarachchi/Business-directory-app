import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function LoginScreen() {
  return (
    <View>

      <View style ={{
        display: 'flex',
        alignItems:'center',
        marginTop:100
      }}>


      
        <Image source ={require('./../assets/images/login.png')}
        style={{
          width:220,
          height:450,
          borderRadius:20,
          borderWidth:6,
          borderColor:"#000"
        }}/>

      </View>

      <View style = {styles.subContainer}>
          <Text style ={{
            fontSize:28,
            fontFamily: 'outfit-bold',
            textAlign:'center'
            }}>Your Ultimate 
            <Text style ={{
              color:Colors.PRIMARY
            }}> Community Business Directory</Text> App</Text>

            <Text style ={{
              fontSize:15,
              fontFamily:'outfit',
              textAlign:'center',
              marginVertical:15,
              color: Colors.GRAY
            }}>Find your favourite business near you and post your own business to your community</Text>

            <TouchableOpacity>
              <Text>Let's Get Started</Text>
            </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20,
  }
})