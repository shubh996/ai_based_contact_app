import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData({ type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const extractCode = (data) => {
    let code = '';
    
    if (data.includes('qrcode')) {
      code = data.split('qrcode')[1];
    } else if (data.includes('test')) {
      code = data.split('test')[1];
    }
    

    
    return code;
  };
  
  

  const gotoInformation =() =>{
    console.log(barcodeData)
    barcodeData && props?.navigation?.navigate("Information",{uid:extractCode(barcodeData.data)})
    setScanned(false)
  }

  return (
    scanned 
    ?gotoInformation()
    :<View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}

        <View style={styles.barcodeData}>
          <Text style={{textAlign:"center",fontFamily:"UberMoveBold",fontSize:17}}>Scan 1QR Code to save contact</Text>
        </View>


   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  barcodeData: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 6,
    margin: 15,
  },
});
