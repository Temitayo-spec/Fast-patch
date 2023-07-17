import { View, Text, TextInput } from 'react-native';
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 px-4 bg-white w-full">
      <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput
          placeholder="Restaurant and Cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color="#00ccbb" />
    </View>
  );
};

export default Search;
