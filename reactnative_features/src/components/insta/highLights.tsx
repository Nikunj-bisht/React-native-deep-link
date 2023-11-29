import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export function RenderItem({item,onP,borderColor=null,style}) {
  return (
    <View style={{alignItems:'center',marginRight:20}}>

    <TouchableOpacity
    onPress={onP}
      style={{
        // marginRight: 20,
        padding: 3,
        borderRadius: 50,
        borderColor: 'grey',
        borderWidth: 0.4,
        // alignItems:'center'
      }}>
      <Image
        source={{uri: item.src.small}}
        style={[{width: 60, height: 60, borderRadius: 50},style]}
      />
    </TouchableOpacity>
    <View style={{alignItems:'center',marginTop:5}}>

      <Text numberOfLines={1} style={{width:70,textAlign:'center'}}>{item.photographer}</Text>
    </View>
    </View>

  );
}

export default function HighLights() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=10', {
      headers: {
        Authorization:
          'yKt6IciAc8Wgqf1A6C4RwKEa8y4nis42UQgRkhsdOJDpC0gDUOya2O1G',
      },
    })
      .then(res => res.json())
      .then(dat => setData(dat.photos));
  }, []);
  return (
    <View style={{height: 150, paddingHorizontal: 12, marginTop: 18}}>
      {data.length > 0 && (
        <FlashList
          estimatedItemSize={300}
          extraData={data}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{justifyContent: 'space-around', paddingHorizontal: 10}}
          renderItem={({item}) => (
            <RenderItem item={item} onP={() => navigation.navigate('imgdet')} />
          )}
        />
      )}
    </View>
  );
}
