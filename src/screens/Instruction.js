import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';

const Instruction = ({ navigation }) => {
    const [lan, setLang] = useState(0)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={{ height: responsiveHeight(13), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 30 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', alignSelf: 'center', marginTop: 30, marginLeft: '5%' }}>Instruction</Text>
                </View>
            </View>

            <ScrollView>


                {
                    lan == 0 ?
                        <View>
                            
                            <View style={{ borderWidth: 1, height: responsiveHeight(30), width: responsiveWidth(100), alignSelf: 'center' }}>
                                <Image source={require('../images/inst.png')} style={{ borderWidth: 1, height: responsiveHeight(28), borderRadius: 10, marginTop: 15, width: responsiveWidth(90), alignSelf: 'center' }} />
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>प्रत्येक Question पर maximum 9.5 point बनाने हैं जो कि Answer के option A/B/C/D, सही/गलत, currect % और Time के point से मिलकर बनते हैं।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>सही option select करने पर 5.5 point और गलत option select करने पर 3.3 point मिलते हैं।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>currect %, question level और concept modification को बताता है 0,1,2,3,4,5,6,7,8,9 में से आप उचित अंक select करें।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>प्रत्येक question के लिए 20 Second दिया गया है।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>सही / ग़लत के point और currect % के D.S point मे Time के point जोड़ने के लिए निश्चित second आने पर save बटन click करे ।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>Question का निश्चित समय समाप्त होने पर आपको 5 second का समय leaderbord में rank, answer and other users की data देखने के लिए मिलेंगा उसके बाद Next question आयेगा।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>Test समाप्त होने पर रैंक के अनुसार scholarship आपके wallet में Transfer कर दी जायेगी।</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text>Screen पर आपको Timer में Time second में चलता हुआ Show होगा।</Text>
                            </View>

                        </View>
                        : null
                }

                {
                    lan == 1 ?
                        <View>
                            <View style={{ borderWidth: 1, height: responsiveHeight(30), width: responsiveWidth(100), alignSelf: 'center' }}>
                                <Image source={require('../images/inst.png')} style={{ borderWidth: 1, height: responsiveHeight(28), borderRadius: 10, marginTop: 15, width: responsiveWidth(90), alignSelf: 'center' }} />
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>Maximum 9.5 points are to be made on each question which consists of answer options A/B/C/D, right/wrong, correct % and time points.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>You get 5.5 points for selecting the correct option and 3.3 points for selecting the wrong option.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>Correct % tells the question level and concept modification. Select the appropriate marks from 0,1,2,3,4,5,6,7,8,9</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>20 seconds are given for each question.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>To add time point to the point of right/wrong and D.S point of correct %, click on save button when the specified second comes.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>After the fixed time of the question is over, you will get 5 seconds to see the rank, answer and data of other users in the leaderboard, after that the next question will come.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>After the test is over, the scholarship will be transferred to your wallet as per your rank.</Text>
                            </View>

                            <View style={{marginHorizontal:20,marginTop:10,flexDirection:'row'}}>
                                <Text style={{marginRight:5}}>👉</Text>
                                <Text style={{marginRight:10}}>On the screen you will see the timer showing the time running in seconds.</Text>
                            </View>

                        </View>
                        : null
                }



                <View style={{ height: responsiveHeight(18), marginBottom: 10, justifyContent: 'center', width: responsiveWidth(90), backgroundColor: '#fff', marginTop: 20, alignSelf: 'center', elevation: 10 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 20, color: '#6A5AE0' }}>Choose your Preferred Language</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

                        <TouchableOpacity style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 5, width: responsiveWidth(38), marginTop: 20, backgroundColor: '#6A5AE0', alignSelf: 'flex-start' }}
                            onPress={() => setLang(0)}>
                            <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Hindi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 5, width: responsiveWidth(38), marginTop: 20, backgroundColor: '#6A5AE0', alignSelf: 'flex-start' }}
                            onPress={() => setLang(1)}>
                            <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>English</Text>
                        </TouchableOpacity>

                    </View>

                </View>



                <TouchableOpacity style={{ height: responsiveHeight(6), justifyContent: 'center',marginBottom:10, borderRadius: 5, width: responsiveWidth(90), marginTop: 20, backgroundColor: '#6A5AE0', alignSelf: 'center' }}
                onPress={()=>navigation.navigate('MyLeaderBoard')}>
                    <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Join Now</Text>
                </TouchableOpacity>



            </ScrollView>
        </View>
    )
}

export default Instruction