import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { requestLocationPermission } from '../utils/permissions';
import { GOOGLE_MAPS_API_KEY } from '../utils/constants';

const AddAddressScreen = ({ navigation }) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    const hasPermission = await requestLocationPermission();
    setHasLocationPermission(hasPermission);
  };

  const handlePlaceSelect = (data, details = null) => {
    if (!details?.geometry?.location) {
      Alert.alert(
        'Error',
        'Could not get location details. Please try another address.',
        [{ text: 'OK' }]
      );
      return;
    }

    navigation.navigate('ConfirmLocation', {
      location: details.geometry.location,
      address: data.description,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.enableLocationButton}
        onPress={checkLocationPermission}>
        <Text style={styles.buttonText}>
          Enable location permission
        </Text>
      </TouchableOpacity>

      <GooglePlacesAutocomplete
        placeholder="Search area, street, name..."
        onPress={handlePlaceSelect}
        fetchDetails={true} // Make sure this is set to true to get geometry data
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
          components: 'country:in',
        }}
        styles={{
          container: styles.searchContainer,
          textInput: styles.searchInput,
        }}
      />

      <TouchableOpacity
        style={styles.manualButton}
        onPress={() => navigation.navigate('AddressDetails')}>
        <Text style={styles.manualButtonText}>Add address manually</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  enableLocationButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttonText: {
    color: '#000',
  },
  searchContainer: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  manualButton: {
    padding: 16,
    alignItems: 'center',
  },
  manualButtonText: {
    color: '#ff6b00',
  },
});

export default AddAddressScreen;