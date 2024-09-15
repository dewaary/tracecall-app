import { Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Colors} from '../../utils/Constants';

interface CustomeInputProps {
  value: string;
  label: string;
  placeholder: string;
  onFocus?: () => void;
  onChangeText: (text: string) => void;
}

const CustomeInput: FC<
  CustomeInputProps & React.ComponentProps<typeof TextInput>
> = ({value, placeholder, label, onFocus, onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);

    if (onFocus) onFocus();
  };

  const handlerBlur = () => {
    setIsFocused(false);
  };

  return (
    <View className="my-2">
      <Text
        className={`text-md font-semibold ${
          isFocused ? 'text-primary' : 'text-gray-400'
        }`}>
        {label}
      </Text>
      <View
        className={`mt-2 border-2 px-2 text-lg rounded-2xl h-14 w-auto ${
          isFocused ? 'border-primary' : 'border-gray-300'
        }`}>
        <TextInput
          value={value}
          onFocus={handleFocus}
          onBlur={handlerBlur}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.lightText}
          placeholder={placeholder}
          {...props}
          className={`text-md text-text h-full bottom-0`}
        />
      </View>
    </View>
  );
};

export default CustomeInput;
