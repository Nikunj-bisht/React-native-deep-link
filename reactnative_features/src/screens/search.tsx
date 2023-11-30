import React from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import SuggestionPost from "../components/search/suggestion";
function Header(){
    return (
        <View style={{borderRadius:12,flexDirection:'row',paddingHorizontal:12,backgroundColor:'#eeeeee',paddingVertical:12,marginHorizontal:8}}>
           <Icon size={22} name="search" style={{marginRight:15}}/>
           <TextInput placeholder="Search"/>
        </View>
    )
}
export function Search(){
 
   return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <Header/>
      <SuggestionPost/>
      </SafeAreaView>
   )


}