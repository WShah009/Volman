import {StyleSheet, ScrollView, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Box1 from '../../Component/Box1';
import BoxHor from '../../Component/BoxHor';
import CardDesign from '../../Component/Card2';
import Card3 from '../../Component/Card3';
import Card4 from '../../Component/Card4';
import Card5 from '../../Component/Card5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../Assets/colors/colors';
import CardDesignJoin from '../../Component/CardDesignJoin';
import {APIS} from '../../Apiurls/Apis';

import {useIsFocused} from '@react-navigation/native';
const JoinedOrganizations = () => {
  const [data, setData] = useState([]);
  const isfocused = useIsFocused();
  const getOrganizations = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(`${APIS.GetJoinMember}${global.userid}`, requestOptions)
      .then(response => response.json())
      .then(({member__join__orgs, response}) => {
        //console.log(member__join__orgs, 'hsjdahkjsdhkjhsdkjds');
        if (member__join__orgs) {
          setData(member__join__orgs);
        }
        if (response) {
          setData('No Orgnaization Joined Yet');
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    getOrganizations();
  }, [isfocused]);

  const Item = ({item}) => (
    <>
      <View style={styles.cardCont}>
        <CardDesignJoin
          title={item?.Title}
          Image={item?.Image}
          description={item?.short_description}
        />
      </View>
    </>
  );
  return (
    <View style={styles.container}>
      {data === 'No Orgnaization Joined Yet' ? (
        <View style={{alignSelf: 'center', marginTop: '10%'}}>
          <Text style={{color: 'black', fontSize: 20}}>
            No Orgnazation Found
          </Text>
        </View>
      ) : (
    
          <View
          style={{height:'40%'}}
          >
          {data.map((item, index) => {
            return <Item item={item} key={index.toString()} 
           
            />;
          })}
          </View>
        
          
      
  
      )}
    </View>
  );
};

export default JoinedOrganizations;

const styles = StyleSheet.create({
  cardCont: {
    marginBottom: 2,
    paddingHorizontal: 8,
    flexDirection: 'column',
    marginTop: 10,
    height:'40%'
  },
  container: {
    paddingHorizontal: 8,
    flexDirection: 'column',
    marginTop: 15,
    flex: 1,
    

  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '99%',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 12,
    elevation: 1,
    borderTopEndRadius: 10,
  },

  contentIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: -10,
  },
  imgStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
  },
  contentStyle: {
    width: '100%',
    flexWrap: 'wrap',
    fontSize: 13,
    paddingBottom: 15,
    lineHeight: 17,
  },
  contentImg: {
    width: '35%',
  },
  contentContainer: {
    width: '64%',
    marginLeft: '3%',
  },
  textheading: {
    color: color.btnColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.btnColor,
  },
  modalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  modalText: {
    color: color.btnColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  modalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalView: {
    borderRadius: 12,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: color.white,
  },
  iconStyle: {
    fontSize: 55,
    color: color.btnColor,
    marginTop: -15,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginBtn: {
    backgroundColor: color.purple,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '40%',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
});
