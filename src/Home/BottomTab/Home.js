import {View, Text} from 'native-base';
import React, {useState} from 'react';
import HomeStacktopview from '../../Component/HomeStacktopview';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon3 from 'react-native-vector-icons/Entypo';
import color from '../../Assets/colors/colors';
import DashboardCardtwo from '../../Component/Dashboardcardtwo';
function VolunteerHome() {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <View style={{width: width, flex: 1}}>
      {search === false ? (
        <HomeStacktopview
          onPress={() => {
            navigation.openDrawer();
          }}
          onPressnotification={() => {
          navigation.navigate('notification');
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
      )}
    
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            height: '70%',
            width: '90%',
            backgroundColor: 'white',
            elevation: 3,
            borderRadius: 20,
            alignItems:'center'
          }}>
            <View
            style={{backgroundColor:color.btnColor,height:'18%',width:'100%',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:'center',justifyContent:'center'}}
            >
                 <Text
                 style={{fontStyle:'italic',color:'white',fontWeight:'bold',fontSize:22}}
                 >
                    Events
                 </Text>
            </View>

           <View style={{flexDirection: 'row'}}>
            <DashboardCardtwo
              icon={'calendar-text'}
              count={4}
              Heading={'In Progress'}
            />
            <View style={{width: 10}}></View>
            <DashboardCardtwo
              icon={'calendar-star'}
              count={1}
              Heading={'Planned'}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <DashboardCardtwo
              icon={'calendar-check'}
             count={12}
              Heading={'Completed'}
            />
            <View style={{width: 10}}></View>
            <DashboardCardtwo
              icon={'calendar-remove'}
              count={4}
              Heading={'Canceled'}
            />
          </View>
          </View>
      </View>

      <View style={{alignItems: 'center',marginTop:'-32%'}}>
        <View
          style={{
            height: '50%',
            width: '90%',
            backgroundColor: 'white',
            elevation: 3,
            borderRadius: 20,
            alignItems:'center'
          }}>
            <View
            style={{backgroundColor:color.btnColor,height:'25%',width:'100%',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:'center',justifyContent:'center'}}
            >
                 <Text
                 style={{fontStyle:'italic',color:'white',fontWeight:'bold',fontSize:22}}
                 >
                    Details
                 </Text>
            </View>

           <View style={{flexDirection: 'row'}}>
            <DashboardCardtwo
              icon={'account-group'}
              count={4}
              Heading={'My organizations'}
            />
            <View style={{width: 10}}></View>
            <DashboardCardtwo
              icon={'timelapse'}
              count={1}
              Heading={'Total serving Hours'}
            />
          </View>

        
          </View>
      </View>
    </View>
  );
}

export default VolunteerHome;
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
