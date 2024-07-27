import { ScrollView, View } from 'react-native';
import { Card,Text,Button } from 'react-native-paper';
import RespiratorySystem from '../../assets/resp_syst.png';


export default function Respiratory_System({navigation}){
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={RespiratorySystem}/>
        <Card.Content style={{
            
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Sistemul Respirator</Text>
        <Text variant="bodyMedium">Este un set de organe și structuri, care permit schimbul de gaze între mediul înconjurător și corpul uman.</Text>
    </Card.Content>
    <Card.Actions style={{
      

    }}>
        <Button style={{
          backgroundColor: 'white'
        }}onPress={()=> navigation.navigate('Respiratory')}>Citește</Button>
    </Card.Actions>
        </Card>);
}