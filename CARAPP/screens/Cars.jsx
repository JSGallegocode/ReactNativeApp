import { View } from 'react-native';
import { useState,useEffect } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';

export default function CarsPanel({ navigation, route }) {
  const [platenumber, setPlateNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [state, setState] = useState('');
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    console.log(Cars);
  }, [Cars]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registro de Vehiculos </Text>
      <TextInput
        label="Plate Number"
        mode="outlined"
        left={<TextInput.Icon icon="car-back" />}
        onChangeText={(platenumber) => setPlateNumber(platenumber)}
        value={platenumber}
      />
      <TextInput
        label="Brand"
        mode="outlined"
        left={<TextInput.Icon icon="alpha-k-box"/>}
        onChangeText={(brand) => setBrand(brand)}
        value={brand}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        label="State"
        left={<TextInput.Icon icon="chevron-right-box-outline" />}
        onChangeText={(state) => setState(state)}
        value={state}
      />
      
      <Button
        icon="login"
        mode="contained"
        onPress={() => {
          if (platenumber.length > 0 && brand.length >= 0) {
            setCars(Cars => [...Cars,{platenumber:platenumber , brand: brand, state: state }]);
            alert('El Carro está guardado');
            setPlateNumber('');
            setBrand('');
            setState('');
            navigation.navigate('Rent',{Cars})
          } else {
            alert('Complete los campos');
          }
         
        }}
        
      >


        Guardar Carro
      </Button>

      <View>
      {
          Cars.map(mal => {
            return (
              <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{marginRight:10}}>{mal.platenumber}</Text>
                <Text style={{marginRight:10}}>{mal.brand}</Text>
                <Text style={{marginRight:10}}>{mal.state}</Text>
             
              </View>
            );
          })
        }
      </View>

    </View>
  );
}
