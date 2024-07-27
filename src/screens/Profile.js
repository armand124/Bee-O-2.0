import { Image, ScrollView, View,ViewScroll } from 'react-native';
import { DefaultTheme,ProgressBar,MD3Colors } from 'react-native-paper';
import { Text,Card } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import * as data from '../../config/save.json';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import BottomBanner from '../../assets/bottomBannerProfile2.png';
import StreakIcon from '../../assets/streak_icon.png';
export default function Profile({navigation}) {
    const [name,setName] = React.useState("");
    const [surname,setSurname] = React.useState("");

    const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('@storage_key');
  
    const readItemFromStorage = async () => {
      const item = await getItem();
      setValue(item);
    };
    useEffect(() => {
      readItemFromStorage();
    }, []);

    let avatar_name =  value.substring(0,value.indexOf(' ')).charAt(0)+value.substring(value.indexOf(' ')+1).charAt(0);
    let full_name = value
    let user_progress = data.user.progress;
    let user_prgoress_text = (data.user.progress * 100).toFixed(1) + '%';

    return (
        <ScrollView style={{
            backgroundColor:"#16171b",
        }}>
                <Text variant='headlineLarge' style={{
                    alignSelf: 'center',
                    paddingTop:46,
                    paddingBottom: 25,
                    color:'white',
                }}>Profil</Text>
                <Card>
                    <Card.Content style={{
                        backgroundColor:'#16171b',
                    }}>
                <Avatar.Text color={"#2c2a26"} style={{
                    alignSelf: 'center',
                    backgroundColor: '#f7ce45',
                }} size = {100} label={avatar_name}/>
                <Text variant='headlineLarge'  theme={DefaultTheme} style={{
                    textAlign: 'center',
                    color:'white',
                    paddingBottom:10,
                    paddingTop:10,
                }}>{full_name}</Text>
                </Card.Content>
                </Card>
                <ProgressBar  progress={user_progress} color={"#f7ce45"} style={{
                    height: 10,
                   
                    width: undefined
                }}/>
                <Text variant='bodyMedium'style={{
                    textAlign : 'right',
                    color:'white',
                    paddingBottom:40
                }}>{user_prgoress_text}</Text>
                <Image source={StreakIcon} style={{
                    height:140,
                    width:180,
                    resizeMode:'stretch',
                    alignSelf:'center',
                }}/>
                <Text variant='headlineSmall' style={{
                    textAlign:'center',
                    color:'white',
                    paddingTop:15
                }}>Streak: <Text variant='headlineMedium' style={{
                    textAlign:'center',
                    color:'#f7ce45',
                    paddingTop:15}} >1</Text> zile</Text>
                    <Text variant='bodyMedium' style={{
                        textAlign: 'left',
                        color:'white',
                        paddingTop:130
                    }}>Toate informatiile sunt preluate din manuale oficiale admise de M.E.N.</Text>
            </ScrollView>
            
    );
}