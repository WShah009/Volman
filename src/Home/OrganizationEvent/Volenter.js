import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ActBox1 from '../../Component/ActBox1';
import VolCard1 from '../../Component/Volenter/VolCard1';
import {ScrollView} from 'react-native-gesture-handler';
import color from '../../Assets/colors/colors';
import VolCard2 from '../../Component/Volenter/VolCard2';
import Header from '../../Component/Header';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
const Volenter = ({route}) => {
  const {eventId, startTime, endTime, orgTitle, eventDate} = route.params;
  const [year, month, day] = eventDate.split('-');
  const [role, setRole] = useState('');
  const [selected, setSelected] = React.useState([]);

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  console.log(orgTitle);
  return (
    <>
      <Header Text={'Volunteer'} />
      <ScrollView style={styles.container}>
        <View style={styles.inputCont}>
          <Text style={styles.textStyle}>Tell us how you want to serve:</Text>
          {/* <TextInput
            style={styles.TextInput}
            placeholder="Roles"
            onChangeText={t => {
              setRole(t);
            }}
            placeholderTextColor={color.default}
          /> */}

          <MultipleSelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => console.log(selected)}
            label="Categories"
          />
        </View>
        <View style={styles.cardCont}>
          <VolCard1
            start_time={startTime}
            end_time={endTime}
            title={orgTitle}
            day={day}
            month={month}
            year={year}
            eventid={eventId}
            role={role}
          />
        </View>
        {/* <View style={styles.cardCont}>
        <VolCard2 />
      </View> */}
      </ScrollView>
    </>
  );
};

export default Volenter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flexDirection: 'column',
  },
  inputCont: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  TextInput: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: color.btnColor,
    borderWidth: 2,
    paddingHorizontal: 10,
  },

  textStyle: {
    color: color.btnColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: '10%',
  },
  cardCont: {
    marginVertical: 10,
  },
});
