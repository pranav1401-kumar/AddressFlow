import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AddressForm from '../components/AddressForm';
import { useDispatch } from 'react-redux';
import { addAddress } from '../store/addressSlice';

const AddressDetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSaveAddress = async (addressData) => {
    setLoading(true);
    try {
      await dispatch(addAddress(addressData));
      navigation.navigate('AddressList');
    } catch (error) {
      console.error('Error saving address:', error);
    }
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <AddressForm
        initialLocation={route.params?.location}
        initialAddress={route.params?.address}
        onSave={handleSaveAddress}
        loading={loading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AddressDetailsScreen;