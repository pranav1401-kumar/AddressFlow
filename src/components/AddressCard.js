import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddressCard = ({
  address,
  isDefault,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>
            {address.addressType.charAt(0).toUpperCase() +
              address.addressType.slice(1)}
          </Text>
          {isDefault && <Text style={styles.defaultBadge}>Default</Text>}
        </View>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.addressText}>{address.fullAddress}</Text>
      <Text style={styles.details}>
        {address.houseNumber}
        {address.buildingName ? `, ${address.buildingName}` : ''}
      </Text>
      {address.landmark && (
        <Text style={styles.landmark}>Landmark: {address.landmark}</Text>
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
        {!isDefault && (
          <TouchableOpacity
            style={[styles.actionButton, styles.defaultButton]}
            onPress={onSetDefault}>
            <Text style={styles.defaultText}>Set as Default</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  defaultBadge: {
    backgroundColor: '#ff6b00',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  editButton: {
    color: '#ff6b00',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  landmark: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  defaultButton: {
    backgroundColor: '#ff6b00',
  },
  deleteText: {
    color: '#ff0000',
  },
  defaultText: {
    color: '#fff',
  },
});

export default AddressCard;