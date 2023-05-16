import { View } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';

export default function UserRegistration({ navigation, route }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [Users, setUsers] = useState([]);

const [emailError, setEmailError] = useState('');
const [usernameError, setUsernameError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [roleError, setRoleError] = useState('');

const validateEmail = (email) => {
  // Regex for email validation
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    setEmailError('Por favor ingrese un correo electrónico válido');
  } else {
    setEmailError('');
  }
};

const validateUsername = (username) =>{

  const usr = /^[a-zA-Z ]+ $/;

  
}

const HandleUsername = (username) => {
    setUsername(username)
  if (username.trim().length > 0 && !validateUsername(username))  {
    setUsernameError('El nombre de usuario debe contener letras o espacios');
  } else {
    setUsernameError('El nombre de usuario debe contener letras o espacios');
  }
};

const validatePassword = (password) => {
  const pass = /^[a-zA-Z0-9]*$/;
  if (!pass.test(password)){
    setPasswordError('La contraseña debe tener numeros y/o letras');
  } else {
    setPasswordError('');
  }
};

const validateRole = (role) => {
  if (!role) {
    setRoleError('Por favor seleccione un rol');
  } else {
    setRoleError('');
  }
};



  useEffect(() => {
    console.log(Users);
  }, [Users]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registro de Usuarios </Text>
      <TextInput
        label="Correo"
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
        onChangeText={(email) => {
          setEmail(email);
          validateEmail(email);
        }}
        value={email}
        error={!!emailError}
        helperText={emailError}
      
      />
      <TextInput
        label="Nombre Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        onChangeText={(HandleUsername)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        label="Contraseña"
        left={<TextInput.Icon icon="eye" />}
        onChangeText={(password) => {
          setPassword(password);
          validatePassword(password);
        }}
        
        value={password}
        secureTextEntry
      />
      <TextInput
        style={{ marginBottom: 10 }}
        label="Rol"
        left={<TextInput.Icon icon="account-child-outline" />}
        onChangeText={(role) => {
          setRole(role);
          validateRole(role)
        }}
      />
      <Button
        icon="login"
        mode="contained"
        onPress={() => {
          let findUser= Users.find(usr=> usr.username == username);
          if ( findUser == undefined) {
            setUsers(Users => [...Users,{email: email, username: username, password: password, role: role }]);
            alert('El usuario está guardado');
            setEmail('');
            setUsername('');
            setPassword('');
            setRole('');
            navigation.navigate('Rent',{Users})

          } else {
            alert('Usuario ya existe');
          }
         
        }}
        
      >


        Guardar Usuario
      </Button>

      <View>
      {
          Users.map(sal => {
            return (
              <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{marginRight:10}}>{sal.email}</Text>
                <Text style={{marginRight:10}}>{sal.username}</Text>
                <Text style={{marginRight:10}}>{sal.password}</Text>
                <Text style={{marginRight:10}}>{sal.role}</Text>
             
              </View>
            );
          })
        }
      </View>

    </View>
  );
}
