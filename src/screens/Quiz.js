import { Image, ScrollView, View } from 'react-native';
import {Text} from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import Logo from '../../assets/logo_quiz.png';
import Admitere from '../../components/quiz/Admitere';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../../components/quiz/PreTest';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



export default function Quiz({navigation}) {
    return (
        <ScrollView style={{
            backgroundColor: "#16171b",
        }}>
            <Text style={{
                color:'white',
                paddingTop: 55,
                paddingLeft: 20,            
            }} variant='displayMedium'>
                Teste
                <Image style={{
                    width:300,
                    position:'absolute',
                    height:200,
                    alignSelf: 'flex-end',
                    resizeMode:'stretch',
                }} source={Logo}/>
            </Text>
            <Text style={{
                width:150,
                paddingLeft:30,
                paddingTop:20,
                color:'white',
            }} variant='bodyLarge'>Vezi cat de pregatit esti!</Text>
            <Text variant='displaySmall' style={{
                color: 'white',
                paddingTop:70,
                paddingLeft:20,
            }}>Recomandare</Text>
            <Text style={{
                    paddingLeft:20,
                    paddingBottom: 30,
                    color:"#747263"
                }} variant='bodyMedium'>Fii pregatit la timpul potrivit</Text>
            <Admitere navigation={navigation}/>
            
        </ScrollView>
    );
}