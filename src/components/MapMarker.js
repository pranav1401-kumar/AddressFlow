import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const MapMarker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.marker} />
      <View style={styles.shadow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignItems: 'center',
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: '#fff',
  },
  shadow: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    opacity: 0.3,
    marginTop: -4,
  },
});

export default MapMarker;