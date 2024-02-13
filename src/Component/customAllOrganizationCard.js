import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import CustomJoinedModal from './customJoinedModal';
import {useNavigation} from '@react-navigation/native';
const CustomAllOrganizationCard = ({name, description, width}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'android' && styles.androidShadow,
        {width: width},
      ]}>
      <View
        style={{
          height: '100%',
          width: '40%',
          marginTop: 2,
          marginBottom: 2,
          marginLeft: 4,
        }}>
        <Image
          source={require('../Assets/farm.jpg')}
          style={{
            height: '97%',
            width: '100%',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
      </View>
      <View style={{height: '100%', width: '56%', marginLeft: 3}}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require('../Assets/joinorg.png')}
            style={{marginLeft: 'auto', marginTop: 3}}
          />
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{name}</Text>
        <Text style={{color: 'grey', fontSize: 11}}>{description}</Text>
      </View>
      <CustomJoinedModal closeModal={closeModal} visible={modalVisible} />
    </View>
  );
};

export default CustomAllOrganizationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '75%',
    height: 125,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 2, // Adjust margin as needed
    marginLeft: 10, // Adjust margin as needed
  },
  androidShadow: {
    elevation: 5, // Android shadow elevation
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
