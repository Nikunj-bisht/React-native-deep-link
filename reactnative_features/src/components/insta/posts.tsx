import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  PanResponder,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

function RenderPosts({item, showModalfun, setShowModal}) {
  // console.log(item.src.medium,'item')
  const panresponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderRelease(e, gestureState) {
        setShowModal(false);
        console.log('release');
      },
    }),
  ).current;
  return (
    <TouchableOpacity
      {...panresponder.panHandlers}
      //   onPressOut={()=>setShowModal(false)}
      onLongPress={() => showModalfun(item)}
      style={{flex: 1, backgroundColor: 'red', ...panresponder.panHandlers}}>
      <Image
        source={{uri: item.src.medium}}
        style={{width: '100%', height: 100}}
      />
    </TouchableOpacity>
  );
}

function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);
  function getData() {
    fetch(
      `https://api.pexels.com/v1/search?query=nature&per_page=32&page=${page}`,
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
    getData();
  }, [page]);
  function showModalfun(item) {
    setCurrent(item);
    setShowModal(true);
  }
  const panresponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderRelease(e, gestureState) {
        setShowModal(false);
        console.log('release');
      },
    }),
  ).current;
  return (
    <View style={{flex: 1, ...panresponder.panHandlers}}>
      <Modal
        onResponderEnd={() => setShowModal(false)}
        visible={showModal}
        transparent={true}>
        <TouchableOpacity
          onPressOut={() => setShowModal(false)}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingHorizontal: 12,
            justifyContent: 'center',
            ...panresponder.panHandlers,
          }}>
          <View style={{flex: 0.5, backgroundColor: 'white', borderRadius: 22}}>
            <View style={{flex: 0.1}}></View>
            <Image source={{uri: current?.src?.large}} style={{flex: 0.8}} />
          </View>
        </TouchableOpacity>
      </Modal>
      {data.length > 0 && (
        <FlashList
          numColumns={3}
          onEndReached={() => setPage(page => page + 1)}
          estimatedItemSize={200}
          data={data}
          extraData={data}
          renderItem={({item}) => (
            <RenderPosts
              item={item}
              showModalfun={showModalfun}
              setShowModal={setShowModal}></RenderPosts>
          )}
        />
      )}
    </View>
  );
}

export default Posts;
