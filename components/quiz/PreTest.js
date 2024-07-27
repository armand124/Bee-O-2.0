import { ScrollView,StyleSheet,View } from "react-native";
import { Text,Card,Button } from "react-native-paper";
import CircleAnimation from '../../assets/animation';
import Img from '../../assets/test_logo.svg';
import {Image} from 'react-native';
import Data from '../../config/save.json';
StyleSheet.create({
    rectangle: {
        width: 100*2,
        height:100,
        backgroundColor:"white",
    }
})

export default function PreTest({navigation}){
    const procced = () => {
        navigation.navigate('Meniu',{screen:'Home'});
        navigation.navigate('Test');
    }
    const proccedSafe = () =>{
        navigation.navigate('Meniu',{screen:'Home'});
        navigation.navigate('Teste');
    }
    return (
    
            <ScrollView style={{
                backgroundColor:'#16171B',
            }}>
                
                <Text style={{color:'transparent',paddingTop:50}}>pog</Text>
                <Img style={{alignSelf:'center',}}/>
               <Text style={{paddingBottom:40,  color:'transparent'}}>da</Text>
               
               <Card style={{
                width:300,
                alignSelf:'center',
                backgroundColor: '#1F2125',
               }}>
                
                <Card.Content>
                    
                    <Text style={{alignSelf:'center',color:'white'}} variant='headlineLarge'>{Data.desired.title}</Text>
                    <Text style={{alignSelf:'center',color:'white'}} variant = 'bodyLarge'>Timp: {Data.desired.time} (de) minute</Text>
                    <Text style={{alignSelf:'center',color:'white'}} variant = 'bodyLarge'>Numar intrebari: {Data.desired.questions}</Text>
                </Card.Content>
                    <Card.Actions style={{alignSelf:'center'}}>
                    <Button style={{
                     backgroundColor: '#f7ce45',
                     
                     }}onPress={()=> procced()}>Incepe</Button>
                    </Card.Actions>
                    <Card.Actions style={{alignSelf:'center'}}>
                    <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> proccedSafe() }>Renunta</Button>
                    </Card.Actions>
               </Card>
            </ScrollView>
        );
    
}