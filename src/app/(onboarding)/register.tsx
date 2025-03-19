import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { ChevronRight, Mail, Lock, User } from 'lucide-react-native';

export default function RegisterScreen() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      router.replace('/(tabs)/(home)');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
            <Text style={styles.stepTitle}>What's your name?</Text>
            <Text style={styles.stepDescription}>
              Please enter your full name as it appears on your ID
            </Text>
            <View style={styles.inputContainer}>
              <User size={20} color="#71717a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                placeholderTextColor="#71717a"
                autoFocus
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
            <Text style={styles.stepTitle}>What's your email?</Text>
            <Text style={styles.stepDescription}>
              We'll use this to send you important updates
            </Text>
            <View style={styles.inputContainer}>
              <Mail size={20} color="#71717a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#71717a"
                autoFocus
              />
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
            <Text style={styles.stepTitle}>Create a password</Text>
            <Text style={styles.stepDescription}>
              Choose a strong password to protect your account
            </Text>
            <View style={styles.inputContainer}>
              <Lock size={20} color="#71717a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry
                placeholderTextColor="#71717a"
                autoFocus
              />
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1000&auto=format&fit=crop' }}
              style={styles.successImage}
            />
            <Text style={styles.stepTitle}>Registration Complete!</Text>
            <Text style={styles.stepDescription}>
              Your account has been created successfully. Welcome to our community!
            </Text>
          </View>
        );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((i) => (
            <View
              key={i}
              style={[
                styles.progressDot,
                i <= step && styles.progressDotActive,
              ]}
            />
          ))}
        </View>
        <Text style={styles.stepIndicator}>Step {step} of 4</Text>
      </View>

      {renderStep()}

      <View style={styles.buttonContainer}>
        {step > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === 4 ? 'Get Started' : 'Continue'}
          </Text>
          <ChevronRight size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e4e4e7',
  },
  progressDotActive: {
    backgroundColor: '#0066ff',
    width: 24,
  },
  stepIndicator: {
    fontSize: 14,
    color: '#71717a',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
  },
  successImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 24,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#18181b',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  stepDescription: {
    fontSize: 16,
    color: '#71717a',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    width: '100%',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f5',
    padding: 16,
    borderRadius: 12,
  },
  backButtonText: {
    fontSize: 16,
    color: '#71717a',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  nextButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066ff',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});