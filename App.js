//import './services/i18n'; // Import the i18n setup
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';  // Import StatusBar from React Native

import WelcomeScreen from './app/Screens/WelcomeScreen';


const Stack = createNativeStackNavigator();



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);



  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">

          {/* Welcome Screen */}
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} 
          />


        
         

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
