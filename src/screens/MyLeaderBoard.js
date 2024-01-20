import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';


const MyLeaderBoard = ({ navigation }) => {
    const [select, setSelect] = useState('')
    const [checked, setChecked] = useState('first');
    const [correct, setCorrect] = useState('')
    const [save, setSave] = useState(false)




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>

                <View style={{ height: responsiveHeight(9), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{height:responsiveHeight(5),width:responsiveWidth(40),borderRadius:10,backgroundColor:save==true ? '#EDEAFB': '#6A5AE0' ,justifyContent:'center',marginLeft: '15%'}}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', alignSelf: 'center',color:save==true ? '#6A5AE0':'#fff' }}>Leaderboard</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(4), alignSelf: 'center', justifyContent: 'center', borderRadius: 10, width: responsiveWidth(22), borderWidth: 1, borderColor: '#fff' }}
                        >
                            <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>13 left</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ height: responsiveHeight(32), width: responsiveWidth(90), marginBottom: 10, paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 20, borderRadius: 5, elevation: 10 }}>
                    <Text style={{ marginTop: 20, fontSize: 17, fontWeight: '500', color: '#000' }}>Q. Which of the following statements is incorrect as a rule of grammer?</Text>

                    <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 20 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3.5), marginRight: 10, backgroundColor: select == 0 ? '#6A5AE0' : '#fff', width: responsiveWidth(7), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                            onPress={() => setSelect(0)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: select == 0 ? '#fff' : '#6A5AE0' }}>A</Text>
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', fontSize: 13 }}>Shall with the subject in the second and third person introduction</Text>

                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 20 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3.5), marginRight: 10, width: responsiveWidth(7), backgroundColor: select == 1 ? '#6A5AE0' : '#fff', borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                            onPress={() => setSelect(1)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: select == 1 ? '#fff' : '#6A5AE0' }}>B</Text>
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', fontSize: 13 }}>Will with the subject in the first person expressess bleak sense</Text>

                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 20 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3.5), marginRight: 10, width: responsiveWidth(7), backgroundColor: select == 2 ? '#6A5AE0' : '#fff', borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                            onPress={() => setSelect(2)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: select == 2 ? '#fff' : '#6A5AE0' }}>C</Text>
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', fontSize: 13 }}>Should with the second and third persons means ought to</Text>

                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 20 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3.5), marginRight: 10, width: responsiveWidth(7), backgroundColor: select == 3 ? '#6A5AE0' : '#fff', borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                            onPress={() => setSelect(3)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: select == 3 ? '#fff' : '#6A5AE0' }}>D</Text>
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', fontSize: 13 }}>More than one of the above </Text>

                    </View>

                </View>

                <View style={{ height: responsiveHeight(8), flexDirection: 'row', width: responsiveWidth(90), marginBottom: 10, paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 7, borderRadius: 5, elevation: 5 }}>

                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 5, marginHorizontal: 20, height: responsiveHeight(7), borderRadius: 10 }}>

                        <View style={{ justifyContent: 'center' }}>
                            <RadioButton color='#0085FF'

                                uncheckedColor='#B9C3CC'
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />

                        </View>

                        <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>Right</Text>
                        </View>

                        <Image source={require('../images/right2.png')} style={{ height: responsiveHeight(2.6), width: responsiveWidth(5.2), alignSelf: 'center', marginLeft: 5 }} />
                    </View>


                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 5, marginHorizontal: 20, height: responsiveHeight(7), borderRadius: 10 }}>
                        <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                            <RadioButton color='#0085FF'
                                uncheckedColor='#B9C3CC'
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />

                        </View>

                        <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>Wrong</Text>
                        </View>
                        <Image source={require('../images/wrong.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8), alignSelf: 'center', marginTop: 4, marginLeft: 5 }} />

                    </View>

                </View>

                <View style={{ height: responsiveHeight(15), width: responsiveWidth(90), marginBottom: 10, paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 7, borderRadius: 5, elevation: 5 }}>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: '500', color: '#000' }}>Correct %</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3), backgroundColor: correct == 0 ? '#000' : '#fff', justifyContent: 'center', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(0)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 0 ? '#fff' : '#000' }}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 1 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(1)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 1 ? '#fff' : '#000' }}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 2 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(2)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 2 ? '#fff' : '#000' }}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 3 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(3)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 3 ? '#fff' : '#000' }}>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 4 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(4)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 4 ? '#fff' : '#000' }}>4</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 5 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(5)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 5 ? '#fff' : '#000' }}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 6 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(6)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 6 ? '#fff' : '#000' }}>6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 7 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(7)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 7 ? '#fff' : '#000' }}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 8 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(8)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 8 ? '#fff' : '#000' }}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(3), justifyContent: 'center', backgroundColor: correct == 9 ? '#000' : '#fff', width: responsiveWidth(6), borderWidth: 1, borderRadius: 5 }}
                            onPress={() => setCorrect(9)}>
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: correct == 9 ? '#fff' : '#000' }}>9</Text>
                        </TouchableOpacity>
                    </View>

                </View>



                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', marginHorizontal: 20 }}>

                    <View style={{ height: responsiveHeight(25), elevation: 10, borderRadius: 10, width: responsiveWidth(55), backgroundColor: '#fff' }}>
                        <Text style={{ alignSelf: 'center', marginTop: 7, fontSize: 14, fontWeight: '500' }}>Row point Panel</Text>

                        <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

                        <View style={{ flexDirection: 'row', marginTop: 7, justifyContent: 'space-between', marginHorizontal: 20 }}>
                            <View>

                                <Text style={{ fontWeight: '500', fontSize: 15 }}>M</Text>

                                {
                                    checked === 'first' ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>5.5</Text>

                                    ) : (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>3.5</Text>

                                    )
                                }


                            </View>

                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 15 }}>C%</Text>
                                {
                                    correct == 0 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>0</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 1 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>1</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 2 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>2</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 3 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>3</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 4 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>4</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 5 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>5</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 6 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>6</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 7 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>7</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 8 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>8</Text>

                                    ) : (<></>)

                                }

                                {
                                    correct == 9 ? (
                                        <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>9</Text>

                                    ) : (<></>)

                                }

                            </View>

                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 15 }}>T(Time)</Text>
                                <Text style={{ fontWeight: '500', fontSize: 15, alignSelf: 'center', marginTop: 5 }}>7</Text>

                            </View>

                        </View>

                        <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 20 }}>

                            <TouchableOpacity style={{ height: responsiveHeight(3.5), justifyContent: 'center', width: responsiveWidth(11), borderWidth: 1, borderRadius: 5 }}
                            >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, }}>2.5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ height: responsiveHeight(3.5), justifyContent: 'center', width: responsiveWidth(8), borderWidth: 1, borderRadius: 5 }}
                            >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, }}>+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ height: responsiveHeight(3.5), justifyContent: 'center', width: responsiveWidth(8), borderWidth: 1, borderRadius: 5 }}
                            >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, }}>7</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{ height: responsiveHeight(4), alignSelf: 'center', marginTop: 15, justifyContent: 'center', width: responsiveWidth(28), borderWidth: 1, borderRadius: 5 }}
                        >
                            <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, }}>9.5</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: responsiveHeight(25), width: responsiveWidth(35), backgroundColor: '#fff' }}>
                        <Text style={{ color: 'orange', alignSelf: 'flex-start', alignSelf: 'center', fontWeight: '500', fontSize: 18 }}>Time</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>

                            <TouchableOpacity style={{ height: responsiveHeight(4), alignSelf: 'center', borderColor: 'green', justifyContent: 'center', width: responsiveWidth(9), borderWidth: 1, borderRadius: 5 }}
                            >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: 'green' }}>23</Text>
                            </TouchableOpacity>

                            <Text style={{ alignSelf: 'center', fontWeight: '900', color: 'green' }}>:</Text>

                            <TouchableOpacity style={{ height: responsiveHeight(4), alignSelf: 'center', borderColor: 'green', justifyContent: 'center', width: responsiveWidth(9), marginRight: '5%', borderWidth: 1, borderRadius: 5 }}
                            >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 15, color: 'green' }}>0</Text>
                            </TouchableOpacity>


                        </View>

                        <View>
                            <TouchableOpacity style={{ height: responsiveHeight(5), marginTop: '30%', alignSelf: 'center', justifyContent: 'center', borderRadius: 5, width: responsiveWidth(22), backgroundColor: '#6A5AE0' }}
                                onPress={() => setSave(true)}>
                                <Text style={{ color:  '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ height: responsiveHeight(5), alignSelf: 'center', marginTop: '5%', justifyContent: 'center', borderRadius: 5, width: responsiveWidth(22), backgroundColor: '#6A5AE0' }}
                                onPress={() => navigation.navigate('Analysis')} >
                                <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Analysis</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>


            </ScrollView>


        </SafeAreaView>
    )
}

export default MyLeaderBoard