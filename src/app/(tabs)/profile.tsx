import { StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { useUnistyles } from 'react-native-unistyles';

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

export default function ProfileScreen() {
  const ss = useUnistyles();

  console.warn('color: ',ss.theme.colors.primary)

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
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/wilsonmjunior' }} 
          style={styles.avatar}
        />

        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
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
