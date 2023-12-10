import {FlashList} from '@shopify/flash-list';
import React, { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const comments = [
  {
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Nikunj',
    comment: 'Nice click 😍',
    likes: 5,
    time: '5w',
    replies: [
      {
        image:
          'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
        name: 'Nikunj',
        comment: 'Thankyou for the compliment 🙏🏻',
        likes: 6,
        time: '5d',
      },
    ],
  },{
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Random',
    comment: 'Party was awesome lets do it again next week 😍',
    likes: 5,
    time: '5w',
    replies: [
      
    ],
  },{
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Ishwak',
    comment: 'Party was awesome lets do it again next week 😍',
    likes: 5,
    time: '5w',
    replies: [
      
    ],
  },{
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Prateek',
    comment: 'Party was awesome lets do it again next week 😍',
    likes: 5,
    time: '5w',
    replies: [
      
    ],
  },{
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Prateek',
    comment: 'Party was awesome lets do it again next week 😍',
    likes: 5,
    time: '5w',
    replies: [
      
    ],
  },{
    image:
      'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546',
    name: 'Prateek',
    comment: 'Party was awesome lets do it again next week 😍',
    likes: 5,
    time: '5w',
    replies: [
      
    ],
  }
];
function RenderComment({item}) {
    const [showReplies,setShowreplies] = useState(false);
  return (
    <View style={{marginBottom:22}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', flex: 0.9}}>
          <Image
            source={{uri: item.image}}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View style={{flex:1}}>
            <Text style={{paddingLeft: 15, fontWeight: '600'}}>
              {item.name}
            </Text>
            <Text style={{paddingLeft: 15, marginTop: 8}}>{item.comment}</Text>
          </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>

        <Icon style={{}} name="heart" color="red" size={16} />
        <Text style={{marginTop:4,fontSize:11}}>{item.likes}</Text>
        </View>
      </View>
      {showReplies  ? item.replies.map(item => {
        return (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop:18
            }}>
            <View style={{flexDirection: 'row', flex: 0.9,paddingLeft:60}}>
              <Image
                source={{uri: item.image}}
                style={{width: 35, height: 35, borderRadius: 50}}
              />
              <View>
                <Text style={{paddingLeft: 15, fontWeight: '600'}}>
                  {item.name}
                </Text>
                <Text style={{paddingLeft: 15, marginTop: 8}}>
                  {item.comment}
                </Text>
              </View>
            </View>
            <Icon style={{}} name="heart" color="red" size={16} />
          </View>
        );
      }) : item.replies.length>0 && <View style={{flexDirection:'row',paddingLeft:76,marginTop:19,alignItems:'center'}}>
        <View style={{height:0.5,width:50,backgroundColor:'grey'}}></View>
        <Text style={{marginLeft:14}} onPress={()=>setShowreplies(!showReplies)}>{`View ${item.replies.length} reply`}</Text>
        </View>}
        {
            item.replies.length === 0 ? <View style={{flexDirection:'row',paddingLeft:76,marginTop:12,alignItems:'center'}}>
            <Text style={{}} onPress={()=>{}}>{`Reply`}</Text>
            </View> : null
        }
    </View>
  );
}
function Comments() {
  return (
    <View style={styles.container}>
      <FlashList
        data={comments}
        
        renderItem={({item}) => <RenderComment item={item} />}
       
      />
      <View style={{}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                {
                    
                    ["😄","🥹","😄","🥹","😄","🥹","😄","🥹"].map(item=>{
                        return (
                            <Text>{item}</Text>
                            )
                        })
                    }
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                        <Image style={{width:30,height:30,borderRadius:50}} source={{uri:'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/407421211_2780836318733701_3574769842845835547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ursljj-s-44AX_lCTrF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDCUGQt7dMlYvmtD3SRNypAPoEqf-P8IJthEHXHCz6n6g&oe=657A46F0&_nc_sid=8b3546'}}/>
                        <TextInput style={{height:50,flex:1,marginLeft:10}} placeholder='Add a comment'/>
                        </View>
                </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Comments;
