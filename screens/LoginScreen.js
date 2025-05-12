import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INPUT_OFFSET = 50;

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter your phone</Text>

          <Text style={styles.subtitle}>
            You will receive a 4 digit code to verify your account
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>+1</Text>

            <TextInput
              keyboardType="phone-pad"
              onChangeText={phone => setForm({ ...form, phone })}
              placeholder="Phone number"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.phone} />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <View style={{ width: 32 }} />

                <Text style={styles.btnText}>Continue</Text>

                <MaterialCommunityIcons
                  color="#fff"
                  name="arrow-right"
                  size={20}
                  style={{ marginLeft: 12 }} />
              </View>
            </TouchableOpacity>

            <Text style={styles.formActionSpacer}>Or continue with</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="email-fast-outline"
                  size={22}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnSecondaryText}>Email</Text>

                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="apple"
                  size={22}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnSecondaryText}>Apple</Text>

                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="google"
                  size={22}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnSecondaryText}>Google</Text>

                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="facebook"
                  size={22}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnSecondaryText}>Facebook</Text>

                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Not a member? <Text style={{ color: '#000', fontFamily:"UberMoveBold" }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Form */
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 12,
  },
  formActionSpacer: {
    marginVertical: 32,
    fontSize: 14,
    fontWeight: '600',
    color: '#4b4858',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 16,
    fontWeight: '600',
    color: '#51505a',
    textAlign: 'center',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    position: 'absolute',
    width: INPUT_OFFSET,
    lineHeight: 54,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    zIndex: 9,
    paddingLeft: 5,
  },
  inputControl: {
    height: 54,
    backgroundColor: '#eee',
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000',
    marginBottom: 12,
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
  },
});