import { ScrollView } from "react-native";
import { Text,Button } from "react-native-paper";
import React from 'react';
import Data from '../../config/save.json'
export default function Test({navigation}){  
    
    const [questionNumber,setQuestionNumber] = React.useState(0);
    const [userAnswear,setUserAnswear] = React.useState(-1);
    const [correctAnswears,setCorrectAnswears] = React.useState(0);
    let answear = 4;
    const procced = () => {
        if(userAnswear === Data.answears[Data.desired.id][questionNumber][answear])
            setCorrectAnswears(correctAnswears+1);
        setUserAnswear(-1);
        setQuestionNumber(questionNumber+1);
        
    }
    if(questionNumber === Data.desired.questions)
    {
        if(correctAnswears >= Data.desired.questions/2)
            Data.user.progress+=0.10;
        return(
            <ScrollView style={{backgroundColor:"#16171B"}}>
                <Text style={{
                    color:'transparent',
                    paddingBottom:30,
                }}>ddasdsdadasdasdadadadadad</Text>
                
                <Text variant="displayMedium" style={{
                    color:'white',
                    textAlign:'center',
                    paddingBottom:203,
                }}>Rezultate</Text>
                <Text style={{
                    color:'white',
                    textAlign:'center',
                    paddingBottom:40,
                }}variant='displaySmall'>
                    Scor:
                    <Text style={{
                    color:'#f7ce45',
                    textAlign:'center'
                }}variant='displaySmall'>
                    {correctAnswears}
                </Text>
                /{Data.desired.questions}
                </Text>
                <Button textColor = 'white'  style={{
                    borderColor:'white',
                    width:200,
                    alignSelf:'center',
                    backgroundColor:"#1f2125",
                    }}  onPress={() => navigation.navigate('Main',{screen:'PreQuiz'})}>
                    Intoarcete la meniu
                    </Button>
                    <Text style={{
                        paddingBottom:100
                    }}></Text>
                
            </ScrollView>
        );
    }
    if(userAnswear===-1){
    return (
        <ScrollView style={ {backgroundColor: "#16171B"}}>
           <Text style={{
            paddingBottom: 40,
            color:'transparent'
           }}>dasdad</Text>
        
        <Text variant='headlineSmall' style={{
            color:'white',
            width:380,
            paddingLeft:10,
            paddingBottom:20,
            }}>{Data.test[Data.desired.id][questionNumber]}</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor:"#1f2125",
        }}  onPress={() => setUserAnswear(0)}>
            A. {Data.answears[Data.desired.id][questionNumber][0]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor:"#1f2125",
            
        }}  onPress={() => setUserAnswear(1)}>
            B. {Data.answears[Data.desired.id][questionNumber][1]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor:"#1f2125",
        }}  onPress={() => setUserAnswear(2)}>
            C. {Data.answears[Data.desired.id][questionNumber][2]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor:"#1f2125",
            width:undefined,
        }}  onPress={() => setUserAnswear(3)}>
            D. {Data.answears[Data.desired.id][questionNumber][3]}
        </Button>
        <Text></Text>
        <Button style={{
         backgroundColor: '#FF3131',
         }} onPress={()=> navigation.navigate('PreQuiz')}>Renunta</Button>
        </ScrollView>
       
    );
    }else{
        let bk0 = "#1f2125";
        let bk1 = "#1f2125";
        let bk2 = "#1f2125";
        let bk3 = "#1f2125";
        let outputColor = '#1f2125';
       let correctColor = "#00CB5D";
       let expected = Data.answears[Data.desired.id][questionNumber][4];
       if(userAnswear !== Data.answears[Data.desired.id][questionNumber][4])
            outputColor = "#CF0505";
        else{
            outputColor = "#00CB5D";
            
        }
        if(userAnswear === 0)
            bk0 = outputColor;
        if(userAnswear === 1)
            bk1 = outputColor;
        if(userAnswear === 2)
            bk2 = outputColor;
        if(userAnswear === 3)
            bk3 = outputColor;
        
        if(expected === 0)
            bk0 = correctColor;
        if(expected === 1)
            bk1 = correctColor;
        if(expected === 2)
            bk2 = correctColor;
        if(expected === 3)
            bk3 = correctColor;

        return(
        <ScrollView style={{backgroundColor: "#16171B"}}>
        <Text style={{
            paddingBottom: 40,
            color:'transparent'
           }}>dasdad</Text>
        
        <Text variant='headlineSmall' style={{
            color:'white',
            width:380,
            paddingLeft:10,
            paddingBottom:20,
            }}>{Data.test[Data.desired.id][questionNumber]}</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor: bk0,
        }} >
            A. {Data.answears[Data.desired.id][questionNumber][0]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor: bk1,
        }}>
            B. {Data.answears[Data.desired.id][questionNumber][1]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor: bk2,
        }} >
            C. {Data.answears[Data.desired.id][questionNumber][2]}
        </Button>
        <Text style={{
            color:'transparent',
            
        }}>d</Text>
        <Button textColor = 'white'  style={{
            borderColor:'white',
            alignItems:'flex-start',
            backgroundColor: bk3,
            width:undefined,
        }} >
            D. {Data.answears[Data.desired.id][questionNumber][3]}
        </Button>
        <Text></Text>
        <Button style={{
         backgroundColor: '#FCC22D',
         }} onPress={()=> procced()}>Continua</Button>
         <Text></Text>
        <Button style={{
         backgroundColor: '#FF3131',
         }} onPress={()=> navigation.navigate('PreTest')}>Renunta</Button>
        </ScrollView>);
    }
}