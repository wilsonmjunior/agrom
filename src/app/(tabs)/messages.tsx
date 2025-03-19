import { View, Text, StyleSheet } from 'react-native';
import { useFonts, PlusJakartaSans_600SemiBold, PlusJakartaSans_400Regular } from '@expo-google-fonts/plus-jakarta-sans';

export default function MessagesScreen() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-SemiBold': PlusJakartaSans_600SemiBold,
    'PlusJakartaSans-Regular': PlusJakartaSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
}); 