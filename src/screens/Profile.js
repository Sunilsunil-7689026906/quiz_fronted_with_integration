import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'expo';
import { base_url } from './Base_url';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const [myname, setMyname] = useState(null);
    const [registration, setRegistration] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null)
    const [adress, setAdress] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [pincode, setPincode] = useState(null)




    async function getPermissions() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
            console.log('Permission denied!');
        }
    }

    useEffect(() => {
        getPermissions();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };


    const profileApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
            // alert(`${await AsyncStorage.getItem("token")}`)

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/getProfile`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    // alert(result.data.user[0].state)
                    if (result.success == true) {
                        setMyname(result.data.user[0].name)
                        setRegistration(result.data.user[0].id)
                        setMobile(result.data.user[0].mobile)
                        setEmail(result.data.user[0].email)
                        setAdress(result.data.user[0].street_address)
                        setCity(result.data.user[0].city)
                        setState(result.data.user[0].state)
                        setPincode(result.data.user[0].pincode)

                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {

        }
    }

    // console.log(myname,'myname');


    return (
        <SafeAreaView>

            <View style={{ height: responsiveHeight(8), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start' }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginLeft: '5%' }}>Edit Profile</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 20, height: responsiveHeight(90) }}>

                <TouchableOpacity style={{ marginTop: 20 }}  onPress={pickImage}>

                    {selectedImage ? <Image source={{ uri: selectedImage }} style={{ height: responsiveHeight(8), width: responsiveWidth(16), borderRadius: 100, alignSelf: 'center', marginTop: 3 }} /> :
                        <TouchableOpacity style={{ borderWidth: 2.5, borderColor: '#000', height: responsiveHeight(9), width: responsiveWidth(18), borderRadius: 100, alignSelf: 'center' }}
                           >
                            <Image source={require('../images/user.jpg')} style={{ height: responsiveHeight(8), width: responsiveWidth(16), borderRadius: 100, alignSelf: 'center', marginTop: 3 }} />

                            <View style={{ backgroundColor: '#6A5AE0', height: responsiveHeight(3), borderRadius: 100, justifyContent: 'center', width: responsiveWidth(6), zIndex: 1, marginTop: -20, marginLeft: 50 }}>
                                <Image source={require('../images/gallery.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), borderRadius: 100, tintColor: '#fff', alignSelf: 'center' }} />
                            </View>
                        </TouchableOpacity>
                    }

                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Full Name</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Your Name' editable={false} value={myname} onChangeText={(text) => { setMyname(text) }} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Registration No.</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Your Registration No.' value={registration} editable={false} onChangeText={(text) => { setRegistration(text) }} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Mobile No.</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Your Mobile No.' value={mobile} editable={false} onChangeText={(text) => { setMobile(text) }} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Email Id</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Your Email' value={email} editable={false} onChangeText={(text) => { setEmail(text) }} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Address</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Address' value={adress} onChangeText={(text) => { setAdress(text) }} style={{ color: "#000", marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>City</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='City' value={city} onChangeText={(text) => { setCity(text) }} style={{ marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>


                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>State</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='State' value={state} onChangeText={(text) => { setState(text) }} style={{ marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>

                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 30, marginHorizontal: 20 }}>Pincode</Text>

                <View style={{ borderWidth: 1, height: responsiveHeight(6), alignSelf: 'center', borderRadius: 10, borderColor: '#A0A0A0', width: responsiveWidth(90), marginTop: 5 }}>
                    <TextInput require placeholder='Pincode' value={pincode} onChangeText={(text) => { setPincode(text) }} style={{ marginLeft: 15, fontWeight: '400', fontSize: 14, marginTop: 8 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(48), marginTop: 20, backgroundColor: '#EDEAFB' }}
                    >
                        <Text style={{ color: '#6A5AE0', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Kyc Status : Pending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 5, width: responsiveWidth(38), marginTop: 20, backgroundColor: '#6A5AE0' }}
                        onPress={() => navigation.navigate('UploadKyc')}
                    >
                        <Text style={{ color: '#fff', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Update Kyc</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ height: responsiveHeight(6), justifyContent: 'center', alignSelf: 'center', borderRadius: 5, width: responsiveWidth(90), marginTop: 20, backgroundColor: '#6A5AE0' }}
                    onPress={() => { profileApi() }}>
                    <Text style={{ color: '#fff', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Update</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Profile