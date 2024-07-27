import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import Digestive from '../../../assets/digestive.svg'
export default function Digest({navigation})
{
    return(
        <ScrollView style={{backgroundColor:'#16171b'}}>
            <Text style={{
                color:'transparent'
            }}>
                    
            </Text>
            <Digestive style={{
                alignSelf: 'center',
            }}/>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Sistemul digestiv reprezintă un sistem complex și specializat al organismului uman
            responsabil de procesarea, descompunerea și absorbția alimentelor, precum și de 
            eliminarea rezidurilor. Acest sistem este format dintr-o serie de organe și structuri
             cu funcții specifice, care lucrează împreună pentru a asigura desfășurarea eficientă a 
             proceselor digestive.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Procesul digestiv începe în cavitatea bucală, unde 
           alimentele sunt introduse și măcinate prin masticație. 
           Enzimele salivare, cum ar fi amilaza salivară, încep descompunerea 
           carbohidraților în gură. De asemenea, saliva ajută la lubrifierea alimentelor
            și facilitează înghițirea.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           După înghițire, alimentele călătoresc prin faringe și apoi în esofag, un tub muscular care le transportă 
           spre stomac prin contracții peristaltice. În esofag, alimentele nu sunt digerate în mod activ, ci sunt doar conduse către stomac.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Stomacul este un organ în formă de sac, care are rolul de a descompune alimentele într-o pastă semilichidă numită chil. Stomacul secretă acid clorhidric și enzime digestive precum
            pepsina, care încep procesul de descompunere a proteinelor. Contracțiile musculare ale stomacului amestecă
             alimentele cu sucurile digestive și favorizează omogenizarea acestora.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Chilul este eliberat în intestinul subțire prin intermediul pilorului, o supapă musculară situată între stomac și 
           intestinul subțire. Intestinul subțire reprezintă cea mai lungă porțiune a sistemului digestiv și este format din trei segmente: 
           duodenul, jejunul și ileonul.
           </Text>
           <Text variant="bodyLarge" style={{color:'white',textAlign:'left',paddingHorizontal:10,paddingBottom:10}}>
           Duodenul, prima porțiune a intestinului subțire, primește sucuri digestive de la pancreas și bilă de la ficat prin intermediul canalului biliar comun. Pancreasul secretă enzime digestive 
           precum amilaza pancreatică, tripsina și lipaza pancreatică, care continuă descompunerea carbohidraților, 
           proteinelor și lipidelor. Bila, produsă de ficat și stocată în vezica biliară, ajută la emulsionarea grăsimilor și facilitează absorbția acestora.
           </Text>
           <Button style={{
                     backgroundColor: '#FF3131',
                     
                     }} onPress={()=> navigation.navigate('Home')}>Înapoi</Button>
        </ScrollView>);
}