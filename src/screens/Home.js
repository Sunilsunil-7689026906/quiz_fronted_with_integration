import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  FlatList,
  RefreshControl
} from "react-native";
import React, { useEffect, useState } from "react";
import loding from "../images/loding.gif"
import Modal from "react-native-modal";
import Toast from 'react-native-toast-message';


import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ScrollView } from "react-native-gesture-handler";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";
import { base_url } from "./Base_url";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatTimestamp } from "./../utils/formatDate";
// import { formattedDateTime } from "../utils/FormateTime";
import { FormatDateTime } from "../utils/FormateTime";
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const Home = ({ navigation }) => {
  const [imgdata, setImgData] = useState([]);
  const [logodata, setLogodata] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Successfully Joined game',
      visibilityTime: 3000, // Duration of the toast
    });
  };


  const [mydata, setMydata] = useState([]);
  const [myid, setMyid] = useState([{}]);
  const [lodings, setlodings] = useState(true)
  const [linksdata, setlinksdata] = useState([])
  const [ylink, setylink] = useState("")
  const [tlink, settlink] = useState("")
  const [elink, setelink] = useState("")
  const [imgs, setimgs] = useState("")
  

  function FormatDateTime() {
    const milliseconds = 1642958701000; // Example timestamp in milliseconds
    const formattedDateTime = convertMillisecondsToDateTime(milliseconds);
    // console.log(formattedDateTime);
    return formattedDateTime
  }

  const logoApi = async () => {
    try {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${base_url}/get-logo`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success == true) {
            // console.log(result.data.logo, "logoimg")
            setLogodata(result.data.logo)
          }
        })
        .catch(error => console.log('error', error));


    } catch (error) {

    }
  }

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
        .then(async result => {
          // console.log(JSON.stringify(result), "koojhgg");
          // alert(result.data.user[0].state)
          if (result.success == true) {
            await AsyncStorage.setItem("pr", `https://quiz.metablocktechnologies.org/uploads/${result.data.user[0].avatar}`)
            await AsyncStorage.setItem("names", result.data.user[0].name)
            await AsyncStorage.setItem("email", result.data.user[0].email)
            await AsyncStorage.setItem("user_id", result.data.user[0]._id)
            setimgs(`https://quiz.metablocktechnologies.org/uploads/${result.data.user[0].avatar}`)
            
          }
        })
        .catch(error => console.log('error', error));

    } catch (error) {

    }
  }


  const sliderApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${base_url}/slide-list`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success == true) {
            // console.log(result.data.slides, "slslslsd")
            setImgData(result.data.slides)
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
      myHeaders.append(
        "Authorization",
        `${await AsyncStorage.getItem("token")}`
      );
      // alert(`${await AsyncStorage.getItem("token")}`)

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${base_url}/home-page`, requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          if (result.success == true) {
           
            setMydata(result.data.upcomingGames);
            
            await AsyncStorage.setItem("_id", result.data?.upcomingGames[0]._id);
            // console.log(result.data.upcomingGames[0]._id, "_id");
          } else {
           
            console.log(result.message, "else");
          }
        })
        .catch((error) => console.log("errorrr", error)).finally(() => { setlodings(false) });
    } catch (error) {
      console.log(error, "errrrror");
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      examApi()
      setRefreshing(false);
    }, 2000);
  }, []);


  const Linkings = async () => {
    // alert("jk")
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `${await AsyncStorage.getItem("token")}`
      );;

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${base_url}/social-links`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // alert(result.data.links[0].Name)
          setlinksdata(result.data.Link)
          setylink(result.data.links[2].Link)
          // alert(result.data.links[2].link)
          settlink(result.data.links[1].Link)
          setelink(result.links[4].Link)
        })
        .catch(error => console.log('erroreee', error));

    } catch (error) {
      console.log(error, "ererere");
    }
  }

  function convertMillisecondsToDateTime(milliseconds) {
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString();
  }
  const handleLinkPress = (l) => {
    // alert(l)
    Linking.openURL(l);
  };


  useEffect(() => {
    onRefresh()
    profileApi()
    logoApi()
    Linkings()
    sliderApi();
    examApi();
  }, []);

  // console.log(imgdata, "imgdata");

  return (
    <>

      <OrientationLoadingOverlay
        visible={lodings}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message="Loading... "
      />
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar
          translucent={true}
          barStyle={"light-content"}
          backgroundColor={"#6A5AE0"}
        />

        <View
          style={{
            height: responsiveHeight(20),
            width: responsiveWidth(100),
            backgroundColor: "#6A5AE0",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 50,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              {
                imgs ?
                  <Image
                    source={{ uri: imgs }}
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

            </TouchableOpacity>
            <Image
              source={{
                uri: `https://quiz.metablocktechnologies.org/uploads/${logodata}`,
              }}
              style={{
                height: responsiveHeight(4),
                marginRight: 10,
                width: responsiveWidth(40),
                alignSelf: "center",
                marginTop: 5,
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={{ marginRight: 9, alignSelf: "center", marginTop: 1 }}
                onPress={() => navigation.navigate("Notification")}
              >
                <Image
                  source={require("../images/notification.png")}
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 9, alignSelf: "center", marginTop: 1 }}
                onPress={() => navigation.navigate("MyBalance")}>
                <Image
                  source={require("../images/walletcopy.png")}
                  style={{
                    height: responsiveHeight(3.5),
                    width: responsiveWidth(7),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Toast ref={(ref) => Toast.setRef(ref)} />


          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 22,
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
                borderColor: "#fff",
                color: "#fff",
                fontWeight: "500",
                fontSize: 16,
                alignSelf: "flex-start",
              }}
            >
              Home
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("MyExam")}>
              <Text
                style={{
                  color: "#C8C8C8",
                  fontWeight: "400",
                  fontSize: 15,
                  alignSelf: "flex-start",
                }}
              >
                My Exams
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Winner")}>
              <Text
                style={{
                  color: "#C8C8C8",
                  fontWeight: "400",
                  fontSize: 15,
                  alignSelf: "flex-start",
                }}
              >
                Winner
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Percentage")}>
              <Text
                style={{
                  color: "#C8C8C8",
                  fontWeight: "400",
                  fontSize: 15,
                  alignSelf: "flex-start",
                }}
              >
                Correct %
              </Text>
            </TouchableOpacity>
          </View>
        </View>




        <ScrollView style={{ height: responsiveHeight(100) }}>
          <View style={{ marginTop: "7%" }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={[1]}
              horizontal={true}
              renderItem={() => {
                return (
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    {imgdata.map((data) => {
                      // console.log(data, "flatdata");
                      return (
                        <>
                          <View
                            style={{
                              height: responsiveHeight(10),
                              width: responsiveWidth(90),
                              backgroundColor: "white",
                              alignSelf: "center",
                              borderRadius: 10,
                              marginRight: 10,
                              marginLeft: 18,
                            }}
                          >
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                              <Image
                                source={{
                                  uri: `https://quiz.metablocktechnologies.org/uploads/${data.img}`,
                                }}
                                style={{
                                  backgroungColor: "green",
                                  height: responsiveHeight(9),
                                  width: responsiveWidth(90),
                                  alignSelf: "center",
                                  borderRadius: 15,
                                  resizeMode: 'center'
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </>
                      );
                    })}
                  </View>
                );
              }}
            />
          </View>

          <Text
            style={{
              marginHorizontal: 20,
              marginTop: 15,
              color: "#000",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Upcoming Quiz
          </Text>


          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            {mydata.length > 0 ? (
              mydata.map((data,index) => {
                // console.log(data, "datamydata");
                // console.log(data._id,"inline_id");
                // console.log(data?.schedule,"inlinedata?.schedule");

                // setMyid(data._id)
                return (
                  <>

                    <View
                      style={{
                        height: responsiveHeight(45),
                        width: responsiveWidth(90),
                        paddingHorizontal: 20,
                        backgroundColor: "#fff",
                        alignSelf: "center",
                        marginTop: 20,
                        borderRadius: 5,
                        elevation: 10,
                        marginVertical: 20
                      }}
                    >
                      <Text
                        style={{
                          color: "#6A5ADF",
                          fontWeight: "500",
                          fontSize: 16,
                          marginTop: 15,
                        }}
                      >
                        {/* {index} */}
                        {data.gameNameInEnglish}
                      </Text>
                      {/* <Text style={{ color: '#6A5ADF', fontWeight: '500', fontSize: 16, marginTop: 15 }}>{data._id}</Text> */}

                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "400",
                          fontSize: 14,
                          marginTop: 5,
                        }}
                      >
                        {data.category}
                      </Text>

                      <View
                        style={{ borderBottomWidth: 0.6, marginTop: 10 }}
                      ></View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          marginTop: 10,
                        }}
                      >
                        <Image
                          source={require("../images/calender.png")}
                          style={{
                            tintColor: "#6A5ADF",
                            height: responsiveHeight(4),
                            width: responsiveWidth(8),
                          }}
                        />

                        <Text
                          style={{
                            alignSelf: "center",
                            marginLeft: 10,
                            fontSize: 13,
                          }}
                        >
                          {convertMillisecondsToDateTime(data?.schedule)}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          marginTop: 10,
                        }}
                      >
                        <Image
                          source={require("../images/question.png")}
                          style={{
                            tintColor: "#6A5ADF",
                            height: responsiveHeight(4),
                            width: responsiveWidth(8),
                          }}
                        />

                        <Text
                          style={{
                            alignSelf: "center",
                            marginLeft: 10,
                            fontSize: 13,
                          }}
                        >
                          {data.noOfQuestion} Questions | Time{" "}
                          {parseInt(parseInt(data.duration) / 60000)} mins
                        </Text>
                      </View>

                      <View
                        style={{
                          height: responsiveHeight(5),
                          justifyContent: "center",
                          borderRadius: 20,
                          width: responsiveWidth(80),
                          marginTop: 10,
                          backgroundColor: "#EDEAFB",
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 10,
                            color: "#6A5ADF",
                            fontWeight: "500",
                            fontSize: 14,
                          }}
                        >
                          {/* {console.log(data.UserGame.length, "kkkjggy")} */}
                          Joined Member: {data.UserGame.length}
                        </Text>
                      </View>

                      <View
                        style={{
                          height: responsiveHeight(5),
                          justifyContent: "center",
                          borderRadius: 20,
                          width: responsiveWidth(80),
                          marginTop: 10,
                          backgroundColor: "#EDEAFB",
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 10,
                            color: "#6A5ADF",
                            fontWeight: "500",
                            fontSize: 14,
                          }}
                        >
                          Joined Fees: ₹ {data.noOfPrice}
                        </Text>
                      </View>

                      {/* <Text
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: 13,
                          marginTop: 5,
                        }}
                      >
                        15 minutes left to exam start
                      </Text> */}

                      <TouchableOpacity
                        style={{
                          height: responsiveHeight(4.8),
                          justifyContent: "center",
                          borderRadius: 25,
                          width: responsiveWidth(28),
                          marginTop: 20,
                          backgroundColor: "#A9A3E9",
                          alignSelf: "flex-start",

                        }}
                        // disabled={data.isJoined}
                        onPress={() => navigation.navigate("QuizType", { joinedMembers: data.UserGame.length, amount: data.noOfPrice,g_idd:data._id,tsedule:data.schedule })}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "400",
                            alignSelf: "center",
                            fontSize: 16,
                          }}
                        >
                          Join Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  color: "red",
                  justifyContent: "center",
                  fontFamily: "Jaldi-Regular",
                  alignItems: "center",
                  borderColor: "red",
                  borderRadius: 10,
                  marginVertical: 20,
                  marginHorizontal: 20,
                  paddingVertical: 20,
                  fontSize: 18,
                }}
              >
                No data found
              </Text>
            )}

          </ScrollView>



        </ScrollView>

        <View
          style={{
            height: responsiveHeight(8),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: responsiveWidth(100),
            backgroundColor: "#6A5AE0",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{ alignSelf: "center" }}
            onPress={() => { handleLinkPress(ylink) }}
          >
            <Image
              source={require("../images/yt.webp")}
              style={{
                tintColor: '#A9A9A9',
                height: responsiveHeight(2.4),
                width: responsiveWidth(5.8),
                alignSelf: "center",
              }}
            />

            <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
              Youtube
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => { handleLinkPress(tlink) }}
          >
            <Image
              source={require("../images/gram.webp")}
              style={{
                tintColor: "#A9A9A9",
                height: responsiveHeight(2.4),
                width: responsiveWidth(5.2),
                alignSelf: "center",
              }}
            />

            <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
              Telegram
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => { handleLinkPress(elink) }}
          >
            <Image
              source={require("../images/tmail.png")}
              style={{
                tintColor: "#A9A9A9",
                height: responsiveHeight(2.4),
                width: responsiveWidth(5.8),
                alignSelf: "center",
              }}
            />

            <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
              Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("Introduction")}
          >
            <Image
              source={require("../images/intr.png")}
              style={{
                tintColor: "#A9A9A9",
                height: responsiveHeight(2.4),
                width: responsiveWidth(5.9),
                alignSelf: "center",
              }}
            />

            <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
              Introduction
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              source={require("../images/usericon.png")}
              style={{
                tintColor: "#A9A9A9",
                height: responsiveHeight(2.5),
                width: responsiveWidth(4.5),
                alignSelf: "center",
              }}
            />

            <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
