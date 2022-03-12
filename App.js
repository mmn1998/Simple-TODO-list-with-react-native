// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';
import SignUp from './components/SignUp';

// const getFonts = () => Font.loadAsync({
//   'B-Nazanin':require('./assets/fonts/BNAZANIN.TTF'),
//   'B-Yekan':require('./assets/fonts/BYEKAN.TTF'),
//   'B-Mitra':require('./assets/fonts/BMITRA.TTF'),
//   'Mj-Flow':require('./assets/fonts/MJ-FLOW.TTF'),
// })

const Stack = createNativeStackNavigator(); 

export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);
  // if(fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{title:'خانه'}}/>
          <Stack.Screen name="Details" component={Details} options={{title:'جزییات'}}/>
          {/* <View style={styles.container}> 
            <Home />
          </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  // } else{
  //   return(
  //     <AppLoading 
  //       startAsync={getFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
