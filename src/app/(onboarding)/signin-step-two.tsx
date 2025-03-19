import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { ChevronRight, LockIcon } from 'lucide-react-native';

import { Header } from '@/src/components/screens';

export default function SignInStepTwo() {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    router.push({ pathname: '/(tabs)/(home)' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <LockIcon size={24} color="#A1A1AA" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#A1A1AA"
            />
          </View>
        </View>

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={handleContinue}
          >
            <ChevronRight size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 100,
    right: 0,
    left: 0,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: '15%',
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: '#18181B',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#71717A',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  formContainer: {
    width: '100%',
    flex: 1,
    justifyContent: "center"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 16,
    borderWidth: 0.5,
    borderColor: "#A1A1AA30",
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  input: {
    height: 60,
    fontSize: 16,
    color: '#18181B',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  buttonsWrapper: { 
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignItems: "flex-end",
  },
  continueButton: {
    backgroundColor: '#07A4A2',
    width: 80,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
}); 