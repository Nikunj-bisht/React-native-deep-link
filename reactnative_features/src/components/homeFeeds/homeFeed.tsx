import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {RenderItem} from '../insta/highLights';
import Icon from 'react-native-vector-icons/FontAwesome';

function HeaderHome() {
  const [data, setData] = useState([
    {
      src: {
        small:
          'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/397349613_346279128075736_6088170981125175851_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ptTsSFXHjl8AX8BMLoJ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPqhkAI0sBI2S8OCHNFBuwGUkN4X7JR0bxJoEyTWWqyA&oe=65660FA7&_nc_sid=8b3546',
      },
      photographer: 'Your story',
    },
  ]);
  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=10&page=2', {
      headers: {
        Authorization:
          'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
      },
    })
      .then(res => res.json())
      .then(dat => setData([...data, ...dat.photos]));
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingTop: 12,
      }}>
      {data.length > 0 && (
        <FlashList
          horizontal
          data={data}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <RenderItem
              style={{width: 70, height: 70}}
              item={item}
              onP={undefined}
            />
          )}
        />
      )}
    </View>
  );
}

function FollowUserCard({item}){
  return(
    <View style={{paddingHorizontal:12,alignItems:'center',borderWidth:0.6,margin:10,paddingVertical:12,borderColor:'#d3d3d3'}}>
     <Image source={{uri:item.src.medium}} style={{width:120,height:120,borderRadius:60}}/>
     <Text style={{marginTop:12}}>{item.photographer}</Text>
     <TouchableOpacity  style={{borderRadius:10,backgroundColor:'#2979ff',marginTop:12,paddingHorizontal:66,paddingVertical:8}}>
      <Text style={{color:'white'}}>Follow</Text>
     </TouchableOpacity>
    </View>
  )
}

function RenderPost({item,index,followList}) {
  return (
    <>
    {
      index === 1 && <View style={{}}>
      <FlashList extraData={followList} horizontal data={followList} estimatedItemSize={100} renderItem={({item})=><FollowUserCard item={item}/>}/>
      </View>
    }
    <View style={{marginTop: 10, marginBottom: 30}}>

      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 50}}
          source={{uri: item.src.tiny}}
          />
        <Text style={{marginLeft: 8}}>{item.photographer}</Text>
      </View>
      <Image
        style={{height: 450, marginTop: 12}}
        source={{uri: item.src.medium}}
        />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          paddingTop: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 0.35,
            alignItems: 'center',
          }}>
          <Icon name="heart-o" size={26} />
          <Icon name="comment-o" size={26} />
          <Icon name="send-o" size={26} />
        </View>
        <Icon name="bookmark-o" size={26} />
      </View>
      <View
        style={{paddingHorizontal: 12, flexDirection: 'row', marginTop: 12,flex:1}}>
        <Text numberOfLines={1} style={{fontWeight: '600',width:'18%'}}>{item.photographer}</Text>
        <Text numberOfLines={2} style={{width:"82%",flexWrap:'wrap',marginLeft:5,textAlign:'left'}}>{item.alt}</Text>
      </View>
    </View>
          </>
  );
}

export default function HomeFeedMain() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [followList,setFollowList] = useState([])
  function getData() {
    fetch(
      `https://api.pexels.com/v1/search?query=dragon ball z&per_page=32&page=${page}`,
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
  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=10&page=8', {
      headers: {
        Authorization:
          'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
      },
    })
      .then(res => res.json())
      .then(dat => setFollowList(dat.photos));
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{flex: 1}}>
      {data.length > 0 && (
        <FlashList
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) => <RenderPost followList={index === 1 ? followList : []} item={item} index={index}/>}
          estimatedItemSize={100}
          ListHeaderComponent={() => <HeaderHome />}
        />
      )}
    </View>
  );
}
