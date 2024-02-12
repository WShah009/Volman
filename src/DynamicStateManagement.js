import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import C_TextInput from '../src/Component/input/input';
const {width} = Dimensions.get('window');

const DynamicInputStates = ({navigation}) => {
  const [roles, setRoles] = useState([{value: '', error: false}]);

  const addInput = () => {
    setRoles(prevRoles => [...prevRoles, {value: '', error: false}]);
  };

  const validateRoles = () => {
    let isValid = true;
    const updatedRoles = roles.map(role => {
      if (role.value.trim() === '') {
        isValid = false;
        return {...role, error: true};
      } else {
        return {...role, error: false};
      }
    });
    setRoles(updatedRoles);
    return isValid;
  };

  const handleDelete = indexToDelete => {
    const updatedRoles = roles.filter((role, index) => index !== indexToDelete);
    setRoles(updatedRoles);
  };

  const handleSubmit = () => {
    if (validateRoles()) {
      console.log(roles.map(role => role.value)); // Logging the roles array
    } else {
      console.log('Validation failed. Please fill all role fields.');
    }
  };

  return (
    <View style={{width: width, flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentStyle}>
            {roles.map((role, index) => (
              <View
                key={index}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <C_TextInput
                  onChangeText={value => {
                    const updatedRoles = [...roles];
                    updatedRoles[index].value = value;
                    setRoles(updatedRoles);
                  }}
                  value={role.value}
                  style={styles.inputStyl}
                  placeholder="Enter Role"
                  placeholderTextColor="#444444"
                />
                {index !== 0 && ( // Add delete button for all roles except the first one
                  <TouchableOpacity
                    onPress={() => handleDelete(index)}
                    style={styles.deleteIcon}>
                    <deleteIcon name="delete" size={24} color="black" />
                  </TouchableOpacity>
                )}
                {role.error && <Text style={styles.errorText}>Enter Role</Text>}
              </View>
            ))}
            <TouchableOpacity onPress={addInput} style={styles.addButton}>
              <Text
                style={{color: 'black', fontWeight: 'bold', textAlign: 'left'}}>
                + Add a new Role
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
              <Text style={styles.loginText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentStyle: {
    // Your custom styles for the content container
  },
  inputStyl: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%', // Adjust the width to give space for the delete icon
    height: 45,
    marginLeft: 10, // Adjust the margin to make space between the input and delete icon
    fontSize: 20,
  },
  deleteIcon: {
    marginLeft: -25, // Adjust the margin to overlap the delete icon with the input field
  },
  addButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  loginBtn: {
    marginTop: 17,
    width: '50%',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignSelf: 'center',
    bottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default DynamicInputStates;
