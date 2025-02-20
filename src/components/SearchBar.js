import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const SearchBar = ({ value, onChangeText, onClear, placeholder }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color={colors.text.secondary} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.light}
      />
      {value ? (
        <TouchableOpacity onPress={onClear}>
          <Icon name="close" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
  },
});

export default SearchBar;