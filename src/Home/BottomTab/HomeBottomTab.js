import {
  StyleSheet,
 
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Box1 from '../../Component/Box1';
import TopTab from '../../Navigation/TopTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStacktopview from '../../Component/HomeStacktopview';
import OrgnInfo from '../../Navigation/OrgnInfo';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import TagsInput from '../../Component/input/TagsInput';
import Icon3 from 'react-native-vector-icons/Entypo';
import color from '../../Assets/colors/colors';
import EventHeaderwithsearch from '../../Component/EventHeaderWithSearch';
const HomeBottomTab = props => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <View style={{width: width, flex: 1}}>
      {/* {search === false ? (
        <HomeStacktopview
          onPress={() => {
            navigation.openDrawer();
          }}
          onPressnotification={() => {
            props.navigation.navigate('notification');
          }}
          onPressSearch={() => {
            setSearch(true);
            console.log(search);
          }}
        />
      ) : (
        <View style={styles.Inputboxcontainer}>
          <Icon3
            name={'magnifying-glass'}
            size={25}
            color={color.btnColor}></Icon3>
          <TextInput
            placeholder="Search"
            style={{fontSize: 15, marginHorizontal: 10, flex: 1}}
          />

          <TouchableOpacity
            onPress={() => {
              setSearch(false);
            }}>
            <Icon3 name={'cross'} size={25} color={color.btnColor}></Icon3>
          </TouchableOpacity>
        </View>
      )} */}
       <EventHeaderwithsearch
        onPress={() => {
          navigation.openDrawer();
        }}
        onPressnotification={() => {
          navigation.navigate('notification');
        }}
      />
      <TopTab />
    </View>
  );
};

export default HomeBottomTab;

const styles = StyleSheet.create({
  loginBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginRight: 10,
    marginBottom: 200,
  },
  hometopstack: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1f3f59',
  },
  hometopstacktext1: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  hometopstacktext2: {
    marginLeft: 150,
    marginTop: 5,
    marginBottom: 5,
  },

  hometopstacktext3: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  Inputboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,

    borderColor: color.white,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 10,
    height: 65,
  },
});
