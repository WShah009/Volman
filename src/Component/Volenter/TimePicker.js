import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, Text, Button} from 'react-native';

const TimePicker = () => {
  const timeOptions = [
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');

  const handleStartTimeChange = value => {
    setStartTime(value);
    if (value && endTime && value >= endTime) {
      setError('Start time must be less than end time');
    } else {
      setError('');
    }
  };

  const handleEndTimeChange = value => {
    setEndTime(value);
    if (value && startTime && startTime >= value) {
      setError('End time must be greater than start time');
    } else {
      setError('');
    }
  };

  const handleFormSubmit = () => {
    if (startTime && endTime && startTime >= endTime) {
      setError('End time must be greater than start time');
    } else {
      setError('');
      // Perform further actions with valid start and end times
    }
  };

  return (
    <>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <SelectDropdown
          data={timeOptions}
          onSelect={selectedItem => handleStartTimeChange(selectedItem)}
        />

        <SelectDropdown
          data={timeOptions}
          onSelect={selectedItem => handleEndTimeChange(selectedItem)}
        />

        {error ? <Text>{error}</Text> : null}
      </View>
      <Button
        title="Submit"
        onPress={handleFormSubmit}
        disabled={error !== ''}
      />
    </>
  );
};

export default TimePicker;
