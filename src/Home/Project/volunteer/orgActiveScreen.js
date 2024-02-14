import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import OrganizationItem from '../../../Component/customActiveCard';
const {width} = Dimensions.get('window');
import CustomActiveCard from '../../../Component/customActiveCard';

const OrgActiveScreen = () => {
  const data1 = [
    // Your data here, you may replace these dummy values with actual data
    {
      id: '1',
      name: 'Organization 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    },
    {id: '2', name: 'Organization 2', description: 'Description 2'},
    {id: '3', name: 'Organization 3', description: 'Description 3'},
    {id: '4', name: 'Organization 4', description: 'Description 4'},
    {id: '5', name: 'Organization 5', description: 'Description 5'},
    {id: '6', name: 'Organization 6', description: 'Description 6'},
    {id: '7', name: 'Organization 7', description: 'Description 7'},
    {id: '8', name: 'Organization 8', description: 'Description 8'},
    // Add more data as needed
  ];

  const renderItem = ({item}) => (
    <CustomActiveCard name={item.name} description={item.description} />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 16,
          marginTop: 8,
          marginBottom: 8,
        }} // Add padding horizontally
      />
    </View>
  );
};

export default OrgActiveScreen;
