import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddressListScreen from '../screens/AddressListScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import ConfirmLocationScreen from '../screens/ConfirmLocationScreen';
import AddressDetailsScreen from '../screens/AddressDetailsScreen';

const Stack = createStackNavigator();

const AddressNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      }}>
      <Stack.Screen name="AddressList" component={AddressListScreen} options={{ title: 'Addresses' }} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} options={{ title: 'Add Address' }} />
      <Stack.Screen name="ConfirmLocation" component={ConfirmLocationScreen} options={{ title: 'Confirm Location' }} />
      <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} options={{ title: 'Address Details' }} />
    </Stack.Navigator>
  );
};

export default AddressNavigator;