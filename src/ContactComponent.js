import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert } from "react-native";
import React,{useState} from "react";
import  CheckBox  from "expo-checkbox";
import { 
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic 
  } from '@expo-google-fonts/josefin-sans';

  import { useFonts } from "expo-font";
  import AppLoading from "expo-app-loading"; 

const ContactComponent = ({navigation}) => {
    const [agree, setAgree] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let [fontsLoad,error] = useFonts({
        JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic 
    })

    if(!fontsLoad){
        return <AppLoading/>
    }

    const submit=()=>{
        if(username.toLocaleLowerCase()==='you' && password.toLocaleLowerCase()==='12345'){
            Alert.alert('correct')
            navigation.push("Home",{name:`${username}`})

        }else{
            Alert.alert('incorrect')

        }
    }
  return (
    <View>
      <Text style={styles.title}>Login Form</Text>
      <Text style={styles.description}>Fill the required fields below</Text>

      <View style={styles.container}>

        <Text style={styles.field}>Name</Text>
        <TextInput style={styles.inputfield} placeholder="Enter your name" value={username} onChangeText={(value)=>setUsername(value)} autoCorrect={false}/>
      
        <Text style={styles.field}>Password</Text>
        <TextInput style={styles.inputfield} autoCapitalize="none" placeholder="Enter your password" value={password} onChangeText={(value)=>setPassword(value)} autoCorrect={false} secureTextEntry={true}/>

        <View style={styles.wrapper}>
            <CheckBox value={agree} onValueChange={()=>{setAgree(!agree)}} color={agree?'#0C6BC4':undefined}/>
            <Text style={styles.confirmation}>I have read and agreed the terms and conditions</Text>
        </View>

        <TouchableOpacity onPress={()=>submit()} disabled={!agree} style={[styles.button,{backgroundColor:agree? "#0366C9" : '#A8AFB6'}]}><Text style={[styles.submit]}>Submit</Text></TouchableOpacity>
      </View>

    </View>
  );
};

export default ContactComponent;

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily:'JosefinSans_700Bold'
},
description: {
    // fontWeight:'900',
    // marginLeft: 20,
    marginTop: 10,
    textAlign:'center',
    fontFamily:'JosefinSans_400Regular',
  },
  inputfield: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    margin: 20,
  },
  field: {
    margin: 2,
    marginTop:20,
    fontSize:15,
    fontFamily:'JosefinSans_400Regular'
  },
  wrapper:{
      marginTop:20,
      display:'flex',
      flexDirection:"row"
  },
  confirmation:{
      marginHorizontal:15
  },
  submit:{
      textAlign:"center",
    //   backgroundColor:`#0C6BC4`,
      padding:5,
      width:100,
      color:'white'
  },
  button:{
      marginTop:20,
      alignItems:"center"
  }
});
