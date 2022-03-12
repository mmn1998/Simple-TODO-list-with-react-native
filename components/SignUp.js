import React,{} from 'react';
import { View,StyleSheet, TextInput, Button, Text, SafeAreaView } from "react-native"; 
import { Formik } from "formik";    
import * as yup from 'yup';

const validationSchema=yup.object({
    name: yup
    .string()
    .required('نام اجباری است')
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .label('نام')
    .matches(/^[\u0600-\u06ff]([\u0600-\u06ff]|\s){3,100}$/,"Name must be Persian"),
    family: yup
    .string()
    .required('نام خانوادگی اجباری است')
    .label('نام حانوادگی')
    .min(3, ({ min }) => `Family must be at least ${min} characters`)
    .matches(/^[\u0600-\u06ff]([\u0600-\u06ff]|\s){3,100}$/,"Family must be Persian"),
    password:yup.string().matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('پسورد'),
    confirmPassword: yup
    .string()
    .label('تکرار پسورد')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
    email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required')
    .label('ایمیل'),
    phoneNumber: yup
    .string()
    .matches(/(09)(\d){9}\b/, 'Enter a valid phone number')
    .required('Phone number is required')
    .label('تلفن همراه'),

})

export default function SignUp({ addUsers }){
   
    return(
        
        <View style={styles.container}>
            
            <Formik
                initialValues={{name:'',family:'',password:'',confirmPassword:'',email:'',phoneNumber:''}}
                validationSchema={validationSchema}
                onSubmit={(values,actions) => {
                    console.log(values);
                    actions.resetForm();
                    addUsers(values);
                    
                }}
            >
              
              
                {
                   
                    (props) => (
                        <View>
                           
                            <TextInput 
                                style={styles.input}
                                placeholder='name...'
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                                onBlur={props.handleBlur('name')}
                            />
                            <Text style={styles.error}>{ props.touched.name && props.errors.name}</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='family...'
                                onChangeText={props.handleChange('family')}
                                value={props.values.family}
                                onBlur={props.handleBlur('family')}
                            />
                            <Text style={styles.error}>{props.touched.family && props.errors.family}</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='password...'
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                onBlur={props.handleBlur('password')}
                                secureTextEntry
                            />
                            <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='confirm password...'
                                onChangeText={props.handleChange('confirmPassword')}
                                value={props.values.confirmPassword}
                                onBlur={props.handleBlur('confirmPassword')}
                                secureTextEntry
                            />
                            <Text style={styles.error}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='email...'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                                keyboardType='email-address'
                            />
                            <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='phone number...'
                                onChangeText={props.handleChange('phoneNumber')}
                                value={props.values.phoneNumber}
                                onBlur={props.handleBlur('phoneNumber')}
                                keyboardType='numeric'
                            />
                            <Text style={styles.error}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>
                            <Button title='ثبت' color='red' onPress={props.handleSubmit} />
                        </View>
                    )
                }
                
            </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:10,
        padding:10,
        margin:5,
        fontSize:18
    },
    container: {
        flex:1,
        marginTop:30,
        backgroundColor:'#ddd',
        justifyContent:'center',
        alignItems:'center'
    },
    error:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
});
