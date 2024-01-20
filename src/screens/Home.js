import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { base_url } from './Base_url';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {

    const [imgdata, setImgData] = useState([{}])
    const [mydata, setMydata] = useState([])
    const [myid, setMyid] = useState([{}])


    const sliderApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
            // alert(`${await AsyncStorage.getItem("token")}`)


            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/slide-list`, requestOptions)
                .then(response => response.json())
                .then(async (result) => {
                    if (result.success == true) {
                        console.log(result.message, "if")
                        console.log(result.data.slides, "imgimg");
                        setImgData(result.data.slides)
                        
                    }
                    else {
                        console.log(result.message);
                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {

        }
    }



    // console.log(imgdata, "setimhimh");

    const examApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
            // alert(`${await AsyncStorage.getItem("token")}`)


            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/home-page`, requestOptions)
                .then(response => response.json())
                .then(async(result) => {
                    if (result.success == true) {
                        console.log(result.message, "if")
                        console.log(result.data.upcomingGames,"myApidata");
                        setMydata(result.data.upcomingGames)
                        // setMyid(result.data.upcomingGames[0]._id)
                        // console.log(myid, "myid");
                        await AsyncStorage.setItem('_id', result.data.upcomingGames[0]._id)
                        console.log( result.data.upcomingGames[0]._id,'_id');



                    }
                    else {
                        console.log(result.message, "else")

                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {

        }
    }

    console.log(mydata, "mmmmmmmmmy");

    useEffect(() => {
        sliderApi();
        examApi()
    }, [])

    // console.log(myid,"myid");


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />

            <View style={{ height: responsiveHeight(20), width: responsiveWidth(100), backgroundColor: '#6A5AE0' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 50 }}>

                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image source={require('../images/user.jpg')} style={{ height: responsiveHeight(6), width: responsiveWidth(12), borderRadius: 100, alignSelf: 'center', marginTop: 3 }} />
                    </TouchableOpacity>
                    <Image source={require('../images/logo.png')} style={{ height: responsiveHeight(6), marginRight: 40, width: responsiveWidth(26), alignSelf: 'center', marginTop: 3 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ marginRight: 9, alignSelf: 'center', marginTop: 3 }}
                            onPress={() => navigation.navigate('Notification')}>
                            <Image source={require('../images/notification.png')} style={{ height: responsiveHeight(5), width: responsiveWidth(10) }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 9, alignSelf: 'center', marginTop: 3 }}>
                            <Image source={require('../images/walletcopy.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7) }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 22 }}>
                    <Text style={{ borderBottomWidth: 1, borderColor: '#fff', color: '#fff', fontWeight: '500', fontSize: 16, alignSelf: 'flex-start' }}>Home</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('MyExam')}>
                        <Text style={{ color: '#C8C8C8', fontWeight: '400', fontSize: 15, alignSelf: 'flex-start' }}>My Exams</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Winner')}>
                        <Text style={{ color: '#C8C8C8', fontWeight: '400', fontSize: 15, alignSelf: 'flex-start' }}>Winner</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Percentage')}>
                        <Text style={{ color: '#C8C8C8', fontWeight: '400', fontSize: 15, alignSelf: 'flex-start' }}>Percentage</Text>
                    </TouchableOpacity>
                </View>
            </View>



            {/* <View style={{ marginTop: '5%', marginBottom: 10 }} >
                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={[4]}
                    horizontal={true}
                    renderItem={(data) => {
                        return (
                            <View key={data} style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 20 }}>

                                <View style={{ marginRight: 10 }}>
                                    <Image source={require('../images/quiz_banner2.jpeg')} style={{ flex: 1, height: responsiveHeight(10), borderRadius: 10, width: responsiveWidth(90), alignSelf: 'center' }} />
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 25 }}>
                                    <Image source={require('../images/quiz_banner2.jpeg')} style={{ height: responsiveHeight(10), borderRadius: 10, width: responsiveWidth(90), alignSelf: 'center' }} />
                                </View>
                                <View style={{ marginLeft: 25 }}>
                                    <Image source={require('../images/quiz_banner2.jpeg')} style={{ height: responsiveHeight(10), borderRadius: 10, width: responsiveWidth(90), alignSelf: 'center' }} />
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Image source={require('../images/quiz_banner2.jpeg')} style={{ height: responsiveHeight(10), borderRadius: 10, width: responsiveWidth(90), alignSelf: 'center' }} />
                                </View>

                            </View>

                        )
                    }}
                />
            </View> */}

            <ScrollView style={{ height: responsiveHeight(100) }}>

                <View style={{ marginTop: '7%' }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={[1]}
                        horizontal={true}
                        renderItem={() => {
                            return (
                                <View style={{ flexDirection: 'row', flex: 1 }}>

                                    {
                                        imgdata.map((data) => {
                                            console.log(data, "flatdata");
                                            return (
                                                <>
                                                    <View style={{ height: responsiveHeight(10), width: responsiveWidth(90), backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, marginRight: 10, marginLeft: 18 }}>

                                                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                                                            <Image source={{ uri: `http://3.111.23.56:5059/${data.slide}` }} style={{ backgroungColor: 'green', height: responsiveHeight(9), width: responsiveWidth(90), alignSelf: 'center', borderRadius: 15 }} />
                                                        </TouchableOpacity>

                                                    </View>
                                                </>
                                            )
                                        })
                                    }

                                </View>
                            )
                        }}
                    />
                </View>


               


                <Text style={{ marginHorizontal: 20, marginTop: 15, color: '#000', fontSize: 18, fontWeight: '600' }}>Upcoming Quiz</Text>


                {
                    mydata.length > 0 ? (mydata.map((data) => {
                        console.log(data, 'datamydata');

                        // setMyid(data._id)

                        return (
                            <>
                                <View style={{ height: responsiveHeight(45), width: responsiveWidth(90), paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 20, borderRadius: 5, elevation: 10 }}>

                                    <Text style={{ color: '#6A5ADF', fontWeight: '500', fontSize: 16, marginTop: 15 }}>{data.gameNameInEnglish}</Text>
                                    {/* <Text style={{ color: '#6A5ADF', fontWeight: '500', fontSize: 16, marginTop: 15 }}>{data._id}</Text> */}

                                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 14, marginTop: 5 }}>{data.category}</Text>

                                    <View style={{ borderBottomWidth: 0.6, marginTop: 10 }}></View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                                        <Image source={require('../images/calender.png')} style={{ tintColor: '#6A5ADF', height: responsiveHeight(4), width: responsiveWidth(8) }} />

                                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13 }}>{data.schedule}</Text>

                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                                        <Image source={require('../images/question.png')} style={{ tintColor: '#6A5ADF', height: responsiveHeight(4), width: responsiveWidth(8) }} />

                                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13 }}>{data.noOfQuestion} Questions | Time {data.duration / 1000 / 60} mins</Text>

                                    </View>

                                    <View style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 20, width: responsiveWidth(80), marginTop: 10, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                                        <Text style={{ marginLeft: 10, color: '#6A5ADF', fontWeight: '500', fontSize: 14 }}>Joined Member: {data.UserGame.length}</Text>
                                    </View>

                                    <View style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 20, width: responsiveWidth(80), marginTop: 10, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                                        <Text style={{ marginLeft: 10, color: '#6A5ADF', fontWeight: '500', fontSize: 14 }}>Joined Fees: ₹ {data.noOfPrice}</Text>
                                    </View>

                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: 13, marginTop: 5 }}>15 minutes left to exam start</Text>

                                    <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(28), marginTop: 20, backgroundColor: '#A9A3E9', alignSelf: 'flex-start' }}
                                        onPress={() => navigation.navigate('QuizType')}>
                                        <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Join Now</Text>
                                    </TouchableOpacity>

                                </View>
                            </>
                        )
                    })) :
                        (
                            <Text style={{ textAlign: 'center', color: 'red', justifyContent: 'center', fontFamily: 'Jaldi-Regular', alignItems: 'center', borderColor: 'red', borderRadius: 10, marginVertical: 20, marginHorizontal: 20, paddingVertical: 20, fontSize: 18 }}>No data found</Text>

                        )
                }

                {/* <View style={{ height: responsiveHeight(45), width: responsiveWidth(90), paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', marginTop: 20, borderRadius: 5, elevation: 10 }}>

                    <Text style={{ color: '#6A5ADF', fontWeight: '500', fontSize: 16, marginTop: 15 }}>SSC 2024 JAN Exam EPT34</Text>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 14, marginTop: 5 }}>Polity and Government</Text>

                    <View style={{ borderBottomWidth: 0.6, marginTop: 10 }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                        <Image source={require('../images/calender.png')} style={{ tintColor: '#6A5ADF', height: responsiveHeight(4), width: responsiveWidth(8) }} />

                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13 }}>08 JAN, 2024 | 5:00 PM</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                        <Image source={require('../images/question.png')} style={{ tintColor: '#6A5ADF', height: responsiveHeight(4), width: responsiveWidth(8) }} />

                        <Text style={{ alignSelf: 'center', marginLeft: 10, fontSize: 13 }}>15 Questions | Time 18 mins</Text>

                    </View>

                    <View style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 20, width: responsiveWidth(80), marginTop: 10, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                        <Text style={{ marginLeft: 10, color: '#6A5ADF', fontWeight: '500', fontSize: 14 }}>Joined Member: 1000</Text>
                    </View>

                    <View style={{ height: responsiveHeight(5), justifyContent: 'center', borderRadius: 20, width: responsiveWidth(80), marginTop: 10, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                        <Text style={{ marginLeft: 10, color: '#6A5ADF', fontWeight: '500', fontSize: 14 }}>Joined Fees: $450</Text>
                    </View>

                    <Text style={{ color: '#000', fontWeight: '500', fontSize: 13, marginTop: 5 }}>15 minutes left to exam start</Text>

                    <TouchableOpacity style={{ height: responsiveHeight(4.8), justifyContent: 'center', borderRadius: 25, width: responsiveWidth(28), marginTop: 20, backgroundColor: '#A9A3E9', alignSelf: 'flex-start' }}
                        onPress={() => { examApi() }}>
                        <Text style={{ color: '#fff', fontWeight: '400', alignSelf: 'center', fontSize: 16 }}>Join Now</Text>
                    </TouchableOpacity>

                </View> */}






            </ScrollView>

            <View style={{ height: responsiveHeight(8), borderTopLeftRadius: 20, borderTopRightRadius: 20, width: responsiveWidth(100), backgroundColor: '#6A5AE0', justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row' }}>

                <TouchableOpacity style={{ alignSelf: 'center' }}>
                    <Image source={require('../images/yt.webp')} style={{ height: responsiveHeight(2.4), width: responsiveWidth(5.8), alignSelf: 'center' }} />

                    <Text style={{ color: '#fff', fontWeight: '400', fontSize: 12 }}>Youtube</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={()=>{examApi()}} >
                    <Image source={require('../images/yt.webp')} style={{ tintColor: '#A9A9A9', height: responsiveHeight(2.4), width: responsiveWidth(5.8), alignSelf: 'center' }} />

                    <Text style={{ color: '#A9A9A9', fontWeight: '400', fontSize: 12 }}>Telegram</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Dummy')}>
                    <Image source={require('../images/tmail.png')} style={{ tintColor: '#A9A9A9', height: responsiveHeight(2.4), width: responsiveWidth(5.8), alignSelf: 'center' }} />

                    <Text style={{ color: '#A9A9A9', fontWeight: '400', fontSize: 12 }}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Introduction')}>
                    <Image source={require('../images/intr.png')} style={{ tintColor: '#A9A9A9', height: responsiveHeight(2.4), width: responsiveWidth(5.9), alignSelf: 'center' }} />

                    <Text style={{ color: '#A9A9A9', fontWeight: '400', fontSize: 12 }}>Introduction</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../images/usericon.png')} style={{ tintColor: '#A9A9A9', height: responsiveHeight(2.5), width: responsiveWidth(4.5), alignSelf: 'center' }} />

                    <Text style={{ color: '#A9A9A9', fontWeight: '400', fontSize: 12 }}>Profile</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default Home