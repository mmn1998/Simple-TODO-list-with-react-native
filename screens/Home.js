import React,{ useState } from 'react';
import { View, Text, Modal,StyleSheet, TouchableWithoutFeedback, Keyboard,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import SignUp from '../components/SignUp';

export default function Home({ navigation }) {
    const [modalOpen,setModalOpen]=useState(false);
    const [usersData,setUsersData]=useState([
        {name:'محمد',family:'نعمانی',password:'Abc!23',confirmPassword:'Abc!23',email:'nmanymhmdmhdy@gamil.com',phoneNumber:'09373632702',key:'1'},
        {name:'تست',family:'تستی',password:'Abc!23',confirmPassword:'Abc!23',email:'yest@tset.com',phoneNumber:'09111111111',key:'2'}
    ])
    const addUsers=(userData)=>{
        userData.key=Math.random().toString();
        setUsersData((prevUsers=>{
            return [userData,...prevUsers];            
        }))
        setModalOpen(false);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text>سلام به خانه خوش امدید</Text>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContainer}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        <SignUp addUsers={addUsers} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
            />
           
            <FlatList 
                data={usersData}
                renderItem={({ item })=>{
                    return(
                    
                        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                            <Text>{item.name + ' ' + item.family}</Text>                           
                        </TouchableOpacity>
                    )
                }}
            />

        </SafeAreaView>
    )
}

// const Stack=createNativeStackNavigator();

// function App(){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={Home}/>
//                 <Stack.Screen name="Details" component={Details}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    modalContainer:{
        flex:1,
    }
})
