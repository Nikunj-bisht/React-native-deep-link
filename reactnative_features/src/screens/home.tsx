import React from 'react';
import {View, Button} from 'react-native';
interface Iprops {
  navigation: any;
}
function Home(props: Iprops) {
  const {navigation} = props;
  function nativesc() {
    navigation.navigate('nativeui');
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Button title="Native" onPress={nativesc.bind({})}></Button>
      <Button
        title="Insta"
        onPress={() => navigation.navigate('insta')}></Button>
    </View>
  );
}

export default Home;
