import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const MyTransaction = ({ navigation }) => {
    const [widraw, setWidraw] = useState(0)
    const [his, setHis] = useState(0)

    return (
        <SafeAreaView>

            <View style={{ height: responsiveHeight(8), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start' }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginLeft: '23%' }}>My Transaction</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(28), marginTop: 20, backgroundColor: widraw == 0 ? '#6A5AE0' : '#fff', borderWidth: widraw == 0 ? 0 : 1, alignSelf: 'flex-start' }}
                    onPress={() => setWidraw(0)}>
                    <Text style={{ color: widraw == 0 ? '#fff' : '#000', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Deposit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(28), marginTop: 20, backgroundColor: widraw == 1 ? '#6A5AE0' : '#fff', borderWidth: widraw == 1 ? 0 : 1, alignSelf: 'flex-start' }}
                    onPress={() => setWidraw(1)}>
                    <Text style={{ color: widraw == 1 ? '#fff' : '#000', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Widrawal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(30), marginTop: 20, backgroundColor: widraw == 2 ? '#6A5AE0' : '#fff', borderWidth: widraw == 2 ? 0 : 1, alignSelf: 'flex-start' }}
                    onPress={() => setWidraw(2)}>
                    <Text style={{ color: widraw == 2 ? '#fff' : '#000', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Quiz Histroy</Text>
                </TouchableOpacity>

            </View>

            {
                widraw == 0 ? <>
                    <View style={{ height: responsiveHeight(8.1), flexDirection: 'row', width: responsiveWidth(97), alignSelf: 'center', marginTop: 20, borderRadius: 10, backgroundColor: '#6A5AE0' }}>

                        <View style={{ backgroundColor: '#fff', height: responsiveHeight(5.5), width: responsiveWidth(70), borderRadius: 10, justifyContent: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 20 }}>

                            <View style={{ flex: 0.15, justifyContent: 'center', alignSelf: 'center' }}>
                                <Image source={require('../images/search.png')} style={{ tintColor: '#C0C0C0', height: responsiveHeight(3), width: responsiveWidth(6), marginLeft: 10 }} />
                            </View>

                            <View style={{ flex: 0.80, justifyContent: 'center', alignSelf: 'center' }}>
                                <TextInput require placeholder='Search here..' placeholderTextColor={'#000'} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 17, fontFamily: 'Jaldi-Regular' }} />
                            </View>

                        </View>

                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../images/calender.png')} style={{ tintColor: '#fff', height: responsiveHeight(4), width: responsiveWidth(8), marginLeft: 10 }} />

                        </View>

                    </View>


                    <View style={{ height: responsiveHeight(52), width: responsiveWidth(95), marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(6), width: responsiveWidth(90), borderRadius: 2, marginTop: 10, backgroundColor: '#fff', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Sno.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Amount</Text>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>TransitionId</Text>

                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Status</Text>


                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Date&time</Text>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(8), width: responsiveWidth(90), paddingHorizontal: 10, borderRadius: 2, marginTop: 5, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>1.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>2.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>3.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>4.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>5.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>


                    </View>
                </>
                    : null
            }


            {
                widraw == 1 ? <>
                    <View style={{ height: responsiveHeight(8.1), flexDirection: 'row', width: responsiveWidth(97), alignSelf: 'center', marginTop: 20, borderRadius: 10, backgroundColor: '#6A5AE0' }}>

                        <View style={{ backgroundColor: '#fff', height: responsiveHeight(5.5), width: responsiveWidth(70), borderRadius: 10, justifyContent: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 20 }}>

                            <View style={{ flex: 0.15, justifyContent: 'center', alignSelf: 'center' }}>
                                <Image source={require('../images/search.png')} style={{ tintColor: '#C0C0C0', height: responsiveHeight(3), width: responsiveWidth(6), marginLeft: 10 }} />
                            </View>

                            <View style={{ flex: 0.80, justifyContent: 'center', alignSelf: 'center' }}>
                                <TextInput require placeholder='Search here..' placeholderTextColor={'#000'} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 17, fontFamily: 'Jaldi-Regular' }} />
                            </View>

                        </View>

                        <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../images/calender.png')} style={{ tintColor: '#fff', height: responsiveHeight(4), width: responsiveWidth(8), marginLeft: 10 }} />

                        </View>

                    </View>


                    <View style={{ height: responsiveHeight(52), width: responsiveWidth(95), marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(6), width: responsiveWidth(90), borderRadius: 2, marginTop: 10, backgroundColor: '#fff', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Sno.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Amount</Text>
                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>TransitionId</Text>

                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Status</Text>


                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Date&time</Text>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(8), width: responsiveWidth(90), paddingHorizontal: 10, borderRadius: 2, marginTop: 5, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>1.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>2.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>3.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>4.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(90), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>5.</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>₹4902</Text>
                            <Text style={{ alignSelf: 'center', color: 'green' }}>#4332322</Text>
                            <Text style={{ alignSelf: 'center', color: '#000' }}>Pending</Text>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                            </View>

                        </View>


                    </View>
                </>
                    : null
            }


            {
                widraw == 2 ? <>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                        <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(43), marginTop: 20, backgroundColor: his == 0 ? '#6A5AE0' : '#fff', borderWidth: his == 0 ? 0 : 1, alignSelf: 'flex-start' }}
                            onPress={() => setHis(0)}>
                            <Text style={{ color: his == 0 ? '#fff' : '#000', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Quiz Reward History</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(43), marginTop: 20, backgroundColor: his == 1 ? '#6A5AE0' : '#fff', borderWidth: his == 1 ? 0 : 1, alignSelf: 'flex-start' }}
                            onPress={() => setHis(1)}>
                            <Text style={{ color: his == 1 ? '#fff' : '#000', fontWeight: '500', alignSelf: 'center', fontSize: 16 }}>Refer Income History</Text>
                        </TouchableOpacity>

                    </View>

                    {
                        his == 0 ? <>
                            <View>
                                <View style={{ height: responsiveHeight(8.1), flexDirection: 'row', width: responsiveWidth(97), alignSelf: 'center', marginTop: 20, borderRadius: 10, backgroundColor: '#6A5AE0' }}>

                                    <View style={{ backgroundColor: '#fff', height: responsiveHeight(5.5), width: responsiveWidth(70), borderRadius: 10, justifyContent: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 20 }}>

                                        <View style={{ flex: 0.15, justifyContent: 'center', alignSelf: 'center' }}>
                                            <Image source={require('../images/search.png')} style={{ tintColor: '#C0C0C0', height: responsiveHeight(3), width: responsiveWidth(6), marginLeft: 10 }} />
                                        </View>

                                        <View style={{ flex: 0.80, justifyContent: 'center', alignSelf: 'center' }}>
                                            <TextInput require placeholder='Search here..' placeholderTextColor={'#000'} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 17, fontFamily: 'Jaldi-Regular' }} />
                                        </View>

                                    </View>

                                    <View style={{ alignSelf: 'center' }}>
                                        <Image source={require('../images/calender.png')} style={{ tintColor: '#fff', height: responsiveHeight(4), width: responsiveWidth(8), marginLeft: 10 }} />

                                    </View>

                                </View>


                                <View style={{ height: responsiveHeight(62), width: responsiveWidth(95), marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(7), width: responsiveWidth(90), borderRadius: 2, marginTop: 10, backgroundColor: '#fff', alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Sno.</Text>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Quiz</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', marginTop: -3 }}>Name</Text>
                                        </View>


                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Dep</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', marginTop: -3 }}>osit</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', marginTop: -3 }}>Fees</Text>

                                        </View>


                                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Point</Text>

                                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Rank</Text>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Reward</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', marginTop: -3 }}>earn</Text>
                                        </View>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Date</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', marginTop: -3 }}>&time</Text>
                                        </View>



                                    </View>

                                    <View style={{ flexDirection: 'row', height: responsiveHeight(9), width: responsiveWidth(95), paddingHorizontal: 10, borderRadius: 2, marginTop: 5, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.1 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.4 }}>SSE 202..</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.2, marginRight: 15 }}>₹400</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>18</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>#4</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>32</Text>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>


                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.1 }}>2.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.4 }}>SSE 202..</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.2, marginRight: 15 }}>₹400</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>18</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>#4</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>32</Text>



                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>



                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.1 }}>3.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.4 }}>SSE 202..</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.2, marginRight: 15 }}>₹400</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>18</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>#4</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>32</Text>



                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.1 }}>4.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.4 }}>SSE 202..</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.2, marginRight: 15 }}>₹400</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>18</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>#4</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>32</Text>



                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.1 }}>5.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.4 }}>SSE 202..</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.2, marginRight: 15 }}>₹400</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>18</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>#4</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.2 }}>32</Text>



                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>


                                </View>
                            </View>

                        </>
                            : null
                    }

                    {
                        his == 1 ? <>
                            <View>
                                <View style={{ height: responsiveHeight(8.1), flexDirection: 'row', width: responsiveWidth(97), alignSelf: 'center', marginTop: 20, borderRadius: 10, backgroundColor: '#6A5AE0' }}>

                                    <View style={{ backgroundColor: '#fff', height: responsiveHeight(5.5), width: responsiveWidth(70), borderRadius: 10, justifyContent: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 20 }}>

                                        <View style={{ flex: 0.15, justifyContent: 'center', alignSelf: 'center' }}>
                                            <Image source={require('../images/search.png')} style={{ tintColor: '#C0C0C0', height: responsiveHeight(3), width: responsiveWidth(6), marginLeft: 10 }} />
                                        </View>

                                        <View style={{ flex: 0.80, justifyContent: 'center', alignSelf: 'center' }}>
                                            <TextInput require placeholder='Search here..' placeholderTextColor={'#000'} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 17, fontFamily: 'Jaldi-Regular' }} />
                                        </View>

                                    </View>

                                    <View style={{ alignSelf: 'center' }}>
                                        <Image source={require('../images/calender.png')} style={{ tintColor: '#fff', height: responsiveHeight(4), width: responsiveWidth(8), marginLeft: 10 }} />

                                    </View>

                                </View>


                                <View style={{ height: responsiveHeight(62), width: responsiveWidth(95), marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(6), width: responsiveWidth(90), borderRadius: 2, marginTop: 10, backgroundColor: '#fff', alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500', }}>Sno.</Text>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Refer By</Text>
                                        </View>

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500',marginRight:25 }}>Refer Income</Text>
                                        </View>
                                        

                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontSize: 13, fontWeight: '500' }}>Date&time</Text>
                                        </View>



                                    </View>

                                    <View style={{ flexDirection: 'row', height: responsiveHeight(9), width: responsiveWidth(95), paddingHorizontal: 10, borderRadius: 2, marginTop: 5, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.2 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.5,marginLeft:10 }}>Syam sunder</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.5,marginLeft:25 }}>₹400</Text>
                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>


                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.2 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.5,marginLeft:10 }}>Syam sunder</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.5,marginLeft:25 }}>₹400</Text>
                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>



                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.2 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.5,marginLeft:10 }}>Syam sunder</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.5,marginLeft:25 }}>₹400</Text>
                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.2 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.5,marginLeft:10 }}>Syam sunder</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.5,marginLeft:25 }}>₹400</Text>
                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(8), width: responsiveWidth(95), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', elevation: 10, alignSelf: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: '#6A5AE0', flex: 0.2 }}>1.</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', flex: 0.5,marginLeft:10 }}>Syam sunder</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green', flex: 0.5,marginLeft:25 }}>₹400</Text>
                                        

                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>28 Dec,2023</Text>
                                            <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '400', fontSize: 13 }}>10:00 AM</Text>
                                        </View>

                                    </View>


                                </View>
                            </View>
                        </> : null
                    }


                </>
                    : null
            }

        </SafeAreaView>
    )
}

export default MyTransaction