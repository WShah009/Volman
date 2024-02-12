import { Code } from "native-base";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
const Code2 = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            onChangeFormattedText={(text) => {
              setValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
  );
};

export default Code2;