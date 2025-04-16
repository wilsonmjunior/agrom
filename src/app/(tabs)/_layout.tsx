import { Tabs } from 'expo-router';
import {
  Home,
  User2,
  Wallet,
  MessageCircle,
  Phone,
} from 'lucide-react-native';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            textAlign: 'center',
            marginTop: 5,
          },
          tabBarStyle: {
            backgroundColor: '#00BFA5',
            borderTopWidth: 0,
            borderRadius: 40,
            height: 70,
            marginHorizontal: 16,
            paddingTop: 6,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.05,
            shadowRadius: 3,
            elevation: 4,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#008C76',
        }}>
        <Tabs.Screen
          name="(home)"
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'Wallet',
            tabBarIcon: ({ size, color }) => <Wallet size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: 'Messages',
            tabBarIcon: ({ size, color }) => <MessageCircle size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: 'Calls',
            tabBarIcon: ({ size, color }) => <Phone size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ size, color }) => <User2 size={size} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}