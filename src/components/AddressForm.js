import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AddressForm = ({ initialAddress, onSave, loading }) => {
  const [formData, setFormData] = useState({
    houseNumber: '',
    buildingName: '',
    landmark: '',
    receiverName: '',
    receiverPhone: '',
    petName: '',
    addressType: 'home', // 'home', 'office', 'other'
  });

  const handleSubmit = () => {
    onSave({
      ...formData,
      fullAddress: initialAddress,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="House No./Flat No."
        value={formData.houseNumber}
        onChangeText={(text) => setFormData({ ...formData, houseNumber: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Building name"
        value={formData.buildingName}
        onChangeText={(text) => setFormData({ ...formData, buildingName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Landmark"
        value={formData.landmark}
        onChangeText={(text) => setFormData({ ...formData, landmark: text })}
      />

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            formData.addressType === 'home' && styles.activeType,
          ]}
          onPress={() => setFormData({ ...formData, addressType: 'home' })}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            formData.addressType === 'office' && styles.activeType,
          ]}
          onPress={() => setFormData({ ...formData, addressType: 'office' })}>
          <Text>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            formData.addressType === 'other' && styles.activeType,
          ]}
          onPress={() => setFormData({ ...formData, addressType: 'other' })}>
          <Text>Other</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Receiver's name"
        value={formData.receiverName}
        onChangeText={(text) => setFormData({ ...formData, receiverName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Receiver's phone number"
        value={formData.receiverPhone}
        onChangeText={(text) => setFormData({ ...formData, receiverPhone: text })}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Pet's name"
        value={formData.petName}
        onChangeText={(text) => setFormData({ ...formData, petName: text })}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSubmit}
        disabled={loading}>
        <Text style={styles.saveButtonText}>
          {loading ? 'Saving...' : 'Save address'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  typeButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
    borderRadius: 8,
  },
  activeType: {
    backgroundColor: '#ff6b00',
    borderColor: '#ff6b00',
  },
  saveButton: {
    backgroundColor: '#ff6b00',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddressForm;