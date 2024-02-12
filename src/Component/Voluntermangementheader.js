import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  BackHandler
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../Assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import VolunteerManagment from '../Home/DrawerTab/DrawerNavigation/VolunteerManagment';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {RadioButton} from 'react-native-paper';
const VolunteerManagmentHeader = (props, {navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
  };

  const handleAddIconClick = () => {
    // Handle add icon click here
    console.log('Add icon clicked');
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Searching for:', searchText);
  };
  const handleSsearch = () => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };
  const [checked, setChecked] = React.useState('first');
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  const handleBackButton = () => {
    if (searchVisible) {
      toggleSearch();
      return true; // Do not exit the app
    }
    return false; // Let the system handle the back button
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [searchVisible]);





  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log(props);
  return (
    <>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.linearGradientStyle}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="menu" size={30} color={color.white} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Volunteer
        </Text>

        <View style={styles.rightCont}>
        
        {/* {isSearchVisible ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            autoFocus
         
          />
          <TouchableOpacity onPress={handleSearch}>
            <Text
            style={{color:'white',marginLeft:3}}
            >Search</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleSearchIconClick}>
            <MaterialCommunityIcons name="magnify" size={30} color='white'/>
          </TouchableOpacity>
        
        </View>
      )} */}

<View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {searchVisible ? (
        <>
          <TextInput
            style={{ borderColor:'white',
            backgroundColor:'white',
                borderWidth: 1,
                borderRadius: 25,
                marginLeft: 8,
                padding: 8,
                width:'68%' }}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity onPress={handleSsearch}>
            <Text
             style={{color:'white',marginLeft:3}}
            >Search</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={toggleSearch}>
         <MaterialCommunityIcons name="magnify" size={30} color='white'/>
        </TouchableOpacity>
      )}
    </View>
        
        
        
        
        
        
        
        
        
        
        
        
          {/* <TouchableOpacity>
            <Icon
              name="search"
              style={styles.notIcon}
              size={25}
              color={color.white}
            />
          </TouchableOpacity> */}

          <TouchableOpacity>
            <Image
              source={require('../Assets/exel.png')}
              resizeMode="cover"
              style={{width: 30, height: 30, marginLeft: 5}}
            />
            {/* <Mat
              name="file-excel"
              style={styles.notIcon}
              size={25}
              color='green'
            /> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={props.onPressnotification}>
            <Icon
              name="notifications"
              style={styles.notIcon}
              size={25}
              color={color.white}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View
        style={{
          height: 40,
          marginTop: 10,
          flexDirection: 'row',
          marginTop: 10,
          flexDirection: 'row-reverse',

          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
          }}>
          <MaterialCommunityIcons
            name="filter"
            size={30}
            style={{color: color.btnColor, marginLeft: 10}}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: color.btnColor,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Filter
        </Text>
      </View>
      <Modal transparent={true} isVisible={isModalVisible}>
        <View style={{backgroundColor: 'white', height: '60%',borderRadius:20}}>
          <View
            style={{
              marginTop: 10,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: color.purple,
                fontSize: 22,
                fontWeight: 'bold',

              }}>
              Filter By:
            </Text>
          </View>

          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}>
            <View style={{}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#252553'}}>
                City
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color="#252553" // Adjust the color as needed
                style={styles.icon}
              />
              <TextInput style={styles.input} placeholder="Add City" />
            </View>

            <View style={styles.labelContainer}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#252553'}}>
                State
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color="#252553" // Adjust the color as needed
                style={styles.icon}
              />
              <TextInput style={styles.input} placeholder="Add State" />
            </View>
          </View> */}
          <View style={styles.container}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>City</Text>
            </View>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color="#252553"
                style={styles.icon}
              />
              <TextInput style={styles.input} placeholder="Add City" />
            </View>

            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>State</Text>
            </View>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color="#252553"
                style={styles.icon}
              />
              <TextInput style={styles.input} placeholder="Add State" />
            </View>
          </View>

          <View style={{paddingLeft: 20,}}>
            <Text style={styles.labelText}>Status</Text>

            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
              }}>
              <RadioButton.Group
                onValueChange={value => setChecked(value)}
                value={checked}>
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                  
                  <RadioButton.Item label="" value="first" />
                  <Icon
                    name="person"
                    size={30}
                    color="#252553"
                  />
                  <Text
                  style={{fontSize:20,color:'#252553'}}
                  >Active</Text>


                  <RadioButton.Item label="" value="second" />
                  <Icon
                    name="person"
                    size={30}
                    color="red"
                  />
                  <Text
                  style={{fontSize:20,color:'#252553'}}
                  >Inactive</Text>

                </View>
              </RadioButton.Group>
              {/* <Text>Selected Option: {checked}</Text> */}
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    toggleModal(false);
                  }}>
                  <Text style={styles.loginText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default VolunteerManagmentHeader;

const styles = StyleSheet.create({
  linearGradientStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(65),
    elevation: 0,
    paddingHorizontal: 12,
    zIndex: -60,
  },

  rightCont: {
    flexDirection: 'row',
  },
  notIcon: {
    marginLeft: 5,
  },
  buttonContainer: {
    width: 300,

    alignItems: 'center',
    marginTop: 50,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.white,
  },
  loginBtn: {
    paddingHorizontal: 20,
    backgroundColor: color.purple,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '60%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#efeeee',
    borderRadius: 8,
    padding: 8,
    width: '90%',
    marginBottom: 15,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  icon: {
    marginLeft: 8,
  },
  labelContainer: {
    //paddingLeft:20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#252553',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
  
    borderColor:'white',
backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 25,
    marginLeft: 8,
    padding: 8,
    width:'68%'
  },
});
