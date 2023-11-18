import React from 'react';
import {Text, View} from 'react-native';
import TetComp from '../components/nativeui';
class MyTextView extends React.Component {
  render() {
    return (
      <TetComp
        style={{width: '100%', height: 50}}
        text={'Setting a text on a Custom Native Android View'}
      />
    );
  }
}

function NativeUi() {
  return <MyTextView style={{flex: 1}} />;
}

export default NativeUi;
