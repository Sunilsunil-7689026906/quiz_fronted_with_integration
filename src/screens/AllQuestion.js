import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const AllQuestion = ({ navigation }) => {
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(1)
    return (
        <SafeAreaView>
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />

            <View style={{ height: responsiveHeight(7), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', alignSelf: 'center', marginTop: 15, marginLeft: '26%' }}>All Question</Text>
                </View>
            </View>

            <ScrollView style={{ flexDirection: 'row' }} horizontal showsHorizontalScrollIndicator={false} >
                <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 20 }}>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 1 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(1)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 1 ? '#fff' : '#6A5AE0' }}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 2 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(2)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 2 ? '#fff' : '#6A5AE0' }}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 3 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(3)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 3 ? '#fff' : '#6A5AE0' }}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 4 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(4)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 4 ? '#fff' : '#6A5AE0' }}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 5 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(5)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 5 ? '#fff' : '#6A5AE0' }}>5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 6 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(6)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 6 ? '#fff' : '#6A5AE0' }}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 7 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(7)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 7 ? '#fff' : '#6A5AE0' }}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 8 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(8)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 8 ? '#fff' : '#6A5AE0' }}>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 9 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(9)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 9 ? '#fff' : '#6A5AE0' }}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 10 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(10)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 10 ? '#fff' : '#6A5AE0' }}>10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 11 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(11)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 11 ? '#fff' : '#6A5AE0' }}>11</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 12 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(12)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 12 ? '#fff' : '#6A5AE0' }}>12</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 13 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(13)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 13 ? '#fff' : '#6A5AE0' }}>13</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 14 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(14)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 14 ? '#fff' : '#6A5AE0' }}>14</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), marginRight: 10, backgroundColor: number == 15 ? '#6A5AE0' : '#fff', width: responsiveWidth(10), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                        onPress={() => setNumber(15)}>
                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: number == 15 ? '#fff' : '#6A5AE0' }}>15</Text>
                    </TouchableOpacity>




                </View>
            </ScrollView>

            <View style={{ height: responsiveHeight(32), width: responsiveWidth(90), marginBottom: 10, paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8, elevation: 10 }}>
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

            <View style={{ height: responsiveHeight(46),alignSelf:'center',justifyContent:'center', width: responsiveWidth(90), marginBottom: 10,  backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8, elevation: 10 }}>
                <View style={{ height: responsiveHeight(6), justifyContent: 'center', width: responsiveWidth(85), borderWidth: 1, borderRadius: 10, alignSelf: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0',fontWeight:'500' }}>Row Point Table</Text>
                </View>


                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:11,marginTop:10}}>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row',backgroundColor:'#EDEAFB', justifyContent: 'center', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>M</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>C</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>T</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'green' }}>Total</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:11}}>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>2.5</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>6</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0' }}>7</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'green' }}>9.5</Text>
                    </View>
                </View>

                <View style={{ height: responsiveHeight(6), justifyContent: 'center', width: responsiveWidth(85), borderWidth: 1, marginTop: 20, borderRadius: 10, alignSelf: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16,color:'#6A5AE0',fontWeight:'500' }}>Main Point Table</Text>
                </View>


                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:11,marginTop:10}}>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row',backgroundColor:'#EDEAFB', justifyContent: 'center', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>M</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>C</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>T</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'green' }}>Total</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:11}}>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>2.5</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>6</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'#000' }}>7</Text>
                    </View>
                    <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center',backgroundColor:'#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 16,color:'green' }}>9.5</Text>
                    </View>
                </View>

            </View>


            
        </SafeAreaView>
    )
}

export default AllQuestion