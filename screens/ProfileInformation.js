import React from 'react';
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

const items = [
  {
    icon: FeatherIcon,
    iconName: 'phone-call',
    label: 'Phone call',
    company: 'Call',
    start: new Date(2017, 8, 1),
    end: new Date(2020, 12, 1),
  },
  {
    icon: Ionicons,
    iconName: 'logo-whatsapp',
    label: 'WhatsApp Chat',
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

export default function ProfileInformation(props) {


  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>

<Text style={styles.title}>{props?.route?.params?.name}</Text>
      <ScrollView contentContainerStyle={styles.container}>

        {items.map(({ icon, iconName, label, company, start, end }, index) => {
          const Icon = icon;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                <View style={styles.cardIcon}>
                  <Icon color="#000" name={iconName} size={30} />
                </View>

                <View style={styles.cardDelimiter}>
                  {index !== items.length - 1 && (
                    <View style={styles.cardDelimiterLine} />
                  )}

                  <View
                    style={[
                      styles.cardDelimiterInset,
                      !end && { backgroundColor: '#ffcb05' },
                    ]}
                  />
                </View>

                <View style={styles.cardBody}>
                  <View style={styles.cardBodyContent}>
                    <Text style={styles.cardTitle}>{label}</Text>


                    <Text style={styles.cardDates}>{`${start.toLocaleString(
                      'en-US',
                      {
                        month: 'short',
                        year: 'numeric',
                      },
                    )} - ${
                      end
                        ? end.toLocaleString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Present'
                    }`}</Text>
                  </View>

                  <View style={styles.cardBodyAction}>
                    <FeatherIcon color="#181818" name="arrow-right" size={16} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
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
    width: 15,
    height: 12,
    borderWidth: 3,
    borderRadius: 9999,
    backgroundColor: '#fff',
    borderColor: 'red',
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
    fontSize: 17,
    fontWeight: '600',
    color: '#2a2a2a',
    marginBottom: 3,
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

