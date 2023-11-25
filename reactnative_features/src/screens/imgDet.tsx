import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import React from 'react';

function ImgDet() {
    const customTransition = SharedTransition.custom((values) => {
        'worklet';
        return {
          height: withSpring(values.targetHeight),
          width: withSpring(values.targetWidth),
          originX: withSpring(values.targetOriginX),
          originY: withSpring(values.targetOriginY),
        };
      });
  return <Animated.View sharedTransitionStyle={customTransition} style={{flex:1}} sharedTransitionTag=''></Animated.View>;
}

export default ImgDet;
