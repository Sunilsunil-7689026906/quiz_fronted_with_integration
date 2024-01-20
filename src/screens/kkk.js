import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const kkk = () => {
    const [count, setcount] = useState(1)
  return (
    <View style={{marginTop:50}}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}} >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </View>
      {
        count==1?<View style={{backgroundColor:"red",height:"100%"}} >
            <Text>Home</Text>
        </View>:null
      }
      {
        count==2?<View style={{backgroundColor:"red",height:"100%"}} >
            <Text>Home</Text>
        </View>:null
      }
      {
        count==1?<View style={{backgroundColor:"red",height:"100%"}} >
            <Text>Home</Text>
        </View>:null
      }
    </View>
  )
}

export default kkk

const styles = StyleSheet.create({})