import { View, Text,TouchableHighlight } from 'react-native';
import React from 'react';
// import Home from './Home';

export default function Details({ navigation }) {
  return (
    <View>
      <TouchableHighlight onPress={()=>navigation.goBack()}>
          <Text>برگشت به خانه</Text>
      </TouchableHighlight>
    </View>
  )
}
// const Stack=createNativeStackNavigator();

// function App(){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Details" component={Details} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }