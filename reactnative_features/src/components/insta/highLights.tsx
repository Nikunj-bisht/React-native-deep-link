import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

export function RenderItem({item,onP}) {
  return (
    <TouchableOpacity
    onPress={onP}
      style={{
        marginRight: 20,
        padding: 3,
        borderRadius: 50,
        borderColor: 'grey',
        borderWidth: 0.4,
      }}>
      <Image
        source={{uri: item.src.small}}
        style={{width: 60, height: 60, borderRadius: 50}}
      />
    </TouchableOpacity>
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
    <View style={{height: 110, paddingHorizontal: 12, marginTop: 18}}>
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
