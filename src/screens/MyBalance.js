import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyBalance = ({navigation}) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ height: responsiveHeight(8), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start' }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginLeft: '5%' }}>My Balance</Text>
                </View>
            </View>

            <View style={{ height: responsiveHeight(20), width: responsiveWidth(90), backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 10, elevation: 10 }}>
                <TextInput placeholder='₹0' style={{ alignSelf: 'center', marginTop: 25, color: '#8A8A8A', fontSize: 22, fontWeight: '500' }} />

                <TouchableOpacity style={{ height: responsiveHeight(6), width: responsiveWidth(50), marginTop: '10%', backgroundColor: '#6A5AE0', borderRadius: 7, alignSelf: 'center', justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Home')} >
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', fontFamily: 'Jaldi-Bold' }}>Add Cash</Text>
                </TouchableOpacity>

            </View>

            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Amount Unutilised</Text>
                    <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                </View>
                <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹0</Text>

            </View>


            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Winnings</Text>
                    <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                </View>
                <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹0</Text>

            </View>


            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Discount Bonus</Text>
                    <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                </View>
                <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹0</Text>

            </View>

            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>




        </SafeAreaView>
    )
}

export default MyBalance