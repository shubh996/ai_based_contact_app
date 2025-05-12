import React, { useEffect, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  Button,
  Alert
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { fs } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';

export default function UsersScreen(props) {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [deviceContacts, setDeviceContacts] = useState([]);


  useEffect(() => {
    const fetchContacts = async () => {
      let fetchedContacts = [];

      // Fetch Firestore Contacts
      try {
        const usersRef = collection(fs, "users");
        const querySnapshot = await getDocs(usersRef);
  
        querySnapshot.forEach((doc) => {
          if (doc?.data()?.phonenumber && doc?.data()?.name) {
            fetchedContacts.push(doc?.data());
          }
        });
  
        setContacts(fetchedContacts);
  
      } catch (error) {
        console.log("error => ", error);
      }
    };
  
    fetchContacts();
  
  }, []);
  

  const filteredContacts = useMemo(() => {
    if (!searchTerm) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  const sections = useMemo(() => {
    const sectionsMap = filteredContacts.reduce((acc, item) => {
      const [lastName] = item.name.split(' ');

      return Object.assign(acc, {
        [lastName[0]]: [...(acc[lastName[0]] || []), item],
      });
    }, {});

    return Object.entries(sectionsMap)
      .map(([letter, items]) => ({
        letter,
        items,
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, [filteredContacts]);


  const renderItem = ( item ) => {
  
    return (
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          onPress={() => {
            setSelectedContact({ uid: item.uid, name: item.name });
            props?.navigation.navigate("UserInformation", { userData:item});
          }}>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <View style={[styles.cardImg, styles.cardAvatar]}>
                <Text style={styles.cardAvatarText}>{item?.name[0]}</Text>
              </View>
            </View>
  
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item?.name}</Text>
              <View style={styles.cardStats}>
                    <View style={styles.cardStatsItem}>
                      <Ionicons color="#636a73" name="qr-code" />

                      <Text style={styles.cardStatsItemText}>
                         {item?.total_scans} scans
                      </Text>
                    </View>

                    <View style={styles.cardStatsItem}>
                      <FeatherIcon color="#636a73" name="clock" />

                      <Text style={styles.cardStatsItemText}>{unixToHhMmDdMmYy(item?.last_scanned_at)}</Text>
                    </View>
                  </View>

            </View>
  
            <View style={styles.cardAction}>
              <FeatherIcon
                color="#9ca3af"
                name="chevron-right"
                size={22} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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

  
  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>

      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <View style={styles.section} key={item.letter}>
            <Text style={styles.sectionTitle}>{item.letter}</Text>
            <View style={styles.sectionItems}>
              {item.items.map(renderItem)}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.letter}
        style={{marginTop:70}}
      />

    <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#9ca3af" style={{paddingLeft:20}}/>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 64,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
    position:"absolute",
    top:"6%",
    width:"100%",
    paddingVertical:18,
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"center",
    textAlign:"center"
  },
  title: {
    fontFamily: "UberMoveBold",
    fontSize: 32,
    color: '#1d1d1d',
    marginBottom: 12,
  },
  searchBar: {
    display:"flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    marginTop: 0,
    textAlign:"center",
    padding:15
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 19,
    fontFamily: "UberMoveMedium",
    color: '#1d1d1d',
    display:"flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',
    width:"100%", 
  },
  /** Section */
  section: {
    marginVertical: 22,
    paddingLeft: 24,
  },
  sectionTitle: {
    fontFamily: "UberMoveBold",
    fontSize: 35,
    color: '#000',
  },
  sectionItems: {
    marginTop: 8,
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 5,
    fontFamily:"UberMoveMedium"
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  cardWrapper: {
    borderBottomWidth: 0,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 35,
    height: 35,
    borderRadius: 360,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  cardAvatarText: {
    fontFamily: "UberMoveBold",
    fontSize: 19,
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontFamily: "UberMoveMedium",
    fontSize: 18,
    color: '#000',
    marginBottom:3
  },
  cardPhone: {
    fontFamily: "UberMoveLight",
    fontSize: 15,
    lineHeight: 20,
    color: '#000',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
