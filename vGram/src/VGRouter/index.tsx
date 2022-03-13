import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES} from './routes';

//Auth Screen
import VGSpalsh from '../VGScreen/VGAuth/VGSplash';
import VGLogin from '../VGScreen/VGAuth/VGLogin';
import VGSignUp from '../VGScreen/VGAuth/VGSignUp';
import Home from '../VGScreen/VGMainScreens/Home';
interface RoutesProps {
  navigation: StackNavigationProp<RootStackParamList>;
  props: StackNavigationProp<RootStackParamList>;
}
export type RootStackParamList = {
  [ROUTES.Splash]: undefined;
  [ROUTES.Login]: undefined;
  [ROUTES.Signup]: undefined;
  [ROUTES.Home]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// const MainTabNavigator: React.FC<RoutesProps> = ({navigation}) => {
//   return (
//     <Tab.Navigator
//       tabBar={(props: any) => {
//         return <DGMainTabBar {...props} navigation={navigation} />;
//       }}
//       screenOptions={{headerShown: false}}>
//       <Tab.Screen name={ROUTES.Home} component={HomeStackNavigator} />
//       <Tab.Screen name={ROUTES.Search} component={DGSearchNavigator} />
//       <Tab.Screen name={ROUTES.Add} component={DGAddPostNavigator} />
//       <Tab.Screen
//         name={ROUTES.Activity}
//         component={DGActivity}
//         options={{tabBarBadge: 3}}
//       />
//       <Tab.Screen name={ROUTES.Profile} component={DGProfileNavigator} />
//     </Tab.Navigator>
//   );
// };

const AppContainer: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTES.Splash}>
        <Stack.Screen name={ROUTES.Splash} component={VGSpalsh} />
        <Stack.Screen name={ROUTES.Login} component={VGLogin} />
        <Stack.Screen name={ROUTES.Signup} component={VGSignUp} />

        <Stack.Screen name={ROUTES.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
