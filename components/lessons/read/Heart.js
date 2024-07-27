import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import HeartImg from '../../../assets/inimaRead.svg'
export default function Heart({navigation})
{
    return(
        <ScrollView style={{backgroundColor:'#16171b'}}>
            <Text style={{
                color:'transparent'
            }}>
                    
            </Text>
            <HeartImg style={{
                alignSelf: 'center',
            }}/>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Inima este un organ muscular, situat în cavitatea toracică între plămâni, mai precis în mediastin.
            Are dimensiunea aproximativă a unui pumn și este înconjurată de o membrană dublă numită pericard.
             Inima este compusă din patru camere: două atrii în partea superioară și două ventricule în partea
              inferioară.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Inima funcționează ca o pompă pentru circulația sângelui în tot corpul. Prin contracțiile sale ritmice 
           și coordonate, inima pompează sângele bogat în oxigen către organe și țesuturi prin artere, iar apoi
            primește sângele lipsit de oxigen înapoi prin vene pentru a fi pompat din nou în plămâni pentru
             oxigenare.

           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Ciclul cardiac este format din două faze principale: sistola și diastola. În timpul sistolei, 
           atrii se contractă, împingând sângele în ventricule. Apoi, ventriculele se contractă, pom-pând 
           sângele în artere. În timpul diastolei, inima se relaxează și se umple cu sânge din vene.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Inima este bogat vascularizată, fiind alimentată cu sânge prin artere coronariene. Orice obstrucție a
            acestor artere poate duce la ischemie (reducerea fluxului de sânge) și poate provoca angină pectorală 
            sau chiar infarct miocardic.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Inima este vitală pentru supraviețuirea organismului, deoarece asigură furnizarea de oxigen și substanțe
            nutritive către toate celulele corpului și eliminarea deșeurilor metabolice.

           </Text>
        
           <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> navigation.navigate('Home')}>Înapoi</Button>
        </ScrollView>);
}