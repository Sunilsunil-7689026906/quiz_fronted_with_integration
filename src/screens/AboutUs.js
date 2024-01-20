import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';

const AboutUs = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={{ height: responsiveHeight(13), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 30 }}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginTop: 30, marginLeft: '5%' }}>About Us</Text>
        </View>
      </View>

      <Text style={{ marginHorizontal: 20 ,fontSize:13,fontWeight:'300' }}>
        {'quizapp is the largest online hotels booking engine in India. quizapp is also the number one ranked mobile app under the travel category. Touch quizapp core value differentiator is delivery of the fastest and the most trusted user experiences, be it in terms of quickest search and booking, fastest payments, settlement and refund processes. 70% of hotel bookings take place on quizapp mobile app.We are a team of young and dynamic people aiming to provide you the best in hospitality! We help you to find hotel rooms for few hours. Starting off with just five cities,'}

      </Text>

    </View>
  )
}

export default AboutUs