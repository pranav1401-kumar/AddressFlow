import { Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

export const requestLocationPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });

  try {
    const result = await check(permission);
    
    if (result === RESULTS.DENIED) {
      const permissionResult = await request(permission);
      return permissionResult === RESULTS.GRANTED;
    }
    
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error checking permission:', error);
    return false;
  }
};