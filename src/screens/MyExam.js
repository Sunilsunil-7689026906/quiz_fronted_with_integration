import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
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
import moment from "moment";
import { base_url } from "./Base_url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formatTimestamp } from "./../utils/formatDate";
import { formattedTime } from "./../utils/FormateTime";
// import { FormatDateTime, } from './../utils/FormateTime';
// import { formatTimestamp } from "./../utils/formatDate";

const MyExam = ({ navigation }) => {
  const [live, setLive] = useState(0);

  const [hit, setHit] = useState("LIVE");
  const [mydata, setMydata] = useState([]);
  const [completedata, setCompletedata] = useState([]);
  const [seduleTime, setSeduleTime] = useState([]);
  const [filterText, setFilterText] = useState("");

  function convertMillisecondsToDateTime(milliseconds) {
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString();
  }

  const currentDate = new Date();
  const currentTime = currentDate.getTime();



  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const myexamApi = async ({name}) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `${await AsyncStorage.getItem("token")}`
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${base_url}/my-exam?type=${hit}&name=${name}`, requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          if (result.success == true) {
            // console.log(result.data.userGameList[0].Game, "userGameList")
            console.log(`${await AsyncStorage.getItem("token")}`, "token");
            setMydata(result.data.userGameList);

            setSeduleTime(result.data.userGameList[0].schedule - 300000);
            console.log(result.data.userGameList, "completedataaaa");
            setCompletedata(result.data.userGameList);
            // console.log(result.data.userGameList[0]._id, "jjjjjjjjjj");
            await AsyncStorage.setItem("_id2", result.data.userGameList[0]._id);
          } else {
            console.log(result.message, "else");
          }
        })
        .catch((error) => console.log("error", error));
    } catch (error) { }
  };
  

  function navigetLo(times) {
    const currentTimeInMilliseconds = new Date().getTime();
    let availableTime = times - currentTimeInMilliseconds
    const availableMinutes = Math.floor(availableTime / (1000 * 60));
    if(availableMinutes < 0){
      alert("Expiration date ")
          }
    else  if (availableMinutes <= 5) {
      navigation.navigate("Instruction",{
        times:availableMinutes
      });
    }
    else{
      alert(`Wait ${availableMinutes - 5} minutes and try again`); 
      // navigation.navigate("Instruction",{
      //   times:availableMinutes
      // });
    }
   
  }
  useEffect(() => {
    myexamApi({name:filterText})
  }, [filterText]);

  console.log(mydata, "mydataaa");
  console.log(JSON.stringify(completedata), "uuuuuuuu");

  // alert(seduleTime,"SeduleTime")

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
            <Image
              source={require("../images/user.jpg")}
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(12),
                borderRadius: 100,
                alignSelf: "center",
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
          <Image
            source={require("../images/logomain.png")}
            style={{
              height: responsiveHeight(6),
              marginRight: 40,
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
              onPress={()=>navigation.navigate("MyBalance")}>
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
                color: "#fff",
                fontWeight: "400",
                fontSize: 16,
                alignSelf: "flex-start",
                borderBottomWidth: 1,
                borderColor: "#fff",
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            height: responsiveHeight(4.3),
            justifyContent: "center",
            borderRadius: 25,
            borderWidth: live == 0 ? 0 : 1,
            width: responsiveWidth(42),
            marginTop: 20,
            backgroundColor: live == 0 ? "#6A5AE0" : "#fff",
            alignSelf: "flex-start",
          }}
          onPress={() => setLive(0)}
        >
          <Text
            style={{
              color: live == 0 ? "#fff" : "#000",
              fontWeight: "400",
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Live
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: responsiveHeight(4.3),
            borderWidth: live == 1 ? 0 : 1,
            justifyContent: "center",
            borderRadius: 25,
            width: responsiveWidth(42),
            marginTop: 20,
            backgroundColor: live == 1 ? "#6A5AE0" : "#fff",
            alignSelf: "flex-start",
          }}
          onPress={() =>
            setLive(1)
            // , setHit("COMPLETED");
          }
        >
          <Text
            style={{
              color: live == 1 ? "#fff" : "#000",
              fontWeight: "400",
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Completed
          </Text>
        </TouchableOpacity>
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
            style={{ flex: 0.8, justifyContent: "center", alignSelf: "center" }}
          >
            <TextInput
            // onChangeText={(value)=>{
            //   myexamApi(value)
            // }}
            // value={filterText}
            onChangeText={(value)=>setFilterText(value)}
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

      <View style={{height:responsiveHeight(59)}}>
        <ScrollView>
          {live == 0 ? (
            <View>
              {mydata?.length > 0 ? (
                mydata.map((data) => {
                  // console.log(data, 'data');
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
                          {/* {data?.Game[0].gameNameInEnglish} */}
                          {data?.gameNameInEnglish}
                        </Text>
                        <Text
                          style={{
                            color: "#000",
                            fontWeight: "400",
                            fontSize: 14,
                            marginTop: 5,
                          }}
                        >
                          {data?.Game[0].category}
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
                            {data?.Game[0].noOfQuestion} Questions | Time {millisToMinutesAndSeconds(data?.Game[0].duration)} mins
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
                            Joined Member : {data?.Game[0].UserGame.length}
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
                            Joined Fees: ₹{data?.Game[0].entranceAmount}
                          </Text>
                        </View>

                        <Text
                          style={{
                            color: "#000",
                            fontWeight: "500",
                            fontSize: 13,
                            marginTop: 5,
                          }}
                        >
                          15 minutes left to exam start
                        </Text>

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
                          onPress={() => {
                           navigetLo(data?.schedule)
                          }}
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
            </View>
          ) : null}

          {live == 1 ? (
            <View>
              {completedata?.length > 0 ? (
                completedata.map((item) => {
                  console.log(item, "inlinedata");
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
                          SSC 2024 JAN Exam EPT34
                        </Text>
                        <Text
                          style={{
                            color: "#000",
                            fontWeight: "500",
                            fontSize: 14,
                            marginTop: 5,
                          }}
                        >
                          Rank : #{item?.rank}
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
                            {formatTimestamp(item?.schedule)}
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
                            15 Questions | Time 18 mins
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
                            Joined : {item?.businessDate}
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
                            Joined Fees: {item?.amount}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
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
                            onPress={() => navigation.navigate("LeaderboardRank")}
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
                            onPress={() => navigation.navigate("AllQuestion")}
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
                  No data
                </Text>
              )}
            </View>
          ) : null}
        </ScrollView>
      </View>

      <View
        style={{
          marginBottom: 0,
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
              height: responsiveHeight(2.4),
              width: responsiveWidth(5.8),
              alignSelf: "center",
            }}
          />

          <Text style={{ color: "#fff", fontWeight: "400", fontSize: 12 }}>
            Youtube
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Image
            source={require("../images/yt.webp")}
            style={{
              tintColor: "#A9A9A9",
              height: responsiveHeight(2.4),
              width: responsiveWidth(5.8),
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

export default MyExam;
