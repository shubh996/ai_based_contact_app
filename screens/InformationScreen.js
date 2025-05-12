import React from 'react';
import { View, Text, SafeAreaView,TouchableOpacity, Share } from 'react-native';
import WebView from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';


const InformationScreen = (props) => {

  console.log("uid : ", props.route.params.uid)

  return (
      <SafeAreaView style={{ flex: 1}}>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      padding: 10,
      paddingTop:-15
    }}>
      <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ padding: 10 }}>
        <Ionicons name="arrow-back-sharp" size={27} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Share.share({ message: `https://1qr.co.in/test${props.route.params.uid}` })} style={{ padding: 10 }}>
      <Text style={{ fontFamily: 'UberMoveBold', fontSize: 22, color: '#1d1d1d' }}>Share </Text>
      </TouchableOpacity>

    </View>
    <WebView source={{ uri: `https://1qr.co.in/test${props.route.params.uid}` }} />
  </SafeAreaView>

  );
};

export default InformationScreen;
