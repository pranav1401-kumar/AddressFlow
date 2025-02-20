import AsyncStorage from '@react-native-async-storage/async-storage';

const ADDRESSES_STORAGE_KEY = '@addresses';

export const saveAddressesToStorage = async (addresses) => {
  try {
    await AsyncStorage.setItem(
      ADDRESSES_STORAGE_KEY,
      JSON.stringify(addresses)
    );
  } catch (error) {
    console.error('Error saving addresses:', error);
  }
};

export const loadAddressesFromStorage = async () => {
  try {
    const addresses = await AsyncStorage.getItem(ADDRESSES_STORAGE_KEY);
    return addresses ? JSON.parse(addresses) : [];
  } catch (error) {
    console.error('Error loading addresses:', error);
    return [];
  }
};