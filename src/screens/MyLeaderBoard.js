import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import { useSocket } from "./Context/SocketContext";
import { disabled } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import io from 'socket.io-client';
import AsyncStorage from "@react-native-async-storage/async-storage";

//questionId,gameId,question,timeTaken,answer,rawPoints,rM,rC
//type:"RIGHT" or "WRONG"


const MyLeaderBoard = ({ navigation }) => {

  const [select, setSelect] = useState("");
  const [checked, setChecked] = useState("first");
  const [correct, setCorrect] = useState({});
  const [save, setSave] = useState(false);
  const [confirm, setConfirm] = useState(0)

  const [final,] = useState('')

  const [mysocket, setMySocket] = useState(null);

  const [seconds, setSeconds] = useState(25);
  const [initialSeconds, setInitialSeconds] = useState(25);
  const [isTimerRunning, setTimerRunning] = useState(true);

  const [activeanalysis, setActiveanalysis] = useState(false);


  const socket = useSocket();

  // console.log(socket, "myleaderboardsocket");

  const [left, setleft] = useState(0)
  const [question, setQuestion] = useState("");
  const [option, setoption] = useState([]);
  const [noOfQuestion, setnoOfQuestion] = useState()
  const [mainValuerl, setmainValuerl] = useState(5.5)
  const [correctvalue, setcorrectvalue] = useState(5.5)
  const [sumdata, setsumdata] = useState(0)
  const [sumdata2, setsumdata2] = useState(0)
  const [allData, setallData] = useState()

  const [getId, setGetId] = useState()
  const [mygameId,setMygameId] = useState()
  const [myanswer,setMyanswer] = useState()



  useEffect(() => {

    const socket = io('http://3.111.23.56:5059');

    // Event listener for connection success
    socket.on('connect', () => {
      console.log('Connected to the socket server');

      // Emitting the joinGame event after connecting
      const joinGameData = {
        gameId: "659c3fdd9b22fdcebbdd7e88",
        userId: "65ab8b6e9719dcb0ce2758ae",
      };
      socket.emit('joinGame', joinGameData);
    });









    // Event listener for receiving messages from the server
    socket.on('message', (data) => {
      console.log('Received message from the server: kkk', data);
    });

    // Event listener for receiving questions from the server
    socket.on('get-question', async (questionData) => {
      try {
        await setleft(questionData.q_left)
        await setnoOfQuestion(questionData.noOfQuestion)
        let leg = await AsyncStorage.getItem("lang")
        if (leg == "ENGLISH") {

          await setQuestion(questionData.question.questionInEnglish);
          await setoption(questionData.question.optionsInEnglish)
          await setGetId(questionData.question._id)
          await setMygameId(questionData.question.gameId)
          await setMyanswer()

        } else {
          await setQuestion(questionData.question.questionInHindi);
          await setoption(questionData.question.optionsInHindi);
          await setGetId(questionData.question._id)
          await setMygameId(questionData.question.gameId)
          await setMyanswer(questionData.question.optionsInEnglish[0].id)


        }
        // Update the component state with the received question
        console.log('Received question from the server: jon', JSON.stringify(questionData));
        await setSelect("")
      } catch (error) {
        console.log(error);
      }

    });
  }, []);

  const right = 5.5;
  const wrong = 3.5;

  const A = 0;
  const B = 1;
  const C = 2;
  const D = 3;
  const E = 4;
  const F = 5;
  const G = 6;
  const H = 7;
  const I = 8;
  const J = 9;


  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(interval);
          // Handle timer completion here
        }
      }, 1000);
    }

    // Clear the interval when the component unmounts or when the timer is stopped
    return () => clearInterval(interval);
  }, [seconds, isTimerRunning]);



  const calculation = (a, b) => {
    // alert(a)
    let a1 = parseFloat(a);
    let a2 = parseFloat(b);

    let sum = parseFloat(a1 + a2).toFixed(2);
    console.log(sum);
    let string = sum.toLocaleString()
    console.log("olll", string);
    let string2 = string.slice(0, 2)
    let arr = string.split(".")
    let tostr = arr[0].toString()
    let sum2 = 0;
    for (let i = 0; i < tostr.length; i++) {
      sum2 += parseInt(tostr[i])

    }
    setsumdata(parseFloat(`${sum2}.${arr[1]}`) + initialSeconds)
    // console.log(`${sum2}.${arr[1]}`)
    setsumdata2(`${sum2}.${arr[1]}`)

  }

  const savebtn = () => {
    // alert(parseFloat(sumdata2))
    // alert(parseFloat(parseFloat(initialSeconds)))

    let sum = parseFloat(parseFloat(sumdata2) + parseFloat(initialSeconds)).toFixed(2);
    console.log(sum);
    let string = sum.toLocaleString()
    console.log("olll", string);
    let string2 = string.slice(0, 2)
    let arr = string.split(".")
    let tostr = arr[0].toString()
    let sum2 = 0;
    for (let i = 0; i < tostr.length; i++) {
      sum2 += parseInt(tostr[i])

    }
    setallData(parseFloat(`${sum2}.${arr[1]}`).toFixed(1))

  }
  const handleStopTimer = async () => {
    setTimerRunning(false);
    setActiveanalysis(true)
    // Store the remaining timer value in a variable
    await setInitialSeconds(seconds);
  };



  const sendData = async () => {
    // alert(allData)
    console.log(getId,"getId");
    console.log(mygameId,"mygameId");
    console.log(question,"question");
    console.log(initialSeconds,"initialSeconds");
    console.log(select,"select");
    console.log(allData,"allData");
    console.log(mainValuerl,"mainValuerl");
    console.log(correct,"correct");


    const socket = io('http://3.111.23.56:5059');
    socket.emit("give_answer", {

      questionId: await getId,
      gameId: await mygameId,
      question: await question,
      timeTaken: await initialSeconds,
      answer: await select,
      rawPoints: await allData,
      rM: await mainValuerl,
      rC: await correct
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            height: responsiveHeight(9),
            width: responsiveWidth(100),
            justifyContent: "center",
            backgroundColor: "#6A5AE0",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ justifyContent: "center", alignSelf: "center" }}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(5),
                width: responsiveWidth(40),
                borderRadius: 10,
                backgroundColor: save == true ? "#EDEAFB" : "#6A5AE0",
                justifyContent: "center",
                marginLeft: "15%",
              }}
              onPress={() => navigation.navigate("InactiveLeaderBoard")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "500",
                  alignSelf: "center",
                  color: save == true ? "#6A5AE0" : "#fff",
                }}
              >
                Leaderboard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(4),
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 10,
                width: responsiveWidth(22),
                borderWidth: 1,
                borderColor: "#fff",
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
                {left}/{noOfQuestion}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: responsiveHeight(32),
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
              marginTop: 20,
              fontSize: 17,
              fontWeight: "500",
              color: "#000",
            }}
          >
            Q. {question}
          </Text>

          {
            option?.map((res) => {
              return (
                <>
                  <View
                    style={{ marginTop: 10, flexDirection: "row", marginRight: 20 }}
                  >
                    <TouchableOpacity
                      style={{
                        height: responsiveHeight(3.5),
                        marginRight: 10,
                        backgroundColor: select == res.id ? "#6A5AE0" : "#fff",
                        width: responsiveWidth(7),
                        borderWidth: 1,
                        borderRadius: 100,
                        justifyContent: "center",
                      }}
                      onPress={() => setSelect(res.id)}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          fontWeight: "600",
                          fontSize: 18,
                          color: select == res.id ? "#fff" : "#6A5AE0",
                        }}
                      >
                        {res.id}
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ alignSelf: "center", fontSize: 13 }}>
                      {res.answer}
                    </Text>
                  </View>

                </>
              )
            })
          }

        </View>

        <View
          style={{
            height: responsiveHeight(8),
            flexDirection: "row",
            width: responsiveWidth(90),
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 7,
            borderRadius: 5,
            elevation: 5,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 5,
              marginHorizontal: 20,
              height: responsiveHeight(7),
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <RadioButton
                color="#0085FF"
                uncheckedColor="#B9C3CC"
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => { setChecked("first"); setmainValuerl(5.5) }}
              />
            </View>

            <View style={{ marginLeft: 5, justifyContent: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Right</Text>
            </View>

            <Image
              source={require("../images/right2.png")}
              style={{
                height: responsiveHeight(2.6),
                width: responsiveWidth(5.2),
                alignSelf: "center",
                marginLeft: 5,
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 5,
              marginHorizontal: 20,
              height: responsiveHeight(7),
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <RadioButton
                color="#0085FF"
                uncheckedColor="#B9C3CC"
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => { setChecked("second"); setmainValuerl(3.5) }}
              />
            </View>

            <View style={{ marginLeft: 5, justifyContent: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Wrong</Text>
            </View>
            <Image
              source={require("../images/wrong.png")}
              style={{
                height: responsiveHeight(4),
                width: responsiveWidth(8),
                alignSelf: "center",
                marginTop: 4,
                marginLeft: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: responsiveHeight(15),
            width: responsiveWidth(90),
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 7,
            borderRadius: 5,
            elevation: 5,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "500",
              color: "#000",
            }}
          >
            Correct %
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                backgroundColor: correct == 0 ? "#000" : "#fff",
                justifyContent: "center",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(0), savebtn(), calculation(mainValuerl, 0) }}
            // onPress={() => { setChecked("second"); setmainValuerl(3.5) }}

            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 0 ? "#fff" : "#000",
                }}
              >
                {A}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "setCorrectcenter",
                backgroundColor: correct == 1 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(1), calculation(mainValuerl, 1) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 1 ? "#fff" : "#000",
                }}
              >
                {B}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 2 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(2), calculation(mainValuerl, 2) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 2 ? "#fff" : "#000",
                }}
              >
                {C}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 3 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(3), calculation(mainValuerl, 3) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 3 ? "#fff" : "#000",
                }}
              >
                {D}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 4 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(4), calculation(mainValuerl, 4) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 4 ? "#fff" : "#000",
                }}
              >
                {E}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 5 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(5), calculation(mainValuerl, 5) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 5 ? "#fff" : "#000",
                }}
              >
                {F}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 6 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(6), calculation(mainValuerl, 6) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 6 ? "#fff" : "#000",
                }}
              >
                {G}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 7 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(7), calculation(mainValuerl, 7) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 7 ? "#fff" : "#000",
                }}
              >
                {H}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 8 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(8), calculation(mainValuerl, 8) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 8 ? "#fff" : "#000",
                }}
              >
                {I}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 9 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(9), calculation(mainValuerl, 9) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 9 ? "#fff" : "#000",
                }}
              >
                {J}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              height: responsiveHeight(25),
              elevation: 10,
              borderRadius: 10,
              width: responsiveWidth(55),
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                marginTop: 7,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Row point Panel
            </Text>

            <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 7,
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>M</Text>

                {checked === "first" ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {right}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {wrong}
                  </Text>
                )}
              </View>

              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>C%</Text>
                {correct == 0 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {A}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 1 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {B}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 2 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {C}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 3 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {D}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 4 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {E}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 5 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {F}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 6 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {G}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 7 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {H}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 8 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {I}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 9 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {J}
                  </Text>
                ) : (
                  <></>
                )}
              </View>

              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>T(Time)</Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  {initialSeconds}
                </Text>
              </View>
            </View>

            <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(11),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  {
                    correct == 0 && checked == 'first' ? <>5.5</> : <></>
                  }
                  {
                    correct == 1 && checked == 'first' ? <>6.5</> : <></>
                  }
                  {
                    correct == 2 && checked == 'first' ? <>7.5</> : <></>
                  }
                  {
                    correct == 3 && checked == 'first' ? <>8.5</> : <></>
                  }
                  {
                    correct == 4 && checked == 'first' ? <>9.5</> : <></>
                  }
                  {
                    correct == 5 && checked == 'first' ? <>1.5</> : <></>
                  }
                  {
                    correct == 6 && checked == 'first' ? <>2.5</> : <></>
                  }
                  {
                    correct == 7 && checked == 'first' ? <>3.5</> : <></>
                  }
                  {
                    correct == 8 && checked == 'first' ? <>4.5</> : <></>
                  }
                  {
                    correct == 9 && checked == 'first' ? <>5.5</> : <></>
                  }

                  {
                    correct == 0 && checked == 'second' ? <>3.5</> : <></>
                  }
                  {
                    correct == 1 && checked == 'second' ? <>4.5</> : <></>
                  }
                  {
                    correct == 2 && checked == 'second' ? <>5.5</> : <></>
                  }
                  {
                    correct == 3 && checked == 'second' ? <>6.5</> : <></>
                  }
                  {
                    correct == 4 && checked == 'second' ? <>7.5</> : <></>
                  }
                  {
                    correct == 5 && checked == 'second' ? <>8.5</> : <></>
                  }
                  {
                    correct == 6 && checked == 'second' ? <>9.5</> : <></>
                  }
                  {
                    correct == 7 && checked == 'second' ? <>1.5</> : <></>
                  }
                  {
                    correct == 8 && checked == 'second' ? <>2.5</> : <></>
                  }
                  {
                    correct == 9 && checked == 'second' ? <>3.5</> : <></>
                  }

                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(8),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(8),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  {initialSeconds}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                height: responsiveHeight(4),
                alignSelf: "center",
                marginTop: 15,
                justifyContent: "center",
                width: responsiveWidth(28),
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ alignSelf: "center", fontWeight: "600", fontSize: 15 }}
              >

                {/* {parseFloat(mainValuerl)+parseFloat(initialSeconds)} */}

                {/* {mainValuerl}+{initialSeconds} */}

                {allData}


              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: responsiveHeight(25),
              width: responsiveWidth(35),
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{
                color: "orange",
                alignSelf: "flex-start",
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Time
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: responsiveHeight(4),
                  alignSelf: "center",
                  borderColor: "green",
                  justifyContent: "center",
                  width: responsiveWidth(9),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                    color: "green",
                  }}
                >
                  {seconds}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "900",
                  color: "green",
                }}
              >
                :
              </Text>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(4),
                  alignSelf: "center",
                  borderColor: "green",
                  justifyContent: "center",
                  width: responsiveWidth(9),
                  marginRight: "5%",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                    color: "green",
                  }}
                >
                  0
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  height: responsiveHeight(5),
                  marginTop: "30%",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  width: responsiveWidth(22),
                  backgroundColor: "#6A5AE0",
                }}
                // onPress={() =>  setSave(true)}
                onPress={() => { handleStopTimer(), savebtn(), setConfirm(1), sendData() }}

              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    alignSelf: "center",
                    fontSize: 16,
                  }}
                >
                  {
                    confirm == 0 ? <><Text>Save</Text></> :
                      <><Text>Confirm</Text></>
                  }

                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(5),
                  alignSelf: "center",
                  marginTop: "5%",
                  justifyContent: "center",
                  borderRadius: 5,
                  width: responsiveWidth(22),
                  backgroundColor: "#6A5AE0",
                }}
                onPress={() => navigation.navigate("Analysis")}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    alignSelf: "center",
                    fontSize: 16,
                  }}
                >
                  Analysis
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyLeaderBoard;
