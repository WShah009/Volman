import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {APIS} from '../Apiurls/Apis';
import {ScrollView} from 'native-base';
import ActBox2 from '../Component/ActBox2';
import color from '../Assets/colors/colors';
const {width, height} = Dimensions.get('screen');
const Upcoming = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const getOrganizations = () => {
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.VolunteerUpcomingEvent, requestOptions)
      .then(response => response.json())                                                                                                                                                                                                                    
      .then(({member__join__orgs, error}) => {
        if (member__join__orgs) {
          setData(member__join__orgs);
        }
        if (error) {
          setData('NO EVENT FOUND');
        }
      })

      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    getOrganizations();
  }, []);
  const Item = ({item}) => (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.cardCont}>
          <ActBox2
            title={item?.Title}
            image={item?.image}
            event_date={item.event_date}
            adress={item.address}
            event_end_date={item.event_end_date}
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
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(d, index) => index.toString()}
        />
      )}
    </View>
    // <ScrollView style={styles.container}>
    //   <View style={styles.cardCont}>
    //     <TouchableOpacity
    //       onPress={() => {
    //         navigation.navigate('Event');
    //       }}>
    //       <ActBox2
    //         title={'Hope Farm'}
    //         image={
    //           'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt'
    //         }
    //       />
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.cardCont}>
    //     <ActBox2
    //       title={'Hope Farm'}
    //       image={
    //         'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt'
    //       }
    //     />
    //   </View>
    //   <View style={styles.cardCont}>
    //     <ActBox2
    //       title={'Hope Farm'}
    //       image={
    //         'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt'
    //       }
    //     />
    //   </View>
    //   <View style={styles.cardCont}>
    //     <ActBox2
    //       title={'Hope Farm'}
    //       image={
    //         'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt'
    //       }
    //     />
    //   </View>
    // </ScrollView>
  );
};

export default Upcoming;
const styles = StyleSheet.create({
  cardCont: {
    marginVertical: 10,
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
  },
});
