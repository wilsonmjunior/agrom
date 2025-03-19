import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import {
  ChevronRight,
  MailIcon
} from 'lucide-react-native';

import { Header } from '@/src/components/screens';

export default function SignInStepOne() {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    router.push({ pathname: '/signin-step-two' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MailIcon size={24} color="#A1A1AA" />
            <TextInput
              style={styles.input}
              placeholder="Email"
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
    backgroundColor: '#ffffff'
  },
  content: {
    flex: 1,
    paddingVertical: 24,
  },
  formContainer: {
    marginTop: 24,
    justifyContent: "center",
    paddingHorizontal: 24
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 24
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