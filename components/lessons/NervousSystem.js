import { ScrollView, View } from 'react-native';
import { Card,Text,Button } from 'react-native-paper';
import Brain from '../../assets/brain.png';


export default function NervousSystem({navigation}){
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={Brain}/>
        <Card.Content style={{
            
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Sistemul Nervos</Text>
        <Text variant="bodyMedium">Sistemul nervos, rețea complexă de celule și nervi, coordonează și transmite informații în corp.</Text>
    </Card.Content>
    <Card.Actions style={{
      
        
    }}>
        <Button style={{
          backgroundColor: 'white'
        }} onPress={()=> navigation.navigate('Meniu',{screen: 'Nervos'})}>Citește</Button>
    </Card.Actions>
        </Card>);
}