import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import PieChart from 'react-native-pie-chart';
import { BarChart } from 'react-native-chart-kit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base_url } from './Base_url';



const AllLeaderboard = ({ navigation }) => {
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(1)
    const [mydata, setMydata] = useState("")

    const [question, setquestion] = useState([])
    // const navigation = useNavigation();
    // const route = useRoute();

    const [rowdata, setRowdata] = useState([])

    const [chartdata, setChartdata] = useState([])
    const [attempte, setAttempte] = useState([])
    const [rankdata, setRankdata] = useState([])



    const resultApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${base_url}/quiz-result`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success == true) {
                        console.log(result.data.gameQuestion[0].questionleaderShip, "rcc")
                        setRankdata(result.data.gameQuestion.questionleaderShip)

                        setAttempte(result.data.gameQuestion[0])

                        setRowdata(result.data.gameQuestion[0].UserQuestion)
                        setMydata(result.data.gameQuestion[0].question)

                        setquestion(result.data.gameQuestion[0].options)

                        setChartdata(result.data.gameQuestion[0].ContestMembers)

                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.log(error, "ghgh");
        }
    }

    const widthAndHeight = 150;
    const series = [`${attempte.attempted}`, `${attempte.not_attempted}`];
    const sliceColor = ['#6A5AE0', '#A8A8A8'];


    const widthAndHeight2 = 150;
    const series2 = [`${attempte.correctPercnt}`, `${attempte.wrongPercnt}`];
    const sliceColor2 = ['#0085FF', '#A8A8A8'];

    const data = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                data: [`${chartdata.A}`, `${chartdata.B}`, `${chartdata.C}`, `${chartdata.D}`],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Default color for all bars
                barColors: ['red', 'green', 'blue', 'purple']
            },
        ],
    };

    useEffect(() => {
        resultApi();
    }, [])


    return (
        <SafeAreaView  >
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />


            <View style={{ height: responsiveHeight(7), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', alignSelf: 'center', marginTop: 15, marginLeft: '26%' }}>Leaderboard</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >



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
                    <Text style={{ marginTop: 20, fontSize: 17, fontWeight: '500', color: '#000' }}>Q. {mydata}</Text>

                    {question?.map((res) => {
                        return (
                            <>
                                <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 20 }}>
                                    <TouchableOpacity style={{ height: responsiveHeight(3.5), marginRight: 10, backgroundColor: select == 0 ? '#6A5AE0' : '#fff', width: responsiveWidth(7), borderWidth: 1, borderRadius: 100, justifyContent: 'center' }}
                                        onPress={() => setSelect(0)}>
                                        <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 18, color: select == 0 ? '#fff' : '#6A5AE0' }}>{res.id}</Text>
                                    </TouchableOpacity>

                                    <Text style={{ alignSelf: 'center', fontSize: 13 }}>{res.answer}</Text>

                                </View>
                            </>
                        )
                    })

                    }

                </View>



                <View style={{ height: responsiveHeight(60), alignSelf: 'center', width: responsiveWidth(90), marginBottom: 10, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8, elevation: 10 }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                        <View style={{ marginTop: 30, alignSelf: 'center' }}>
                            <PieChart
                                widthAndHeight={widthAndHeight2}
                                series={series2}
                                sliceColor={sliceColor2}
                                coverRadius={0.45}
                                coverFill={'#FFF'}
                            />
                        </View>


                        <View style={{ marginTop: 30, alignSelf: 'center' }}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                                coverRadius={0.45}
                                coverFill={'#FFF'}
                            />
                        </View>



                    </View>

                    {
                        attempte.attempted <= attempte.not_attempted ? (

                            <Text style={{ fontSize: 14, position: 'absolute', color: '#fff', fontWeight: '500', top: '10%', right: '12%' }}>{((attempte.attempted) / (attempte.not_attempted + attempte.attempted) * 100).toFixed(2)}</Text>
                        ) :
                            (
                                <>
                                    <Text style={{ fontSize: 14, position: 'absolute', color: '#fff', fontWeight: '500', top: '20%', right: '4%' }}>{((attempte.attempted) / (attempte.not_attempted + attempte.attempted) * 100).toFixed(2)}</Text>
                                </>
                            )
                    }

                    {
                        attempte.attempted <= attempte.not_attempted ? (
                            <Text style={{ fontSize: 14, position: 'absolute', top: '20%', fontWeight: '500', right: '35%', color: '#6A5AE0' }}>{((attempte.not_attempted) / (attempte.not_attempted + attempte.attempted) * 100).toFixed(2)}

                            </Text>
                        ) :
                            (
                                <>
                                    <Text style={{ fontSize: 14, position: 'absolute', top: '10%', fontWeight: '500', right: '28%', color: '#6A5AE0' }}>{((attempte.not_attempted) / (attempte.not_attempted + attempte.attempted) * 100).toFixed(2)}

                                    </Text>
                                </>
                            )
                    }

                    {/* aall */}


                    {
                        attempte.correctPercnt <= attempte.wrongPercnt ? (

                            <Text style={{ fontSize: 14, position: 'absolute', color: '#000', fontWeight: '500', top: '10%', right: '63%' }}>{((attempte.correctPercnt) / (attempte.wrongPercnt + attempte.correctPercnt) * 100).toFixed(0)}%</Text>
                        ) :
                            (
                                <>
                                    <Text style={{ fontSize: 14, position: 'absolute', color: '#000', fontWeight: '500', top: '20%', right: '55%' }}>{((attempte.correctPercnt) / (attempte.wrongPercnt + attempte.correctPercnt) * 100).toFixed(0)}%</Text>
                                </>
                            )
                    }

                    {
                        attempte.correctPercnt >= attempte.wrongPercnt ? (
                            <Text style={{ fontSize: 14, position: 'absolute', top: '20%', fontWeight: '500', right: '86%', color: '#0085FF' }}>{((attempte.wrongPercnt) / (attempte.wrongPercnt + attempte.correctPercnt) * 100).toFixed(0)}%

                            </Text>
                        ) :
                            (
                                <>
                                    <Text style={{ fontSize: 14, position: 'absolute', top: '10%', fontWeight: '500', right: '79%', color: '#0085FF' }}>{((attempte.wrongPercnt) / (attempte.wrongPercnt + attempte.correctPercnt) * 100).toFixed(0)}%

                                    </Text>
                                </>
                            )
                    }




                    <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50 }}>

                        <View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: responsiveHeight(1.5), width: responsiveWidth(3), backgroundColor: '#0085FF', alignSelf: 'center' }}>

                                </View>

                                <Text style={{ fontSize: 11, marginRight: 10, marginLeft: 10 }}>{attempte.correctPercnt} Correct</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: responsiveHeight(1.5), width: responsiveWidth(3), backgroundColor: '#A8A8A8', alignSelf: 'center' }}>

                                </View>

                                <Text style={{ fontSize: 11, marginLeft: 10 }}>{attempte.wrongPercnt} Incorrect</Text>
                            </View>
                        </View>

                        <View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: responsiveHeight(1.5), width: responsiveWidth(3), backgroundColor: '#6A5AE0', alignSelf: 'center' }}>

                                </View>

                                <Text style={{ fontSize: 11, marginRight: 10, marginLeft: 10 }}>{attempte.attempted} Attempted</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: responsiveHeight(1.5), width: responsiveWidth(3), backgroundColor: '#A8A8A8', alignSelf: 'center' }}>

                                </View>

                                <Text style={{ fontSize: 11, marginLeft: 10 }}>{attempte.not_attempted} Not Attempted</Text>
                            </View>
                        </View>




                    </View>





                    <View style={{ alignSelf: 'center', marginTop: 30 }}>
                        <BarChart
                            data={data}
                            showBarTops={true}
                            width={300}
                            height={200}
                            yAxisLabel=""
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#A9A3E9',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 0,
                                // color: (opacity = 1) => `rgba(107, 45, 166, ${opacity})`,
                                color: (opacity = 1) => `rgba(106, 90, 224, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </View>


                </View>




                <View style={{ height: responsiveHeight(6), width: responsiveWidth(90), paddingHorizontal: 20, backgroundColor: '#6A5AE0', alignSelf: 'center', marginTop: 20, borderTopLeftRadius: 8, borderTopRightRadius: 8, elevation: 10 }}>
                    <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-between', marginHorizontal: 20 }}>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '400', alignSelf: 'center', color: '#fff' }}>Leaderboard Winner</Text>
                        </View>

                        <View style={{ justifyContent: 'center', marginBottom: 5 }}>
                            <Image source={require('../images/leaderboard.png')} style={{ tintColor: '#fff', width: responsiveWidth(7), alignSelf: 'center', height: responsiveHeight(3.5) }} />
                        </View>

                    </View>
                </View>

                <View style={{ height: responsiveHeight(8.1), flexDirection: 'row', width: responsiveWidth(90), alignSelf: 'center', backgroundColor: '#6A5AE0' }}>

                    <View style={{ backgroundColor: '#fff', height: responsiveHeight(5.5), width: responsiveWidth(70), borderRadius: 10, justifyContent: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 15 }}>

                        <View style={{ flex: 0.15, justifyContent: 'center', alignSelf: 'center' }}>
                            <Image source={require('../images/search.png')} style={{ tintColor: '#C0C0C0', height: responsiveHeight(3), width: responsiveWidth(6), marginLeft: 10 }} />
                        </View>

                        <View style={{ flex: 0.80, justifyContent: 'center', alignSelf: 'center' }}>
                            <TextInput require placeholder='Search here..' placeholderTextColor={'#000'} style={{ color: '#000', marginLeft: 15, fontWeight: '400', fontSize: 17, fontFamily: 'Jaldi-Regular' }} />
                        </View>

                    </View>

                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../images/calender.png')} style={{ tintColor: '#fff', height: responsiveHeight(4), width: responsiveWidth(8) }} />

                    </View>

                </View>

                <View style={{ height: responsiveHeight(42), marginBottom: 50, width: responsiveWidth(90), elevation: 10, paddingHorizontal: 20, backgroundColor: '#fff', alignSelf: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: responsiveHeight(6), width: responsiveWidth(86), borderRadius: 2, marginTop: 5, backgroundColor: '#fff', alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Rank</Text>
                        <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500', marginLeft: 20 }}>Name</Text>
                        <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500', marginLeft: 20 }}>Reg.ID</Text>

                        <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>Points</Text>

                    </View>

                    {
                        rankdata?.map((item, i) => {
                            console.log(item, "myitem");

                            return (
                                <>
                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, height: responsiveHeight(6), width: responsiveWidth(86), borderRadius: 2, marginTop: 5, backgroundColor: '#EDEAFB', alignSelf: 'center' }}>
                                        <Text style={{ alignSelf: 'center', color: '#6A5AE0' }}>#{item?.rank}</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000' }}>{item?.User?.name}</Text>
                                        <Text style={{ alignSelf: 'center', color: 'green' }}>{item?.userId}</Text>
                                        <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500' }}>7.5</Text>
                                    </View>
                                </>
                            );
                        })



                    }



                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default AllLeaderboard