import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { collection, getDocs, where, query, getDoc } from 'firebase/firestore';
import { fs } from '../firebaseConfig'; 



export default function UserInformation(props) {

  const [userData, setUserData] = useState(props?.route?.params?.userData);
  const [bannerImagesLength, setBannerImagesLength] = useState(0);

  useEffect(() => {

    const fetchBannerImagesLength = async () => {
   // Fetch Number of Banner Images
   try {
    const userDocRef = doc(fs, "users", userData?.uid);
    console.log("User doc ref:", userDocRef);
    
    const bannerCollectionRef = collection(userDocRef, "banner");
    console.log("Banner collection ref:", bannerCollectionRef);
    
    const bannerDocRef = doc(bannerCollectionRef, "images");
    console.log("Banner doc ref:", bannerDocRef);
    
    const bannerDocSnapshot = await getDoc(bannerDocRef);
    console.log("Banner doc snapshot:", bannerDocSnapshot);

    if (bannerDocSnapshot.exists()) {
      const data = bannerDocSnapshot.data()?.data;
      setNumberOfBannerImages(data ? data.length : 0);
    } else {
      console.log("Banner doc does not exist");
    }

  } catch (error) {
    console.error("Error fetching banner images:", error);
  }
    };

    fetchBannerImagesLength();

  }, []);


  const unixToHhMmDdMmYy = (unixTimestamp) => {
    // Convert 13-digit Unix timestamp to seconds
    const unixTimestampSeconds = unixTimestamp / 1000;
    
    // Create a new Date object from the Unix timestamp
    const date = new Date(unixTimestampSeconds * 1000);
    
    // Format the date to HH:MM DD:MM:YY
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')} ${String(date.getUTCDate()).padStart(2, '0')}-${months[date.getUTCMonth()]}`;
    
    return formattedDate;
  };

  const unixDdMmYy = (unixTimestamp) => {
    // Convert 13-digit Unix timestamp to seconds
    const unixTimestampSeconds = unixTimestamp / 1000;
    
    // Create a new Date object from the Unix timestamp
    const date = new Date(unixTimestampSeconds * 1000);
    
    // Format the date to HH:MM DD:MM:YY
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${String(date.getUTCDate()).padStart(2, '0')}-${months[date.getUTCMonth()]}`;
    
    return formattedDate;
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>

      <Text style={styles.title}>{userData?.name}</Text>

      <ScrollView contentContainerStyle={styles.container}>
      
      {/* Account created*/}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons color="#000" name="qr-code-outline" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>1QR Landing Page</Text>
              <Text style={styles.cardDates}>Created on {unixDdMmYy(userData?.account_created_on)}</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Apps Integrated */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons color="#000" name="logo-whatsapp" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Apps Integrated</Text>
              <Text style={styles.cardDates}>Total: {userData?.active_feature?.length}</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Banner Images */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="mail" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Banner Images</Text>
              <Text style={styles.cardDates}>Total: {bannerImagesLength}</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Vertical videos */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="instagram" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Vertical videos</Text>
              <Text style={styles.cardDates}>May 2016 - Sep 2017</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Twitter */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="twitter" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Twitter</Text>
              <Text style={styles.cardDates}>Mar 2014 - May 2016</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Facebook */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="facebook" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Facebook</Text>
              <Text style={styles.cardDates}>Sep 2013 - Mar 2014</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* YouTube */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="youtube" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>YouTube</Text>
              <Text style={styles.cardDates}>Dec 2008 - Feb 2012</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Website */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="globe" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Website</Text>
              <Text style={styles.cardDates}>Jul 2007 - Dec 2008</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Document */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <FeatherIcon color="#000" name="file" size={30} />
          </View>

          <View style={styles.cardDelimiter}>
            <View style={styles.cardDelimiterLine} />
            <View style={[styles.cardDelimiterInset]} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardBodyContent}>
              <Text style={styles.cardTitle}>Document</Text>
              <Text style={styles.cardDates}>Feb 2005 - Jul 2007</Text>
            </View>

            <View style={styles.cardBodyAction}>
              <FeatherIcon color="#181818" name="arrow-right" size={16} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

    </ScrollView>    
  

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom:200
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 10,
    fontFamily:"UberMoveBold",
    paddingTop: 24,
    paddingLeft:34
  },
  /** Card */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDelimiter: {
    position: 'relative',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  cardDelimiterLine: {
    position: 'absolute',
    left: 30,
    top: '50%',
    borderLeftWidth: 1,
    borderColor: '#eee',
    height: '100%',
    zIndex: 1,
  },
  cardDelimiterInset: {
    width: 12,
    height: 12,
    borderWidth: 3,
    borderRadius: 9999,
    backgroundColor: '#fff',
    borderColor: '#ffcb05',
    zIndex: 9,
    position: 'relative',
  },
  cardBody: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardBodyContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 3,
    fontFamily:"UberMoveMedium"
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#464646',
    marginBottom: 3,
  },
  cardDates: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ababab',
  },
  cardBodyAction: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    maxWidth: 28,
    alignItems: 'flex-end',
  },
});

