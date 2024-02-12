import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ActBox2 from '../../../Component/ActBox2';
import color from '../../../Assets/colors/colors';
import {ScrollView} from 'native-base';
import {APIS} from '../../../Apiurls/Apis';
import {useIsFocused} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const OrgPast = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const isfocused = useIsFocused();
  const getPastEvent = () => {
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.OrgPastEvent, requestOptions)
      .then(response => response.json())
      .then(({organizations, response}) => {
        console.log(organizations);
        if (organizations) {
          setData(organizations);
        }
        if (response) {
          setData('NO PAST EVENT FOUND');
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    getPastEvent();
  }, [isfocused]);
  const Item = ({item}) => (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.cardCont}>
          <ActBox2
            title={item?.event_title}
            image={item?.Image}
            event_date={item.event_start_date}
            event_end_date={item.event_end_date}
            adress={item.address}
          />
        </View>
       
      </ScrollView>
    
     
   
    </View>
  );
  return (
   

   
    <View>
      {data === 'NO PAST EVENT FOUND' ? (
         <View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: '50%',
          }}>
          <Text>NO EVENTS FOUND</Text>
        </View>
     
         </View>
      ) : (
        <View
        style={{height:'94%'}}
        >
          <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrgEventDetails')}>
            <Item item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(d, index) => index.toString()}
      />
        </View>
       
    
       
       
        
      )}
           {/* <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('addevents')}>
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity> */}
         <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('addevents')}>
      <LinearGradient
        colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
        style={styles.gradientBackground}
       >
        <AntDesign name="plus" size={35} color="white" />
      </LinearGradient>
    </TouchableOpacity>
    </View>
  );
};

export default OrgPast;
const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: -25,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 8,
  },
  gradientBackground: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCont: {
    marginVertical: 10,
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
  },
});
