import color from '../Assets/colors/colors';
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 10},
  codeFieldRoot: {
    marginTop: 10,
  },
  cell: {
    width: normalize(60),
    height: normalize(60),
    lineHeight: 55,
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    backgroundColor: 'white',
    color: color.btnColor,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;

const CodeVerification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={props.value}
        onChangeText={props.onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default CodeVerification;
