import {FC, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';

interface CustomeSafeAreaViewProps {
  children: ReactNode;
  classStyle?: string;
}

const CustomeSaveAreaView: FC<CustomeSafeAreaViewProps> = ({
  children,
  classStyle,
}) => {
  const stylesClass = `flex-1 bg-white ${classStyle}`;
  return (
    <SafeAreaView className={stylesClass}>
      <View className={stylesClass}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomeSaveAreaView;
