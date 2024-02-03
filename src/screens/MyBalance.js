import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base_url } from "./Base_url"
import { useToast } from "react-native-toast-notifications";
// import RazorpayCheckout from 'react-native-razorpay';
import RazorpayCheckout from 'react-native-razorpay';
const MyBalance = ({ navigation }) => {
    const [balance, setbalance] = useState()
    const [data, setdata] = useState({})
    const toast = useToast();

    const getBalance = async () => {
        console.log(await AsyncStorage.getItem('token'));
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/getWallet`, requestOptions)
                .then(response => response.json())
                .then(result => {

                    if (result.success == true) {
                        setdata(result.data.wallet)
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);
        }
    }
    const addBalance = async () => {

        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "balance": balance
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${base_url}/addWallet`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result, "mmm");

                    if (result.success == true) {

                        var options = {
                            description: 'Credits towards consultation',
                            image: 'https://i.imgur.com/3g7nmJC.jpg',
                            currency: 'INR',
                            key: 'rzp_test_HJoTELgiW51anQ',
                            amount: result.data.amount,
                            name: 'PdoWin',
                            order_id: result.data.order.id,//Replace this with an order_id created using Orders API.
                            prefill: {
                                email: result.data.email,
                                contact: result.data.mobile,
                                name: result.data.q
                            },
                            theme: { color: '#53a20e' }
                        }
                        RazorpayCheckout.open(options).then(async (data) => {
                            // handle success
                            console.log(data, "kkk");
                            var myHeaders = new Headers();
                            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
                            myHeaders.append("Content-Type", "application/json");

                            var raw = JSON.stringify({ data: data });

                            var requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow'
                            };

                            fetch(`${base_url}/addWallet-hook`, requestOptions)
                                .then(response => response.json())
                                .then(result => console.log(result))
                                .catch(error => console.log('error', error));
                            alert(`Success: ${data.razorpay_payment_id}`);
                        }).catch((error) => {
                            // handle failure
                            console.log(error)
                            alert(`Error: ${error.code} | ${error.description}`);
                        });


                        setbalance("")
                        getBalance()
                        console.log(result);
                        // toast.show(result?.message);
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        getBalance()
    }, [])
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
                <TextInput placeholder='₹0' value={balance} onChangeText={(e) => { setbalance(e) }} style={{ alignSelf: 'center', marginTop: 25, color: '#8A8A8A', fontSize: 22, fontWeight: '500' }} inputMode={"numeric"} />

                <TouchableOpacity style={{ height: responsiveHeight(6), width: responsiveWidth(50), marginTop: '10%', backgroundColor: '#6A5AE0', borderRadius: 7, alignSelf: 'center', justifyContent: 'center' }}
                    onPress={() => { addBalance() }} >
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', fontFamily: 'Jaldi-Bold' }}>Add Cash</Text>
                </TouchableOpacity>

            </View>

            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Amount Unutilised</Text>
                    <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                </View>
                <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹ {data?.balance}</Text>

            </View>


            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>


            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Winnings</Text>
                        <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                    </View>
                    <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹ {data?.winBalance}</Text>
                </View>

                <TouchableOpacity style={{ height: responsiveHeight(4.5), width: responsiveWidth(24), marginTop: '8%', backgroundColor: '#6A5AE0',marginRight:'10%', borderRadius: 7, alignSelf: 'center', justifyContent: 'center' }}
                    onPress={() => { addBalance() }} >
                    <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center', fontFamily: 'Jaldi-Bold' }}>Withdrawal</Text>
                </TouchableOpacity>

            </View>


            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Text style={{ alignSelf: 'center', color: '#8A8A8A', fontSize: 17, fontWeight: '500' }}>Discount Bonus</Text>
                    <Image source={require('../images/i.png')} style={{ height: responsiveHeight(2.1), width: responsiveWidth(4.3), alignSelf: 'center', marginLeft: 5 }} />

                </View>
                <Text style={{ marginHorizontal: 20, marginTop: 5, color: '#000', fontSize: 20, fontWeight: '500' }}>₹ {data?.discount_bonus}</Text>

            </View>

            <View style={{ borderBottomWidth: 0.4, marginHorizontal: 20, marginTop: 20, borderColor: '#8A8A8A' }}></View>




        </SafeAreaView>
    )
}

export default MyBalance