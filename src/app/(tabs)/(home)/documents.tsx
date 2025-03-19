import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Upload, Check } from 'lucide-react-native';
import { router } from 'expo-router';

export default function DocumentsScreen() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const pickImage = async (side: 'front' | 'back') => {
    const result = await ImagePicker.launchImagePickerAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (side === 'front') {
        setFrontImage(result.assets[0].uri);
      } else {
        setBackImage(result.assets[0].uri);
      }
    }
  };

  const handleSubmit = () => {
    // Here you would typically upload the images to your backend
    router.push('/profile');
  };

  const isComplete = frontImage && backImage;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Verification</Text>
      <Text style={styles.description}>
        Please upload clear photos of your ID document (front and back)
      </Text>

      <View style={styles.uploadSection}>
        <TouchableOpacity
          style={[styles.uploadButton, frontImage && styles.uploadComplete]}
          onPress={() => pickImage('front')}>
          {frontImage ? (
            <Image source={{ uri: frontImage }} style={styles.preview} />
          ) : (
            <>
              <Upload size={32} color={frontImage ? '#fff' : '#0066ff'} />
              <Text style={styles.uploadText}>Front of ID</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.uploadButton, backImage && styles.uploadComplete]}
          onPress={() => pickImage('back')}>
          {backImage ? (
            <Image source={{ uri: backImage }} style={styles.preview} />
          ) : (
            <>
              <Upload size={32} color={backImage ? '#fff' : '#0066ff'} />
              <Text style={styles.uploadText}>Back of ID</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {isComplete && (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Check size={24} color="#fff" />
          <Text style={styles.submitText}>Submit Documents</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  uploadSection: {
    flexDirection: 'column',
    gap: 20,
    marginBottom: 30,
  },
  uploadButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0066ff',
    borderStyle: 'dashed',
    height: 200,
  },
  uploadComplete: {
    borderStyle: 'solid',
    backgroundColor: '#0066ff',
  },
  uploadText: {
    marginTop: 10,
    fontSize: 16,
    color: '#0066ff',
  },
  preview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#0066ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    gap: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});