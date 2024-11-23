import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

function Reel({item, isPaused, index, pos}) {
  // console.log(item.video_files[0].link);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Video
          paused={isPaused ? isPaused : pos !== index}
          repeat={true}
          onError={(e)=>console.log(e)}
          source={{uri: item.video_files[0].link}}
          style={{
            flex: 1,
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
            //   zIndex: -1,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            marginBottom: 22,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 0.9, justifyContent: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}}
                style={{width: 40, height: 40, borderRadius: 50}}
              />
              <Text style={{color: 'white', fontWeight: '600', marginLeft: 8}}>
                {item.user.name}
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  marginLeft: 8,
                }}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{color: 'white', fontWeight: '500', marginTop: 23}}>
                {item.url}
              </Text>
              <Text style={{color: 'grey', fontWeight: '500', marginTop: 7}}>
                Liked by
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 20,
                borderWidth: 0.3,
                borderColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 4,
                width: '80%',
                backgroundColor: '#424242',
              }}>
              <Icon name="music" color="white" />
              <Text style={{color: 'white', fontWeight: '500', marginLeft: 8}}>
                {item.user.name.toLowerCase()}.Original audio
              </Text>
            </View>
          </View>
          <View style={{flex: 0.1, alignItems: 'center'}}>
            <View>
              <Icon color={'white'} size={23} name="heart-o" />
              <Text style={{color: 'white', fontWeight: '500', marginTop: 13}}>
                1M
              </Text>
            </View>
            <View>
              <Icon
                color={'white'}
                size={23}
                style={{marginTop: 18}}
                name="comment-o"
              />
              <Text style={{color: 'white', fontWeight: '500', marginTop: 13}}>
                1M
              </Text>
            </View>
            <View>
              <Icon
                color={'white'}
                size={23}
                style={{marginTop: 18}}
                name="send-o"
              />
              <Text style={{color: 'white', fontWeight: '500', marginTop: 13}}>
                6M
              </Text>
            </View>

            <Icon
              color={'white'}
              size={23}
              style={{marginTop: 18}}
              name="send-o"
            />
            <Image
              source={{uri: item.image}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                marginTop: 18,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Reels() {
  const [videos, setVideos] = useState([]);
  const [pos, setPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, [isFocused]);
  useEffect(() => {
    fetch(
      `https://api.pexels.com/videos/popular?per_page=5&page=4&min_height=${
        Dimensions.get('screen').height
      }&min_width=${Dimensions.get('screen').width}`,
      {
        headers: {
          Authorization:
            'yKt6IciAc8Wgqf1A6C4Rw4nis42UQgRkhsdOJDpC0gDUOya2O1G',
        },
      },
    )
      .then(res => res.json())
      .then(det => setVideos(det.videos));
  }, []);
  return (
    <View style={{flex: 1}}>
      {videos.length > 0 && (
        <PagerView
          onPageSelected={e => setPos(e.nativeEvent.position)}
          orientation={'vertical'}
          style={{flex: 1}}>
          {videos.map((item, index) => (
            <Reel index={index} isPaused={isPaused} pos={pos} item={item} />
          ))}
        </PagerView>
        // <FlashList
        //   data={videos}
        //   onViewableItemsChanged={(it)=>{
        //      console.log(it,'hey')
        //   }}
        //   viewabilityConfig={{
        //     itemVisiblePercentThreshold:100,
        //     minimumViewTime:1000
        //   }}
        //   onS
        //   estimatedItemSize={300}
        //   renderItem={({item}) => <Reel item={item} />}
        // />
      )}
    </View>
  );
}

export default Reels;
