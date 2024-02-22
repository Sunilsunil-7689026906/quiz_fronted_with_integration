import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";


const Percentage = ({ navigation }) => {
  const [data, setdata] = useState([])
  const [filterText, setFilterText] = useState("");
  const [logodata, setLogodata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [imgs, setimgs] = useState("")



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
            console.log(result.data.logo, "logoimg")
            setLogodata(result.data.logo)
          }
        })
        .catch(error => console.log('error', error));


    } catch (error) {

    }
  }

  const correctApi = async (name) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${base_url}/correct-percent?&name=${name}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success == true) {
            console.log(result.data.joingGame)
            setdata(result.data.joingGame)

          }
          else {
            console.log(result.message, "else");
          }
        })
        .catch(error => console.log('error', error));

    } catch (error) {
      console.log(error);
    }
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      correctApi()
      setRefreshing(false);
    }, 2000);
  }, []);

  // useEffect(async () => {
  //   setimgs(await AsyncStorage.getItem("pr"))
  //   // alert(avatar)

  // }, [])


  useEffect(async () => {
    setimgs(await AsyncStorage.getItem("pr"))
    logoApi()
    correctApi({ name: filterText })
  }, [filterText]);

  return (
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
              style={{ marginRight: 9, alignSelf: "center", marginTop: 3 }}
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
              style={{ marginRight: 9, alignSelf: "center", marginTop: 3 }}
              onPress={() => navigation.navigate("MyBalance")}
            >
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 22,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                color: "#C8C8C8",
                fontWeight: "500",
                fontSize: 15,
                alignSelf: "flex-start",
              }}
            >
              Home
            </Text>
          </TouchableOpacity>

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
                color: "#fff",
                fontWeight: "400",
                fontSize: 16,
                alignSelf: "flex-start",
                borderBottomWidth: 1,
                borderColor: "#fff",
              }}
            >
              Correct %
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: responsiveHeight(8.1),
          flexDirection: "row",
          width: responsiveWidth(100),
          marginTop: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          backgroundColor: "#6A5AE0",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: responsiveHeight(5.5),
            width: responsiveWidth(88),
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 10,
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flex: 0.15,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={{
                tintColor: "#C0C0C0",
                height: responsiveHeight(3),
                width: responsiveWidth(6),
                marginLeft: 10,
              }}
            />
          </View>

          <View
            style={{
              flex: 0.8,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <TextInput
              onChangeText={(value) => setFilterText(value)}
              require
              placeholder="Search here.."
              placeholderTextColor={"#000"}
              style={{
                color: "#000",
                marginLeft: 15,
                fontWeight: "400",
                fontSize: 17,
                fontFamily: "Jaldi-Regular",
              }}
            />
          </View>
        </View>

        {/* <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../images/calender.png")}
            style={{
              tintColor: "#fff",
              height: responsiveHeight(4),
              width: responsiveWidth(8),
              marginLeft: 10,
            }}
          />
        </View> */}
      </View>


      <View style={{ height: responsiveHeight(66), marginBottom: 0 }}>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

          {
            data?.map((res) => {
              console.log(res,"percentress");
              return (
                <>
                  <View
                    style={{
                      height: responsiveHeight(45),
                      width: responsiveWidth(90),
                      marginBottom: 10,
                      paddingHorizontal: 20,
                      backgroundColor: "#fff",
                      alignSelf: "center",
                      marginTop: 20,
                      borderRadius: 5,
                      elevation: 10,
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
                      {res.gameNameInEnglish}
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: 14,
                        marginTop: 5,
                      }}
                    >
                      Rank : #{res.rank}
                    </Text>

                    <View style={{ borderBottomWidth: 0.6, marginTop: 10 }}></View>

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

                      <Text style={{ alignSelf: "center", marginLeft: 10, fontSize: 13 }}>
                        {new Date(res.schedule * 1000).toDateString()}
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

                      <Text style={{ alignSelf: "center", marginLeft: 10, fontSize: 13 }}>
                        {res.noOfQuestion} Questions | Time {parseInt(parseInt(res.duration) / 60000)} mins
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
                        Joined : {data?.length}
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
                        Joined Fees: ₹{res.pricePool}
                      </Text>
                    </View>

                    <View
                      style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                      <TouchableOpacity
                        style={{
                          height: responsiveHeight(4.8),
                          justifyContent: "center",
                          borderRadius: 25,
                          width: responsiveWidth(38),
                          marginTop: 20,
                          backgroundColor: "#6A5AE0",
                        }}
                        // onPress={() => navigation.navigate("WinnerDetail",{gameid:res?._id,noOfQue:res?.noOfQuestion})}

                        onPress={() => navigation.navigate("WinnerDetail",{gameid:res?._id,noOfQue:res?.noOfQuestion})}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "400",
                            alignSelf: "center",
                            fontSize: 16,
                          }}
                        >
                          Leaderboard
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          height: responsiveHeight(4.8),
                          justifyContent: "center",
                          borderRadius: 25,
                          width: responsiveWidth(38),
                          marginTop: 20,
                          backgroundColor: "#6A5AE0",
                        }}
                        onPress={() => navigation.navigate("AllLeaderboard",{gameid:res?._id,noOfQue:res?.noOfQuestion})}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "400",
                            alignSelf: "center",
                            fontSize: 16,
                          }}
                        >
                          Show Result
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )
            })
          }

        </ScrollView>
      </View>


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
        <TouchableOpacity style={{ alignSelf: "center" }}>
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
              width: responsiveWidth(5),
              alignSelf: "center",
            }}
          />

          <Text style={{ color: "#A9A9A9", fontWeight: "400", fontSize: 12 }}>
            Telegram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("Dummy")}
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
  );
};

export default Percentage;
