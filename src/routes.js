import  React, { PropTypes, Component }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from './pages/Catalog';
import Header from 'src/components/Header/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            cardStyle:{backgroundColor: '#313746'},
          }}
          initialRouteName='Catalog'

        
        >
          <Stack.Screen
            name="Catalog"
            component={Catalog}
            options={{
              headerShown:true,
              headerTransparent:true,
              headerTitle:()=> <Header />,
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}