import React from "react";
import { View,SafeAreaView } from "react-native";
import Header from "../components/insta/header";
import Followers from "../components/insta/followers";
import HighLights from "../components/insta/highLights";
import Posts from "../components/insta/posts";
import { useNavigation } from "@react-navigation/native";

function Insta({navigation}){
 return (
   <SafeAreaView   style={{flex:1,backgroundColor:'white'}}>
     <Header/>
     <Followers/>
     <HighLights/>
     <Posts/>
   </SafeAreaView>
 )
}
//yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G
export default Insta;