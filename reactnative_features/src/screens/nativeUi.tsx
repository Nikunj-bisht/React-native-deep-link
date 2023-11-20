import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import TetComp from '../components/nativeui';
interface Props{
onClick:Function;
style:ViewStyle;
text:string;
}
class MyTextView extends React.Component<Props> {
  
  render() {
    return (
      <TetComp
        {...this.props}
      />
    );
  }
}



function NativeUi() {
 function call(){
    console.log('hello react')
      }
  return <MyTextView onClick={()=>call()} style={{flex: 1}} 
  text={'Setting a text on a Custom Native Androd View'}
  
  />;
}

export default NativeUi;
