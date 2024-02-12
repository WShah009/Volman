import {
  StyleSheet,
  TouchableOpacity,
  SquareView,
  SectionList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Platform,
  ToastAndroid,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import color from '../../Assets/colors/colors';

const {width} = Dimensions.get('window');
import CustomAllOrganizationCard from '../../Component/customAllOrganizationCard';
import CustomPopularOrganizationCard from '../../Component/customPopularProjectsCard';
const AllOrganizations = () => {
  const data1 = [
    // Your data here, you may replace these dummy values with actual data
    {
      id: '1',
      name: 'Organization 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    },
    {id: '2', name: 'Organization 2', description: 'Description 2'},
    {id: '3', name: 'Organization 3', description: 'Description 3'},
    // Add more data as needed
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Organization Near You</Text>
        <FlatList
          data={data1}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CustomAllOrganizationCard
              name={item.name}
              description={item.description}
              width={width * 0.75} // Adjust width as needed
            />
          )}
          horizontal
          contentContainerStyle={{paddingHorizontal: 8}}
          ItemSeparatorComponent={() => <View style={{width: 8}} />}
          snapToInterval={width * 0.75 + 8} // Adjust spacing between items
          decelerationRate="fast"
        />
        <Text style={styles.titleStyle}>Popular Projects</Text>
        <FlatList
          data={data1}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CustomAllOrganizationCard
              name={item.name}
              description={item.description}
              width={width * 0.75} // Adjust width as needed
            />
          )}
          horizontal
          contentContainerStyle={{paddingHorizontal: 8}}
          ItemSeparatorComponent={() => <View style={{width: 8}} />}
          snapToInterval={width * 0.75 + 8} // Adjust spacing between items
          decelerationRate="fast"
        />
        <Text style={styles.titleStyle}>Discover Organizations</Text>
        <FlatList
          data={data1}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CustomPopularOrganizationCard
              name={item.name}
              description={item.description}
              width={width * 0.75} // Adjust width as needed
            />
          )}
          horizontal
          contentContainerStyle={{paddingHorizontal: 8}}
          ItemSeparatorComponent={() => <View style={{width: 8}} />}
          snapToInterval={width * 0.75 + 8} // Adjust spacing between items
          decelerationRate="fast"
        />
      </View>
    </ScrollView>
  );
};

export default AllOrganizations;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    // flexDirection: 'column',
    flex: 1,
    // marginBottom: 340,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.black,
    marginVertical: 7,
    alignSelf: 'flex-start',
  },
});
