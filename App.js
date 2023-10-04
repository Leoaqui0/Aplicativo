import Routes from "./src/routes"
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import welcomeScreen from "./src/welcomeScreen";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
          name="welcomeScreen" 
          component={welcomeScreen}
          options={{
            headerShown:false,
            
          }}
          />

          <Stack.Screen 
            name="routes" 
            component={Routes}  
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
    </NavigationContainer> 
  )
}