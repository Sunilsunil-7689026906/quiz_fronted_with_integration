import { View, Text, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { } from 'react-native-gesture-handler';



const Notification = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={{height:responsiveHeight(13),width:responsiveWidth(100),justifyContent:'center',backgroundColor:'#6A5AE0',paddingHorizontal:20}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf:'flex-start',marginTop:30 }}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>

                <Text style={{color:'#fff',fontSize:18,fontWeight:'500',alignSelf:'center',marginTop:30,marginLeft:'5%'}}>Notification</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginHorizontal:20}}>
                    <View style={{flex:0.65,alignSelf:'center'}}>
                        <Text style={{fontSize:16}}>Quiz Invitation</Text>
                        <Text style={{fontSize:13,color:'#A8A8A8'}}>Ginger Williamson challenged you Biology...</Text>
                    </View>

                    <View style={{flex:0.25}}>
                    <Text style={{fontSize:13,color:'#A8A8A8'}}>35 mins ago</Text>
                    <Image source={require('../images/delete.png')} style={{ height: responsiveHeight(2.4),tintColor:'#6A5AE0',marginTop:10, width: responsiveWidth(4.8),alignSelf:'center' }} />
    
                    </View>

                </View>
                <View style={{borderBottomWidth:0.7,marginTop:15,marginHorizontal:15}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginHorizontal:20}}>
                    <View style={{flex:0.65,alignSelf:'center'}}>
                        <Text style={{fontSize:16}}>Quiz Invitation</Text>
                        <Text style={{fontSize:13,color:'#A8A8A8'}}>Ginger Williamson challenged you Biology...</Text>
                    </View>

                    <View style={{flex:0.25}}>
                    <Text style={{fontSize:13,color:'#A8A8A8'}}>35 mins ago</Text>
                    <Image source={require('../images/delete.png')} style={{ height: responsiveHeight(2.4),tintColor:'#6A5AE0',marginTop:10, width: responsiveWidth(4.8),alignSelf:'center' }} />
    
                    </View>

                </View>
                <View style={{borderBottomWidth:0.7,marginTop:15,marginHorizontal:15}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginHorizontal:20}}>
                    <View style={{flex:0.65,alignSelf:'center'}}>
                        <Text style={{fontSize:16}}>Quiz Invitation</Text>
                        <Text style={{fontSize:13,color:'#A8A8A8'}}>Ginger Williamson challenged you Biology...</Text>
                    </View>

                    <View style={{flex:0.25}}>
                    <Text style={{fontSize:13,color:'#A8A8A8'}}>35 mins ago</Text>
                    <Image source={require('../images/delete.png')} style={{ height: responsiveHeight(2.4),tintColor:'#6A5AE0',marginTop:10, width: responsiveWidth(4.8),alignSelf:'center' }} />
    
                    </View>

                </View>
                <View style={{borderBottomWidth:0.5,marginTop:15,marginBottom:5,marginHorizontal:15}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginHorizontal:20}}>
                    <View style={{flex:0.65,alignSelf:'center'}}>
                        <Text style={{fontSize:16}}>Quiz Invitation</Text>
                        <Text style={{fontSize:13,color:'#A8A8A8'}}>Ginger Williamson challenged you Biology...</Text>
                    </View>

                    <View style={{flex:0.25}}>
                    <Text style={{fontSize:13,color:'#A8A8A8'}}>35 mins ago</Text>
                    <Image source={require('../images/delete.png')} style={{ height: responsiveHeight(2.4),tintColor:'#6A5AE0',marginTop:10, width: responsiveWidth(4.8),alignSelf:'center' }} />
    
                    </View>

                </View>
                <View style={{borderBottomWidth:0.7,marginTop:15,marginBottom:5,marginHorizontal:15}}></View>


            </ScrollView>
        </View>
    )
}

export default Notification