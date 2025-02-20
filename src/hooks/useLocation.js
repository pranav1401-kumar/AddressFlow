import { useState, useEffect } from 'react';
import { getCurrentLocation } from '../services/locationService';
import { requestLocationPermission } from '../utils/permissions';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    try {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        const currentLocation = await getCurrentLocation();
        setLocation(currentLocation);
      } else {
        setError('Location permission denied');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { location, loading, error };
};