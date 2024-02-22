import { View, Text, StatusBar, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { base_url } from './Base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Sidebar = ({ navigation }) => {
    const [img, setimg] = useState("")
    const [names, setnames] = useState("")
    const [email, setemail] = useState("")

    const logoutApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/log-out`, requestOptions)
                .then(response => response.json())
                .then(async (result) => {
                    console.log(result)
                    await AsyncStorage.clear()
                    navigation.navigate('Login')

                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.log(error);
        }
    }
    const imgget = async () => {
        setimg(await AsyncStorage.getItem("pr"))
        setimg(await AsyncStorage.getItem("pr"))
        setnames(await AsyncStorage.getItem("names"))
        setemail(await AsyncStorage.getItem("email"))
    }
    useEffect(async () => {
        try {

            setimg(await AsyncStorage.getItem("pr"))
            setnames(await AsyncStorage.getItem("names"))
            setemail(await AsyncStorage.getItem("email"))
        } catch (error) {
            console.log(error);
        }

    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#6A5AE0' }}>
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />

            <TouchableOpacity onPress={imgget} >

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 40 }}>
                {
              img ?
                <Image
                  source={{ uri: img }}
                  style={{
                    height: responsiveHeight(6),
                    width: responsiveWidth(12),
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 3,
                  }}
                /> :
                <Image
                  source={require('../images/user.jpg')}
                  style={{
                    height: responsiveHeight(6),
                    width: responsiveWidth(12),
                    borderRadius: 100,
                    alignSelf: "center",
                    marginTop: 3,
                  }}
                />
            }
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start' }}>{names}</Text>
                        <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center' }}>{email}</Text>
                    </View>
                    {/* <Image source={require('../images/wcross.png')} style={{ height: responsiveHeight(2), width: responsiveWidth(5), borderRadius: 100, marginTop: 8 }} /> */}

                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 40, marginHorizontal: 20 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image source={require('../images/usericon.png')} style={{ height: responsiveHeight(2.2), tintColor: '#fff', width: responsiveWidth(4), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('MyBalance')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}>
                    <Image source={require('../images/blnce.png')} style={{ height: responsiveHeight(2.5), tintColor: '#fff', width: responsiveWidth(4.9), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>My Balance</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('MyTransaction')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}>
                    <Image source={require('../images/trans.png')} style={{ height: responsiveHeight(2.4), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>My Transaction</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/bgbell.png')} style={{ height: responsiveHeight(2.4), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ReferEarn')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/troffii.png')} style={{ height: responsiveHeight(2.4), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>Refer & Earn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Faq')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/qf.png')} style={{ height: responsiveHeight(2.5), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>Faq</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Introduction')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/play.png')} style={{ height: responsiveHeight(2.5), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>How to Play</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('More')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/more.png')} style={{ height: responsiveHeight(2.5), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>More</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Help')} style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                >
                    <Image source={require('../images/help.png')} style={{ height: responsiveHeight(2.3), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>Help</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 30 }}
                    onPress={() => { logoutApi() }}>
                    <Image source={require('../images/logout.png')} style={{ height: responsiveHeight(2.3), tintColor: '#fff', width: responsiveWidth(4.8), alignSelf: 'center', borderRadius: 100 }} />

                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start', marginLeft: 10 }}>Logout</Text>
                </TouchableOpacity>




            </View>

        </SafeAreaView>
    )
}

export default Sidebar