import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { fs } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const OnboardingScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    youtube: '',
    snapchat: '',
    customUrls: [''],
    documents: [''],
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddCustomUrl = () => {
    setFormData({
      ...formData,
      customUrls: [...formData.customUrls, ''],
    });
  };

  const handleCustomUrlChange = (index, value) => {
    const newCustomUrls = [...formData.customUrls];
    newCustomUrls[index] = value;
    setFormData({
      ...formData,
      customUrls: newCustomUrls,
    });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(fs, 'profiles'), formData);
      console.log("Document written with ID: ", docRef.id);
      Alert.alert('Submitted!', 'Your details have been submitted successfully.');
    } catch (error) {
      console.error("Error uploading data to Firestore:", error);
      Alert.alert('Error', 'Failed to submit your details. Please try again.');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Create your own contact</Text>
        <Text style={styles.subtitle}>Fill in details</Text>
      </View>

      <ScrollView style={styles.scrollView}>

        <View style={styles.section}>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChangeText={(text) => handleChange('whatsapp', text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Instagram ID"
            value={formData.instagram}
            onChangeText={(text) => handleChange('instagram', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Twitter ID"
            value={formData.twitter}
            onChangeText={(text) => handleChange('twitter', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChangeText={(text) => handleChange('linkedin', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Facebook URL"
            value={formData.facebook}
            onChangeText={(text) => handleChange('facebook', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="YouTube Channel URL"
            value={formData.youtube}
            onChangeText={(text) => handleChange('youtube', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Snapchat ID"
            value={formData.snapchat}
            onChangeText={(text) => handleChange('snapchat', text)}
          />
        </View>

        <View style={styles.section}>

          {formData.customUrls.map((url, index) => (
            <View key={index} style={styles.urlContainer}>
              <TextInput
                style={styles.input}
                placeholder="Website"
                value={url}
                onChangeText={(text) => handleCustomUrlChange(index, text)}
              />
              {index === formData.customUrls.length - 1 && (
                <TouchableOpacity style={styles.addButton} onPress={handleAddCustomUrl}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    paddingHorizontal: 24,
    flex: 1,
  },
  header: {
    paddingBottom: 20,
  },
  title: {
    fontFamily: "UberMoveBold",
    fontSize: 25,
    color: '#1d1d1d',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: "UberMoveMedium",
    fontSize: 16,
    color: '#1d1d1d',
  },
  input: {
    height: 40,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: "UberMoveMedium",
    color: '#1d1d1d',
    flex: 1,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    height: 40,
    borderRadius: 5,
    marginBottom: 16,
    flex: 1,
  },
  uploadButtonText: {
    fontFamily: "UberMoveMedium",
    fontSize: 16,
    color: '#1d1d1d',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1d1d',
    height: 40,
    width: 40,
    borderRadius: 5,
    marginBottom: 16,
    marginLeft: 16,
  },
  addButtonText: {
    fontFamily: "UberMoveMedium",
    fontSize: 20,
    color: '#fff',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1d1d',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    position:"absolute",
    bottom:25,
    left:"7.5%"
  },
  submitButtonText: {
    fontFamily: "UberMoveBold",
    fontSize: 18,
    color: '#fff',
  },
  section: {
    marginVertical: 0,
  },
  sectionTitle: {
    fontFamily: "UberMoveBold",
    fontSize: 24,
    color: '#000',
    marginBottom: 24,
  },
  urlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scrollView: {
    marginBottom: 100, // Adjusted margin to make space for submit button
  },
});

export default OnboardingScreen;
