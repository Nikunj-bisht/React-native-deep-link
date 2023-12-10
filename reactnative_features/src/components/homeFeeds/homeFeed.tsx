import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RenderItem} from '../insta/highLights';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';
import Comments from './comments';


function HeaderHome() {
  const navigation = useNavigation();

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
              onP={() => navigation.navigate('imgdet', {url: item.src.large})}
            />
          )}
        />
      )}
    </View>
  );
}

function FollowUserCard({item}) {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        alignItems: 'center',
        borderWidth: 0.6,
        margin: 10,
        paddingVertical: 12,
        borderColor: '#d3d3d3',
      }}>
      <Image
        source={{uri: item.src.medium}}
        style={{width: 120, height: 120, borderRadius: 60}}
      />
      <Text style={{marginTop: 12}}>{item.photographer}</Text>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: '#2979ff',
          marginTop: 12,
          paddingHorizontal: 66,
          paddingVertical: 8,
        }}>
        <Text style={{color: 'white'}}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

function RenderPost({item, index, followList,openComment}) {
  const isLiked = useSharedValue(0, false);
  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(isLiked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });
  const likedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(isLiked.value, {duration: -200}),
        },
      ],
      opacity: isLiked.value,
      // backgroundColor:'red'
    };
  });
  return (
    <>
      {index === 1 && (
        <View style={{}}>
          <FlashList
            extraData={followList}
            horizontal
            data={followList}
            estimatedItemSize={100}
            renderItem={({item}) => <FollowUserCard item={item} />}
          />
        </View>
      )}
      <View style={{marginTop: 10, marginBottom: 30}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 50}}
            source={{uri: item.src.tiny}}
          />
          <Text style={{marginLeft: 8,fontWeight:'600'}}>{item.photographer}</Text>
        </View>
        <Image
          style={{height: 350, marginTop: 12}}
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
              overflow: 'hidden',
            }}>
            <View>
              <Animated.View style={[outlineStyle]}>
                <Icon
                  onPress={() =>
                    (isLiked.value = withSpring(isLiked.value ? 0 : 1))
                  }
                  color={'black'}
                  name="heart-o"
                  size={26}
                />
              </Animated.View>

              <Animated.View
                style={[
                  StyleSheet.absoluteFill,
                  likedStyle,
                  {position: 'absolute', left: 0},
                ]}>
                <Icon
                  onPress={() =>
                    (isLiked.value = withSpring(isLiked.value ? 0 : 1))
                  }
                  color={'red'}
                  name="heart"
                  size={26}
                />
              </Animated.View>
            </View>

            <Icon onPress={()=>openComment()} name="comment-o" size={26} />
            <Icon name="send-o" size={26} />
          </View>
          <Icon name="bookmark-o" size={26} />
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            flexDirection: 'row',
            marginTop: 12,
            flex: 1,
          }}>
          <Text style={{fontWeight: '600'}}>{item.photographer}</Text>
          <Text
            numberOfLines={2}
            style={{
              width: '75%',
              flexWrap: 'wrap',
              marginLeft: 5,
              textAlign: 'left',
            }}>
            {item.alt}
          </Text>
        </View>
      </View>
    </>
  );
}

export default function HomeFeedMain() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [followList, setFollowList] = useState([]);
  const [index,setIndex] = useState(-1)
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["1%",'80%'],[]);

  // callbacks
  function getData() {
    fetch(
      `https://api.pexels.com/v1/search?query=parties&per_page=32&page=${page}`,
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
  function openComment(){
      setIndex(1)
  }
  function closeComment(i){
    if(i==0){
      setIndex(0)
bottomSheetRef.current?.close();
    }
    // if(i)
  }
  return (
    <View style={{flex: 1}}>

      {data.length > 0 && (
        <FlashList
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RenderPost
              followList={index === 1 ? followList : []}
              item={item}
              index={index}
              openComment={openComment}
            />
          )}
          estimatedItemSize={100}
          ListHeaderComponent={() => <HeaderHome />}
        />
      )}
       <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={(i)=>closeComment(i,'i')}
        
      >
       <Comments/>
      </BottomSheet>
    </View>
  );
}
