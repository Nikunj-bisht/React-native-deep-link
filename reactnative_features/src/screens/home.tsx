import React from 'react';
import {View, Button} from 'react-native';
interface Iprops{
    navigation:any
}
function Home(props:Iprops) {
  const {navigation} = props;
  function nativesc(){
    navigation.navigate('nativeui')
  }
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Button title="Native" onPress={nativesc.bind({})}></Button>
    </View>
  );
}

export default Home;
