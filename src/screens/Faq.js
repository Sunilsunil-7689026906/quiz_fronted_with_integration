import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';

const Faq = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: responsiveHeight(13), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 30 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginTop: 30, marginLeft: '5%' }}>Faq</Text>
                </View>
            </View>

            <TouchableOpacity style={{ height: open == 0 ? responsiveHeight(9) : responsiveHeight(30), width: responsiveWidth(90), borderColor: '#6A5AE0', borderWidth: 1, borderRadius: 5, alignSelf: 'center', marginTop: 20 }}
                onPress={() => setOpen(!open)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: '6%' }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}>How do I make my budget?</Text>
                    <Image source={require('../images/plus.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7), tintColor: '#6A5AE0' }} />

                </View>
                {
                    open == 1 ? (<>
                        <Text style={{ alignSelf: 'center', fontWeight: '500' }}>Budget is an estimate</Text>

                    </>)
                        : (null)
                }
            </TouchableOpacity>


            <TouchableOpacity style={{ height: open2 == 0 ? responsiveHeight(9) : responsiveHeight(30), width: responsiveWidth(90), borderColor: '#6A5AE0', borderWidth: 1, borderRadius: 5, alignSelf: 'center', marginTop: 20 }}
                onPress={() => setOpen2(!open2)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: '6%' }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}>How do I make my budget?</Text>
                    <Image source={require('../images/plus.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7), tintColor: '#6A5AE0' }} />

                </View>
                {
                    open2 == 1 ? (<>
                        <Text style={{ alignSelf: 'center', fontWeight: '500' }}>Budget is an estimate</Text>

                    </>)
                        : (null)
                }
            </TouchableOpacity>

            <TouchableOpacity style={{ height: open3 == 0 ? responsiveHeight(9) : responsiveHeight(30), width: responsiveWidth(90), borderColor: '#6A5AE0', borderWidth: 1, borderRadius: 5, alignSelf: 'center', marginTop: 20 }}
                onPress={() => setOpen3(!open3)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: '6%' }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500' }}>How do I make my budget?</Text>
                    <Image source={require('../images/plus.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7), tintColor: '#6A5AE0' }} />

                </View>
                {
                    open3 == 1 ? (<>
                        <Text style={{ alignSelf: 'center', fontWeight: '500' }}>Budget is an estimate</Text>

                    </>)
                        : (null)
                }
            </TouchableOpacity>

        </View>
    )
}

export default Faq