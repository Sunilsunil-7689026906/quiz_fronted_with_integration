import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const kkk = () => {
  const [inputValue, setInputValue] = useState('12.5');
  const [result, setResult] = useState(null);

  const calculateSingleDigit = () => {
    const digitsSum = inputValue.split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    setResult(digitsSum);
  };

  return (
    <View>
      <Text>Enter a value:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button title="Calculate" onPress={calculateSingleDigit} />
      {result !== null && (
        <Text>
          Result: {result.toFixed(1)} {/* Display result with one decimal place */}
        </Text>
      )}
    </View>
  );
};

export default kkk;
