import { ScrollView, View } from 'react-native';
import { Card,Text,Button } from 'react-native-paper';
import hrt from '../../assets/heart.png';


export default function Heart({navigation}){
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={hrt}/>
        <Card.Content style={{
            
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Inima</Text>
        <Text variant="bodyMedium">Pompează sângele și asigură oxigenarea și hrănirea celulelor corpului.</Text>
    </Card.Content>
    <Card.Actions style={{
      
        
    }}>
        <Button style={{
          backgroundColor: 'white'
        }} onPress={()=> navigation.navigate('Meniu',{screen: 'Heart'})}>Citește</Button>
    </Card.Actions>
        </Card>);
}