import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

import TeamIllustration from '../assets/team-illustration.svg';

export default function InitialHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TeamIllustration
          width="100%"
          height={280}
          style={styles.illustration}
        />
        <Text style={styles.title}>Bem vindo ao time{'\n'} AGROM</Text>
        <Text style={styles.subtitle}>
          Sua nova forma de negociar commodities com praticidade, segurança e agilidade.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => router.push('/(onboarding)/signin-step-one')}
        >
          <Text style={styles.startButtonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  headerText: {
    fontSize: 16,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  illustration: {
    width: '100%',
    height: 280,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-SemiBold',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    color: '#71717a',
    fontFamily: 'PlusJakartaSans-Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  startButton: {
    backgroundColor: '#00BFA5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
}); 