import { ScrollView, View } from 'react-native';
import { Card,Text,Button } from 'react-native-paper';
import Univ from '../../assets/uni.png';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from '../../config/save.json';

export default function Admitere({navigation}){
    const procced = () => {
        navigation.navigate('PreQuiz');
        Data.desired.id = 0;
        Data.desired.time = 20;
        Data.desired.title = "Test admitere";
        Data.desired.questions = 10;
    }
return (<Card style={{
        width: 300,
        alignSelf: 'center',
       
    }}>
        <Card.Cover  style={{backgroundColor: "#1f2125"}} source={Univ}/>
        <Card.Content style={{
        }} >
        <Text style={{
            paddingTop:10
        }} variant="titleLarge">Admitere UMF</Text>
        <Text variant="bodyMedium">Un test grila care te pregateste de admiterea la UMF. Intrebarile sunt selectionate
        din manuale si culegeri atestate.
        </Text>
    </Card.Content>
    <Card.Actions>
        <Button style={{
          backgroundColor: 'white'
        }} onPress={()=> procced()}>Acceseaza</Button>
    </Card.Actions>
        </Card>);
}