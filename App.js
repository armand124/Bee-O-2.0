import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import Quiz from './src/screens/Quiz';
import Profile from './src/screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BottomNavigation,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Home from './src/screens/Home';
import * as React from 'react';
import Register from './src/screens/Register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PreTest from './components/quiz/PreTest';
import Test from './components/quiz/Test';
import Digestive from './components/lessons/read/DigestiveSystem';
import RespiratorySystemRead from './components/lessons/read/RespiratorySystemRead';
import Circulator from './components/lessons/read/CirculatorySystem';
import Heart from './components/lessons/read/Heart';
import SistemNervos from './components/lessons/read/NervousSystem';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  
    "colors": {
      "primary": "#2c2a26",
      "onPrimary": "#2c2a26",
      "primaryContainer": "#f7ce45",
      "onPrimaryContainer": "#2c2a26",
      "secondary": "#2c2a26",
      "onSecondary": "#2c2a26",
      "secondaryContainer": "#2c2a26",
      "onSecondaryContainer": "#f7ce45",
      "tertiary": "#f7ce45",
      "onTertiary": "#f7ce45",
      "tertiaryContainer": "#f7ce45",
      "onTertiaryContainer": "#f7ce45",
      "error": "#f7ce45",
      "onError": "#f7ce45",
      "errorContainer": "#f7ce45",
      "onErrorContainer": "#f7ce45",
      "background": "#f7ce45",
      "onBackground": "#f7ce45",
      "surface": "#2c2a26",
      "onSurface": "#2c2a26",
      "surfaceVariant": "#2c2a26",
      "onSurfaceVariant": "#2c2a26",
      "outline": "rgb(127, 118, 103)",
      "outlineVariant": "#f7ce45",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "#f7ce45",
      "inverseOnSurface": "#f7ce45",
      "inversePrimary": "#f7ce45",
      "elevation": {
        "level0": "transparent",
        "level1": "#f7ce45",
        "level2": "rgb(244, 238, 235)",
        "level3": "rgb(240, 233, 227)",
        "level4": "rgb(239, 232, 224)",
        "level5": "rgb(236, 229, 219)"
      },
      "surfaceDisabled": "#f7ce45",
      "onSurfaceDisabled": "#f7ce45",
      "backdrop": "#f7ce45",
    }
  }
  



function Main()
{
  return (
  <PaperProvider theme={theme}>
        <Stack.Navigator  screenOptions = {{headerShown:false}}>
          <Stack.Screen name = "Home" component={Home}/>
          <Stack.Screen name = "PreQuiz" component={PreTest}/>
          <Stack.Screen name = "Test" component = {Test}/>
          <Stack.Screen name = "Digestive" component={Digestive}/>
          <Stack.Screen name = 'Respiratory' component={RespiratorySystemRead}/>
          <Stack.Screen name = 'Heart' component={Heart}/>
          <Stack.Screen name = 'Circulator' component={Circulator}/>
          <Stack.Screen name = 'Nervos' component={SistemNervos}/>
        </Stack.Navigator>
      </PaperProvider>
    );
    
}


export default function App() {
  const [name,setName] = React.useState("");
  const [surname,setSurname] = React.useState("");

  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };
  useEffect(() => {
    readItemFromStorage();
  }, []);
  
  if (!value)
  {
    readItemFromStorage();
    console.log(value);
    return(
        <PaperProvider theme={theme}>
          <NavigationContainer>
              <Stack.Navigator screenOptions = {{headerShown:false}}>
                <Stack.Screen name = "Register" component={Register}/>
                <Stack.Screen name = "Main" component={Main}/>
              </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
  }
  else{
    readItemFromStorage();
    console.log(value);
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#1f2125' }} activeColor='#f7ce45' inactiveColor='#65676b' 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Meniu') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }
             else if (route.name === 'Teste') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Meniu" component={Main} />
        <Tab.Screen name="Teste" component={Quiz}/>
        <Tab.Screen name="Profil" component={Profile}/>
      </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
      );
      
  }
}
