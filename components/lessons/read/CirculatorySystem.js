import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import Circulator from '../../../assets/sistemulcirculator.svg'
export default function Circulatory({navigation})
{
    return(
        <ScrollView style={{backgroundColor:'#16171b'}}>
            <Text style={{
                color:'transparent'
            }}>
                    
            </Text>
            <Circulator style={{
                alignSelf: 'center',
            }}/>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul circulator este unul dintre cele mai vitale sisteme ale corpului uman, responsabil pentru transportul
            sângelui, nutrienților, oxigenului și a altor substanțe în întregul organism, precum și pentru eliminarea
             deșeurilor metabolice. Iată câteva informații despre sistemul circulator:
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul circulator este format din inimă, vase de sânge și sânge. Inima este motorul sistemului circulator.
            Este un organ muscular situat în cavitatea toracică, între plămâni. Funcționează ca o pompă, împingând 
            sângele în tot corpul prin intermediul vaselor de sânge.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Vasele de sânge includ arterele, venele și capilarele. Arterele transportă sângele de la inimă către restul
            corpului, venele îl aduc înapoi către inimă, iar capilarele sunt mici vase de sânge care conectează 
            arterele și venele, permițând schimbul de substanțe între sânge și țesuturi.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sângele este un lichid complex care conține celule sanguine (eritrocite, leucocite și trombocite) și plasmă 
           (o soluție apoasă care conține proteine, nutrienți, hormoni și alte substanțe).
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sângele circulă într-un circuit închis, trecând prin inimă, plămâni (pentru oxigenare), și apoi în întregul
            corp prin artere, capilare și vene.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Circulația sângelui este controlată de sistemul nervos autonom și de hormoni, care reglează ritmul cardiac,
            tonusul vascular și distribuția sângelui către diferite țesuturi.
           </Text>
           <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> navigation.navigate('Home')}>Înapoi</Button>
        </ScrollView>);
}