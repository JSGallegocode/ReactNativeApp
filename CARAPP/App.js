import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import UserPanel from './screens/Users';
import CarsPanel from './screens/Cars';
import RentPanel from './screens/Rent';
import UserRegistration from './screens/UserReg';
//import Contacts from './screens/Contacts';


import { TextInput,Button } from 'react-native-paper';
import { useState } from 'react';




let users = [
  {email: "locomas@gmail.com", password : "1990", rol:"1"}
]
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function App() {


  
  return (

    
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName= 'HomeTabs'>

        <Stack.Screen name ="HomeTabs" component ={HomeTabs} options={{title:'CarApp'}} />
        
      </Stack.Navigator>

    </NavigationContainer>
    
    
  );

  
}

export function HomeScreen({navigation}){
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormess, setErrormess] = useState("");
  return(

  <View style ={styles.container}>
    
    <Text style={{marginBottom:20}}>Inicia Sesión </Text>
    <TextInput
    label = "Correo"
    mode = "outlined"
    left={<TextInput.Icon icon ="account" />}
    onChangeText={(email) => setEmail(email)}
    value={email}
    />
  
  <TextInput
    style ={{marginBottom:10}}
    label= "Contraseña"
    right ={<TextInput.Icon icon="eye" />}
    onChangeText={(password) => setPassword(password)}
    value={password}
    secureTextEntry 
    />
  <Button
    icon ="login"
    mode="contained"
    onPress= {()=> {
    let findUser= users.find(usr=> usr.email == email && usr.password==password);
    if (findUser != undefined){
      setErrormess('')
      const {name,email} = findUser
      setEmail('');
      setPassword('');
      navigation.navigate('Users',{name:name,email:email})
    }
    else {
      setErrormess('Correo invalido');
       }
    }}
  >
    Iniciar Sesion
    </Button>
    <Text style = {{color:'red'}}>{errormess}</Text>



    
  </View>
  );
}


function HomeTabs(){
  return(
  <Tab.Navigator
     screenOptions ={{headerShown:false,
    tabBarActiveIntColor:'red',
    tabBarInctiveIntColor:'gray',
    tabBarActiveBackgroundColor:'green',
    tabBarInactiveBackgroundColor:'aqua'
    }}>
    <Tab.Screen name="Home" component={HomeScreen} options ={{
      tabBarIcon:(tabInfo) => (<MaterialIcons name="home" size={22}/>)
    }}></Tab.Screen>
    <Tab.Screen name="Users" component={UserPanel}></Tab.Screen>
    <Tab.Screen name="Cars" component={CarsPanel}></Tab.Screen>
    <Tab.Screen name="Rent" component={RentPanel}></Tab.Screen>
    <Tab.Screen name="UserReg" component={UserRegistration}></Tab.Screen>
   

  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  
});

