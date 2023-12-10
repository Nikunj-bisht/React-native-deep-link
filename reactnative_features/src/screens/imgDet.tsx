import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import React from 'react';
import { Image } from 'react-native';

function ImgDet(props) {
  console.log(props.route)
    const customTransition = SharedTransition.custom((values) => {
        'worklet';
        return {
          height: withSpring(values.targetHeight),
          width: withSpring(values.targetWidth),
          originX: withSpring(values.targetOriginX),
          originY: withSpring(values.targetOriginY),
        };
      });
  return <Animated.View sharedTransitionStyle={customTransition} style={{flex:1}} sharedTransitionTag=''>
    <Image style={{height:'100%',width:'100%'}} source={{uri:props.route.params.url}}/>
  </Animated.View>;
}

export default ImgDet;
