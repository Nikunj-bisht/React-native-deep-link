import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {RenderItem} from '../insta/highLights';
import Icon from 'react-native-vector-icons/FontAwesome';

function HeaderHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=10&page=5', {
      headers: {
        Authorization:
          'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
      },
    })
      .then(res => res.json())
      .then(dat => setData(dat.photos));
  }, []);
  return (
    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:12,paddingTop:12}}>
         <View style={{marginRight:12}}>
            <Image style={{width:60,height:60,borderRadius:50}} source={{uri:"https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/397349613_346279128075736_6088170981125175851_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ptTsSFXHjl8AX8BMLoJ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPqhkAI0sBI2S8OCHNFBuwGUkN4X7JR0bxJoEyTWWqyA&oe=65660FA7&_nc_sid=8b3546"}}></Image>
            <Icon name="plus-circle" size={20} style={{position:'absolute',marginTop:45,marginLeft:40,color:'#2196f3',backgroundColor:'transparent',borderRadius:50}} color='white'/>
        </View>
{

    data.length > 0 && (
        <FlashList
        horizontal
        data={data}
        estimatedItemSize={200}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <RenderItem item={item} onP={undefined} />}
        />
        )
    }
        </View>
  );
}

function RenderPost({item}){
    console.log(item)
    return (
        <View style={{marginTop:50}}>
            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                <Image style={{width:40,height:40,borderRadius:50}} source={{uri:item.src.tiny}}/>
                <Text style={{marginLeft:8}}>{item.photographer}</Text>
            </View>
        <Image style={{height:500,marginTop:12}} source={{uri:item.src.medium}}/>
        </View>
    )
}

export default function HomeFeedMain() {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(0)
  function getData() {
    fetch(
      `https://api.pexels.com/v1/search?query=AI&per_page=32&page=${page}`,
      {
        headers: {
          Authorization:
            'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
        },
      },
    )
      .then(response => response.json())
      .then(dat => {
        setData(old => [...old, ...dat.photos]);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <View style={{flex: 1}}>
        {
            data.length>0 &&
      <FlashList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <RenderPost item={item}/>}
      estimatedItemSize={200}
      ListHeaderComponent={() => <HeaderHome />}
      />
    }
    </View>
  );
}
