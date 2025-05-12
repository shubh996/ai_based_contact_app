import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Example() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const items = [
    {
      icon: FeatherIcon,
      iconName: 'phone-call',
      label: 'Phone number',
      company: 'Call',
      start: new Date(2017, 8, 1),
      end: new Date(2020, 12, 1),
    },
    {
      icon: Ionicons,
      iconName: 'logo-whatsapp',
      label: 'WhatsApp',
      company: 'WhatsApp',
      start: new Date(2020, 12, 1),
      end: new Date(2021, 3, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'mail',
      label: 'Email',
      company: 'Email',
      start: new Date(2017, 8, 1),
      end: new Date(2020, 12, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'instagram',
      label: 'Instagram',
      company: 'Instagram',
      start: new Date(2016, 4, 1),
      end: new Date(2017, 8, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'twitter',
      label: 'Twitter',
      company: 'Twitter',
      start: new Date(2014, 2, 1),
      end: new Date(2016, 4, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'facebook',
      label: 'Facebook',
      company: 'Facebook',
      start: new Date(2013, 8, 1),
      end: new Date(2014, 2, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'youtube',
      label: 'YouTube',
      company: 'YouTube',
      start: new Date(2008, 11, 1),
      end: new Date(2012, 1, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'globe',
      label: 'Website',
      company: 'Website',
      start: new Date(2007, 6, 1),
      end: new Date(2008, 11, 1),
    },
    {
      icon: FeatherIcon,
      iconName: 'file',
      label: 'Document',
      company: 'Document',
      start: new Date(2005, 1, 1),
      end: new Date(2007, 6, 1),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Your contact</Text>
            <Text style={styles.subtitle}>
              Fill in the fields below to get started with your contact card.
            </Text>
          </View>

          <View style={{backgroundColor:"#333",height:0,marginHorizontal:24}}></View>

          <ScrollView contentContainerStyle={styles.form}>
            {items.map(({ icon: Icon, iconName, label, company, start, end }, index) => (
              <View key={index} style={styles.inputContainer}>
                <View style={styles.row}>
                  <Icon name={iconName} size={20} color="#6b7280" style={styles.icon} />
                  <Text style={styles.inputLabel}>{label}</Text>

                </View>
                <TextInput
                  clearButtonMode="while-editing"
                  placeholder={`Enter ${label}`}
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form[label.toLowerCase().replace(' ', '')] || ''}
                  onChangeText={(text) => setForm({ ...form, [label.toLowerCase().replace(' ', '')]: text })}
                />
              </View>
            ))}
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
    fontFamily: "UberMoveBold",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    fontFamily: "UberMoveRegular",
  },
  /** Header */
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 14,
    paddingHorizontal: 24,

  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop:20
  },
  inputContainer: {
    marginBottom: 26,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    fontFamily: "UberMoveMedium",
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
    fontFamily: "UberMoveRegular",
    flex: 1,
  },
});
