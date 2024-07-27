import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import NervosImg from '../../../assets/sistemNervosPage.svg'
export default function Nervous({navigation})
{
    return(
        <ScrollView style={{backgroundColor:'#16171b'}}>
            <Text style={{
                color:'transparent'
            }}>
                    
            </Text>
            <NervosImg style={{
                alignSelf: 'center',
            }}/>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul nervos este esențial pentru funcționarea organismului. El este format din două componente
            principale: sistemul nervos central (SNC) și sistemul nervos periferic (SNP).
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul nervos central este compus din creier și măduva spinării. Creierul este centrul de comandă al
            organismului, controlând gândirea, emoțiile, mișcările și funcțiile vitale. Măduva spinării servește ca un
             canal de comunicație între creier și restul corpului și este implicată în reflexele rapide și în transmiterea
              informațiilor senzoriale și motorii.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul nervos periferic este format din nervii care se extind din SNC către restul corpului. Acesta 
           transmite informații senzoriale de la organele de simț către creier și măduva spinării și transmite 
           impulsuri motorii de la SNC către mușchi și glande. Sistemul nervos periferic este esențial pentru 
           controlul mișcărilor voluntare și involuntare și pentru răspunsul la stimuli externi.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Împreună, aceste două componente ale sistemului nervos lucrează împreună pentru a regla și coordona 
           toate funcțiile corpului, asigurând supraviețuirea și adaptarea la mediul înconjurător.
           </Text>
           <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> navigation.navigate('Home')}>Înapoi</Button>
        </ScrollView>);
}