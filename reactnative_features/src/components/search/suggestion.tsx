import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Video from 'react-native-video';

function SuggestionPostRow({item}) {
  return <View style={{flexDirection:'row',height:300}}>
     <View style={{flex:0.65}}>
        <View style={{flex:0.5,flexDirection:'row'}}>
<Image source={{uri:item.img1.src.medium}} style={{flex:0.5,margin:2}}/>
<Image source={{uri:item.img2.src.medium}} style={{flex:0.5,margin:2}}/>

        </View>
        <View style={{flex:0.5,flexDirection:'row'}}>
<Image source={{uri:item.img1.src.medium}} style={{flex:0.5,margin:2}}/>
<Image source={{uri:item.img2.src.medium}} style={{flex:0.5,margin:2}}/>

        </View>
     </View>
     <View style={{flex:0.35}}>
            <Video resizeMode='cover' style={{
            flex: 1,
            height: 300,
            // width: Dimensions.get('screen').width,
            //   zIndex: -1,
          }} source={{uri:item.video.video_files[0].link}}/>
        </View>
  </View>;
}

function Suggestion() {
  const [mixSuggestionData, setMixSuggestionData] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.pexels.com/v1/search?query=nature&per_page=32&page=${1}`,
        {
          headers: {
            Authorization:
              'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
          },
        },
      ),
      fetch(
        `https://api.pexels.com/videos/popular?per_page=1&page=12&min_height=${300}`,
        {
          headers: {
            Authorization:
              'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
          },
        },
      ),
    ]).then(async data => {
      let det1 = await data[0].json();
      let det2 = await data[1].json();
      let len1 = det1.photos.length - 1,
        len2 = det2.videos.length;
      let finalObj = [];
      while (len1 > 0) {
        let obj = {
          img1: {},
          img2: {},
          img3: {},

          img4: {},
          video: {},
        };
        while (len1 > 0) {
          obj.img1 = det1.photos[len1--];

          obj.img2 = det1.photos[len1--];
          obj.img3 = det1.photos[len1--];
          obj.img4 = det1.photos[len1--];
          obj.video = det2.videos[len2 - 1];
        }
        finalObj.push(obj);
        setMixSuggestionData(finalObj);
      }
    });
  }, []);
  console.log(mixSuggestionData[0],'mix')
  return (
    <View style={{flex:1}}>
      {mixSuggestionData ? (
        <FlashList
          renderItem={({item}) => <SuggestionPostRow item={item} />}
          data={mixSuggestionData}
        />
      ) : null}
    </View>
  );
}

export default Suggestion;
