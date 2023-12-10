import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeFeedMain from "./homeFeed";

const Stack = createNativeStackNavigator();
function HomeFeed({navigation}){
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="homefeed">
        {(props)=><HomeFeedMain />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeFeed;