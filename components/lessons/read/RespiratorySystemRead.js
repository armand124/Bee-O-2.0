import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import Resp from '../../../assets/respiratory.svg'
export default function RespiratorySystemRead({navigation})
{
    return(
        <ScrollView style={{backgroundColor:'#16171b'}}>
            <Text style={{
                color:'transparent'
            }}>
                    
            </Text>
            <Resp style={{
                alignSelf: 'center',
            }}/>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Nasul reprezintă calea normală de intrare a aerului în sistemul respirator. 
           Aerul poate intra în sistem și prin gură, deoarece aceasta se întâlnește cu cavitățile nazale 
           în regiunea posterioară a cavității bucale, numită faringe. Faringele este o cale comună atât 
           pentru sistemul respirator, cât și pentru sistemul digestiv. Porțiunea exterioară a nasului este compusă din cartilaj și piele.
            Porțiunile interne, denumite cavități nazale, sunt căptușite cu o mucoasă. Deschiderile cavităților nazale către mediul extern poartă denumirea de narine externe sau nări.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Septul nazal împarte medial cavitatea nazală. În continuare,
            aceasta se subdivide și formează căile aeriene prin intermediul
             unor extensii osoase, cunoscute sub numele de cornete nazale superioare, mijlocii și inferioare.
              În cavitățile nazale se deschid o serie de spații goale, numite sinusuri, care se extind spre osul frontal,
               sfenoid, etmoid și maxilar. Cornetele și sinusurile sunt porțiuni în care aerul este încălzit și viteza sa este încetinită,
                pentru a permite particulelor să precipite și să apară senzațiile olfactive. Mucoasa sinusurilor este în continuitate cu mucoasa 
                cavității nazale.

           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Cavitatea nazală este asociată și cu simțul mirosului, cunoscut sub numele de simț olfactiv. O parte a mucoasei nazale se află la nivelul
           peretelui superior al cavităților nazale și formează regiunea olfactivă. Celulele din această regiune detectează diverse
            tipuri de molecule și trimit impulsuri către creier prin nervi olfactivi. Creierul interpretează aceste impulsuri ca mirosuri.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Nasul este adaptat pentru încălzirea, umidificarea și filtrarea aerului. Vasele de sânge de la nivelul mucoasei nazale încălzesc aerul
            rece. Mucusul secretat de mucoasa nazală adaugă umiditate aerului uscat, în timp ce captează particulele fine de praf
             și microorganismele. Celulele ciliate ale mucoasei transportă apoi mucusul contaminat în gât, unde este înghițit.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Inflamația membranelor mucoase se numește rinită. Inflamațiile de natură alergică care apar în fosele nazale poartă numele de rinite alergice. Factori precum polenul, penele, acarienii și părul de animale

           </Text>
        
           <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> navigation.navigate('Home')}>Înapoi</Button>
        </ScrollView>);
}