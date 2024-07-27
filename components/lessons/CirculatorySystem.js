import { Card,Text,Button } from 'react-native-paper';
import CirculatorySystem from '../../assets/circ_sist.png';


export default function Circulatory_System({navigation}){
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={CirculatorySystem}/>
        <Card.Content style={{
            
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Sistemul Circulator</Text>
        <Text variant="bodyMedium">Sistemul circulator este esențial pentru transportul sângelui, 
        nutrienților și oxigenului în tot corpul.</Text>
    </Card.Content>
    <Card.Actions style={{
      
        
    }}>
       <Button style={{
          backgroundColor: 'white'
        }} onPress={()=> navigation.navigate('Meniu' , {screen: 'Circulator'})}>Citește</Button>
    </Card.Actions>
        </Card>);
}