import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function RentPanel({ navigation ,route}) {
  const [rentnumber, setRentNumber] = useState('');
  const [username, setUsername] = useState('');
  const [platenumberb, setPlateNumber] = useState('');
  const [rents, setRents] = useState([]);
  const [date, setDate] = useState('');
  const {Cars} = route.params;
 

  

  console.log(Cars)


  useEffect(() => {
    console.log(rents)
   
    

  }, [rents]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>Registro Alquileres </Text>
      <Text> Placas Disponibles :</Text>

      <TextInput
        label="Rent Number"
        mode="outlined"
        left={<TextInput.Icon icon="car-back" />}
        onChangeText={(rentnumber) => setRentNumber(rentnumber)}
        value={rentnumber}
      />
      <TextInput
        label="Username"
        mode="outlined"
        left={<TextInput.Icon icon="alpha-k-box" />}
        onChangeText={(username) => setUsername(username)}
        value={username}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        label="Plate Number"
        left={<TextInput.Icon icon="chevron-right-box-outline" />}
        onChangeText={(platenumberb) => setPlateNumber(platenumberb)}
        value={platenumberb}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        label="Rent Date"
        left={<TextInput.Icon icon="chevron-right-box-outline" />}
        onChangeText={(date) => setDate(date)}
        value={date}
      />

      <Button
        icon="login"
        mode="contained"
        onPress={() => {
            const findCar = Cars.find((car) => car.platenumber === platenumberb);
            if (!findCar) {
              alert('El carro no existe');
            } else {
              setRents([
                ...rents,
                { rentnumber: rentnumber, username: username, platenumberb: platenumberb, date: date },
              ]);
              alert('La renta ha sido guardada');
              setRentNumber('');
              setUsername('');
              setPlateNumber('');
              setDate('');
              
            }
          }}
          
      >
        Guardar Carro
      </Button>

      {rents.map((rent, index) => {
        return (
          
          <View key={rent.rentnumber + '_' + index} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ marginRight: 10 }}>{rent.rentnumber}</Text>
            <Text style={{ marginRight: 10 }}>{rent.username}</Text>
            <Text style={{ marginRight: 10 }}>{rent.platenumberb}</Text>
            <Text style={{ marginRight: 10 }}>{rent.date}</Text>
            
  
          </View>
        );
      })}
    </View>
  );
}

