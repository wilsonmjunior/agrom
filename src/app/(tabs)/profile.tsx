import { StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Fragment, useReducer } from 'react';

interface MenuItem {
  title: string;
  isLogout?: boolean;
}

const menuItems: MenuItem[] = [
  { title: 'Edit Profile Name' },
  { title: 'List project' },
  { title: 'Change Password' },
  { title: 'Change Email Address' },
  { title: 'Settings' },
  { title: 'Preferences' },
  { title: 'Logout', isLogout: true },
];

const { width } = Dimensions.get('window'); 

const INITIAL_STATE = {
  name: '', 
  email: '', 
  phone: '',
};

type State = typeof INITIAL_STATE;

type Action = { type: 'INCREMENT' } | { type: 'SET_DATA'; payload: Partial<State> };

export default function ProfileScreen() {
  const [state, dispatch] = useReducer((state: State, action: Action) => {
    switch(action.type) {
      case 'INCREMENT': return { name: '', email: '', phone: '' };
      default: return state;
    }
  }, INITIAL_STATE);

  // dispatch({ type: 'INCREMENT' })

  const renderItem = ({ item, index }: { item: MenuItem; index: number }) => (
    <RectButton 
      underlayColor="#00BFA5"
      style={{ 
        width: width - 48, 
        borderTopLeftRadius: index === 0 ? 10 : 0, 
        borderTopRightRadius: index === 0 ? 10 : 0, 
        borderBottomLeftRadius: index === menuItems.length - 1 ? 10 : 0,
        borderBottomRightRadius: index === menuItems.length - 1 ? 10 : 0,
        backgroundColor: '#ffffff',
      }}
    >
      <View style={styles.menuContent}>
        <Text style={[styles.menuText, item.isLogout && styles.logoutText]}>{item.title}</Text>
        <ChevronRight size={20} color="#666666" />
      </View>
    </RectButton>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/wilsonmjunior' }} 
          style={styles.avatar}
        />

        <View style={styles.menu}>
          {
            menuItems.map((item, index) => (
              <Fragment key={index}>
                {renderItem({ item, index })}
              </Fragment>
            ))
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    // marginBottom: 20,
  },
  menu: {
    marginTop: 40,
  },
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logoutText: {
    color: 'red',
  },
});
