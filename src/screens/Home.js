import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import Respiratory_System from '../../components/lessons/RespiratorySystem';
import Circulatory_System from '../../components/lessons/CirculatorySystem';
import Heart from '../../components/lessons/Heart';
import Nervous_System from '../../components/lessons/NervousSystem';
import MovingBackground from '../../assets/animation';
import DigestiveSystem from '../../components/lessons/DigestiveSystem';
function SpaceSuggestions()
{
    return(<Text style={{
        color: 'transparent',
    }}>PPP</Text>);
}

function Suggestions({navigation}){
    return (
        <ScrollView style={{
            paddingLeft:45,
        }} horizontal={true}>
            <Respiratory_System navigation={navigation}/>
            <SpaceSuggestions/>
            <Circulatory_System navigation={navigation}/>
            <SpaceSuggestions/>
            <Heart navigation={navigation}/>
            <SpaceSuggestions/>
            <Nervous_System navigation={navigation}/>
            <SpaceSuggestions/>
            <SpaceSuggestions/>
        </ScrollView>
    );
}
export default function Home({navigation}) {
    return (
        <ScrollView style={{
            backgroundColor: "#16171b",
            alignContent: 'flex-end',
        }}>
                <Text variant='displayMedium' style={{
                    fontStyle: 'normal',
                    paddingBottom: 30,
                    paddingTop:60,
                    paddingLeft: 20,
                    color:'white',
                }}>Meniu</Text>
                <Text style={{
                    paddingLeft: 20,
                    color:'white'
                }} variant = 'displaySmall'>Lecția zilei<Text style={{color:'transparent'}}>ddd</Text><MovingBackground/></Text>
                <Text style={{
                    paddingLeft:20,
                    paddingBottom: 30,
                    color:"#747263"
                }} variant='bodyMedium'>În fiecare zi, câte puțin</Text>
            <DigestiveSystem navigation={navigation}/>
            <Text style={{
                    paddingLeft: 20,
                    paddingTop:40,
                    color: 'white'
                }} variant = 'displaySmall'>Sugestii</Text>
                <Text style={{
                    paddingLeft:20,
                    
                    color:"#747263",
                }} variant='bodyMedium'>Recomandarea noastră!<Text style={{
                    color: 'transparent'
                }}>ddddddddddddddd</Text><MovingBackground/></Text>

                <Suggestions navigation={navigation}/>
            
            </ScrollView>
    );
}