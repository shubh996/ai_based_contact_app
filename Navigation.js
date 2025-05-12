import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import ContactScreen from './screens/ContactScreen';
import { Ionicons } from '@expo/vector-icons';
import InformationScreen from './screens/InformationScreen';
import QRScanner from './screens/QRScanner';
import Dashboard from './screens/Dashboard';
import { MaterialIcons } from '@expo/vector-icons';
import OnboardingScreen from './screens/OnboardingScreen';
import ProfileInformation from './screens/ProfileInformation';
import UsersScreen from './AdminScreens/UsersScreen';
import UserInformation from './AdminScreens/UserInformation';

//Stack Screens
const Stack = createNativeStackNavigator()
function StackGroup(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactScreen} options={{ headerShown :false}}/>
        <Stack.Screen name="Information" component={InformationScreen} options={{ headerShown :false}} />
        <Stack.Screen name="ProfileInformation" component={ProfileInformation} options={{ headerShown :false}} />

      </Stack.Navigator>
    )
}
function StackGroupAdmin(){
  return(
  <Stack.Navigator>
      <Stack.Screen name="Contacts" component={UsersScreen} options={{ headerShown :false}}/>
      <Stack.Screen name="UserInformation" component={UserInformation} options={{ headerShown :false}} />
      <Stack.Screen name="ProfileInformation" component={ProfileInformation} options={{ headerShown :false}} />

    </Stack.Navigator>
  )

}


//Bottom Tabs
const Tab = createBottomTabNavigator()
function TabGroup() {

    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'StackGroup') {
              iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
            } else if (route.name === 'Scan QR Code') {
              iconName = focused ? 'qr-code' : 'scan';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'extension-puzzle' : 'extension-puzzle-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { height:"10%",paddingTop:10},
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="StackGroup" component={StackGroup} options={{ headerShown :false, tabBarLabel:"Contact"}} />
        <Tab.Screen name="Scan QR Code" component={QRScanner} options={{ headerShown :false}}/>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown :false}}/>
      </Tab.Navigator>
    )
}
function TabGroupAdmin() {

  return(
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'StackGroup') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
          } else if (route.name === 'Scan QR Code') {
            iconName = focused ? 'qr-code' : 'scan';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'extension-puzzle' : 'extension-puzzle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { height:"10%",paddingTop:10},
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
      }}
    >
      
      <Tab.Screen name="StackGroup" component={StackGroup} options={{ headerShown :false, tabBarLabel:"Users"}} />
      <Tab.Screen name="Scan QR Code" component={QRScanner} options={{ headerShown :false , tabBarLabel:"1QR Code"}}/>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown :false}}/>
    </Tab.Navigator>
  )
}

export default function Navigation() {


    return(
        <NavigationContainer>
            <TabGroupAdmin/>
        </NavigationContainer>
    )

}
