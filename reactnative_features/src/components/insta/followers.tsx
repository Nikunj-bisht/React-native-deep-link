import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon  from "react-native-vector-icons/FontAwesome";
const data = [{
    title:"Posts",
    val:80
},{
    title:"Followers",
    val:307
},{
    title:"Following",
    val:805
}]
export default function Followers(){

   return (
    <>
    <View style={styles.container}>
        <View style={{}}>
            <Image style={{width:80,height:80,borderRadius:50}} source={{uri:"https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/397349613_346279128075736_6088170981125175851_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ptTsSFXHjl8AX8BMLoJ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPqhkAI0sBI2S8OCHNFBuwGUkN4X7JR0bxJoEyTWWqyA&oe=65660FA7&_nc_sid=8b3546"}}></Image>
            <Icon name="plus-circle" size={25} style={{position:'absolute',marginTop:55,marginLeft:60,color:'#2196f3',backgroundColor:'white',borderRadius:50}} color='white'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:0.7}}>
{
    data.map(i=>{
        return (
            <View style={{alignItems:'center'}}>
                <Text>{i.val}</Text>
                <Text>{i.title}</Text>

            </View>
        )
    })
}
        </View>
    </View>
    <Text style={{marginLeft:15,marginTop:12,fontWeight:'600',fontSize:16}}>Nikunj Bisht</Text>
    <Text style={{marginLeft:15,marginTop:8,fontSize:16}}>🚩</Text>

    </>
   )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:13,
        marginTop:18
    }
})

