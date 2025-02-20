import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const ConfirmLocationScreen = ({ navigation, route }) => {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(route.params?.location);
  const [address, setAddress] = useState(route.params?.address);

  const handleConfirmLocation = () => {
    navigation.navigate('AddressDetails', {
      location: selectedLocation,
      address: address,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation?.lat || 12.9716,
          longitude: selectedLocation?.lng || 77.5946,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChangeComplete={(region) => {
          setSelectedLocation({
            lat: region.latitude,
            lng: region.longitude,
          });
        }}>
        <Marker
          coordinate={{
            latitude: selectedLocation?.lat || 12.9716,
            longitude: selectedLocation?.lng || 77.5946,
          }}
        />
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.address}>{address}</Text>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmLocation}>
          <Text style={styles.confirmButtonText}>Confirm location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
  },
  address: {
    marginBottom: 16,
  },
  confirmButton: {
    backgroundColor: '#ff6b00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ConfirmLocationScreen;