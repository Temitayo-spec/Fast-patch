import { View, Text, Image } from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';

const HeaderLeft = () => {
  return (
    <View className="flex-row pb-3 items-center space-x-2">
      <Image
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        className="w-7 h-7 rounded-full bg-gray-300 p-4"
      />

      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl flex items-center">
          Current Location
          <ChevronDownIcon size={20} color="#00ccbb" />
        </Text>
      </View>
    </View>
  );
};

export default HeaderLeft;
