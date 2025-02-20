import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AddressCard from '../components/AddressCard';
import { deleteAddress, setDefaultAddress } from '../store/addressSlice';

const AddressListScreen = ({ navigation }) => {
  const addresses = useSelector((state) => state.addresses.items);
  const defaultAddress = useSelector((state) => state.addresses.defaultAddress);
  const dispatch = useDispatch();

  const handleAddAddress = () => {
    navigation.navigate('AddAddress');
  };

  const handleEditAddress = (address) => {
    navigation.navigate('AddressDetails', { address });
  };

  const handleDeleteAddress = (addressId) => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteAddress(addressId)),
          style: 'destructive',
        },
      ]
    );
  };

  const handleSetDefault = (address) => {
    dispatch(setDefaultAddress(address));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AddressCard
            address={item}
            isDefault={defaultAddress?.id === item.id}
            onEdit={() => handleEditAddress(item)}
            onDelete={() => handleDeleteAddress(item.id)}
            onSetDefault={() => handleSetDefault(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No addresses saved yet</Text>
          </View>
        }
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#ff6b00',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddressListScreen;