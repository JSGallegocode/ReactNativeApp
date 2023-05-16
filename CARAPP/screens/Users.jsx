import {View,Text,TextInput,Button} from 'react-native';


export default function UserPanel({navigation,route}){
    const {name,email} = route.params;
    
return(


    <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}> 
      <Text style = {{marginBottom:10}}>Panel de administración de Usuarios</Text>
  
      <Text> Hola  :{name} tu correo es : {email}</Text>
      <Button title ="ir a inicio"
      onPress={()=>{
        navigation.navigate('Home')
          }
       }     />


      </View>
    
 
)
}