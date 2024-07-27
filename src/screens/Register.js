import React,{useState,useEffect} from 'react';
import { ScrollView } from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Logo from '../../assets/logo.svg';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
    const [name,setName] = React.useState("");
    const [surname,setSurname] = React.useState("");

    const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('@storage_key');
  
    const readItemFromStorage = async () => {
      const item = await getItem();
      setValue(item);
    };
  
    const writeItemToStorage = async newValue => {
      await setItem(newValue);
      setValue(newValue);
      navigation.navigate("Main");
    };
  
    useEffect(() => {
      readItemFromStorage();
    }, []);

    return (
        <ScrollView style={{backgroundColor:"#16171b"}}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        <Logo style={{
            alignSelf: 'center',  
        }} />
        <Text></Text><Text></Text>
        <Text variant= 'headlineMedium' style={{
            alignSelf: 'center',
            color:'white',
        }}>Introdu prenumele: </Text>
        <TextInput textColor='white' selectionColor='white' containerColor={'white'}
         value={name} onChangeText={name=> setName(name)} style={{
            alignSelf:'center',
            backgroundColor:"transparent",
            fontSize: 30,
        }}label=""/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text variant= 'headlineMedium' style={{
            alignSelf: 'center',
            color:'white'
        }}>Introdu numele: </Text>
        <TextInput  textColor='white' selectionColor='white' containerColor={'white'}
         value={surname} onChangeText={surname=>setSurname(surname)} style={{
            alignSelf:'center',
            backgroundColor:"transparent",
            fontSize: 30,
            color:'#f7ce45',
            
        }}label=""/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <IconButton icon='arrow-right-bold-circle' size={70} containerColor='#f7ce45' style={{
                alignSelf: 'center', 
        }} onPress={() => writeItemToStorage(name+' '+surname)}/>
    </ScrollView>
    );
}