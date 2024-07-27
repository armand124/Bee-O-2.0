import { ScrollView, View } from 'react-native';
import { Card,Text,Button } from 'react-native-paper';
import Digestive from '../../assets/digestive_logo.png';


export default function DigestiveSystem({navigation}){
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={Digestive}/>
        <Card.Content style={{
            
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Sistemul Digestiv</Text>
        <Text variant="bodyMedium">Sistemul digestiv reprezintă un sistem complex și
         specializat al organismului uman responsabil de procesarea, descompunerea 
         și absorbția alimentelor, precum și de eliminarea rezidurilor.</Text>
    </Card.Content>
    <Card.Actions style={{
      
        
    }}>
        <Button style={{
          backgroundColor: 'white'
        }} onPress={()=> navigation.navigate('Meniu' , {screen: 'Digestive'})}>Citește</Button>
    </Card.Actions>
        </Card>);
}