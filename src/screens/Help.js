import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';

const Help = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: responsiveHeight(13), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 30 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginTop: 30, marginLeft: '5%' }}>Help</Text>
                </View>
            </View>

            <View style={{ height: responsiveHeight(25), width: responsiveWidth(90), backgroundColor: '#6A5AE0', marginTop: '10%', alignSelf: 'center', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontWeight: '500', marginHorizontal: 20, marginTop: '3%', fontSize: 18 }}>Help & Support</Text>
                <Text style={{ color: '#fff', fontWeight: '400', marginHorizontal: 20, marginTop: '1%', fontSize: 13 }}>If you like QuizApp, let your friend know!</Text>
                <Text style={{ color: '#fff', fontWeight: '400', marginHorizontal: 20, marginTop: '1%', fontSize: 13 }}>Quizapp helps you in managing expenses and</Text>
                <Text style={{ color: '#fff', fontWeight: '400', marginHorizontal: 20, fontSize: 13 }}>wealth to achieve future financial goals.</Text>
                <Text style={{ color: '#fff', fontWeight: '400', marginHorizontal: 20, fontSize: 13 }}>Refer your friend to join QUIzapp community</Text>

                <View style={{borderBottomWidth:0.5,borderColor:'#fff',marginTop:10}}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('../images/msg.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8), alignSelf: 'center' }} />
                        <Text style={{color:'#fff'}}>Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../images/watsapp.png')} style={{backgroundColor:'#fff', height: responsiveHeight(4), width: responsiveWidth(8), alignSelf: 'center' }} />
                        <Text style={{color:'#fff'}}>Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../images/fb.png')} style={{backgroundColor:'#fff', height: responsiveHeight(4), width: responsiveWidth(8), alignSelf: 'center' }} />
                        <Text style={{color:'#fff'}}>Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../images/google.png')} style={{ height: responsiveHeight(4.5), width: responsiveWidth(9), marginTop: -3, alignSelf: 'center' }} />
                        <Text style={{color:'#fff'}}>Message</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </View>
    )
}

export default Help