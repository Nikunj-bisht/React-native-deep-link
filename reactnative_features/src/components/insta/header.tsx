import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header() {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', flex: 0.4, alignItems: 'center'}}>
        <Icon name="lock" size={18} />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            marginLeft: 10,
            marginRight: 10,
          }}>
          nikunj_bisht
        </Text>
        <Icon name="angle-down" size={18}></Icon>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 0.16,
          alignItems:'center'
        }}>
        <Icon name="plus-square-o" size={22}></Icon>
        <Icon name="navicon" size={22}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
});

export default Header;
