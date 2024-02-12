import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'native-base';
import ActBox2 from '../Component/ActBox2';
import color from '../Assets/colors/colors';
import {APIS} from '../Apiurls/Apis';
const Past = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const getOrganizations = () => {
    var formdata = new FormData();
    formdata.append('user_id', global.userid);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(APIS.VolunteerPastEvent, requestOptions)
      .then(response => response.json())
      .then(({member__join__orgs, error}) => {
        if (member__join__orgs) {
          setData(member__join__orgs);
        }
        if (error) {
          setData('NO EVENT FOUND');
        }
        console.log(member__join__orgs);
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
  );
};

export default Past;
const styles = StyleSheet.create({
  cardCont: {
    marginVertical: 10,
    backgroundColor: color.bodyColor,
  },
  container: {
    paddingHorizontal: 8,
  },
});
