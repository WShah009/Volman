import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ActBox2 from '../../../Component/ActBox2';
import color from '../../../Assets/colors/colors';
import {ScrollView} from 'native-base';
import {APIS} from '../../../Apiurls/Apis';
import {useIsFocused} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const VolCancel = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const isfocused = useIsFocused();
  //   const getProgressEvents = () => {
  //     var formdata = new FormData();
  //     formdata.append('user_id', global.userid);

  // var requestOptions = {
  //   method: 'POST',
  //   body: formdata,
  // };

  //     fetch(APIS.OrgInprogressEvent, requestOptions)
  //       .then(response => response.json())
  //       .then(({organizations, response}) => {

  //         console.log("In progress:", response);
  //         if (organizations) {
  //           setData(organizations);
  //           console.log('Events');
  //         }
  //         if (response) {
  //           setData('NO PAST EVENT FOUND');
  //           console.log('Events');
  //         }
  //       })
  //       .catch(error => console.log('error', error));
  //   };
  //   useEffect(() => {
  //     getProgressEvents();
  //   }, [isfocused]);
  const Item = ({item}) => (
    //console.log(item,'item'),
    <>
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
    </>
  );
  return (
    <View>
      {data === 'NO EVENT FOUND' ? (
        <View
          style={{
            alignSelf: 'center',
            marginTop: '50%',
          }}>
          <Text>NO EVENTS FOUND</Text>
        </View>
      ) : (
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
      )}
       {/* <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('addevents')}>
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity> */}
    </View>
  );
};

export default VolCancel;
const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    backgroundColor:color.tabClr, // Customize the background color
    borderRadius: 30, // Half the width/height to make it circular
    position: 'absolute',

    right: '10%',
    
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Shadow for Android (optional)
    zIndex: 999, // Ensure it's above other components
  },
  cardCont: {
    marginVertical: 10,
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
  },
});

