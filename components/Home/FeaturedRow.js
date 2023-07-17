import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCards from './RestaurantCards';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00ccbb" className="mr-2" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="py-4"
      >
        <RestaurantCards
          id="1"
          imgUrl="https://picsum.photos/200/300"
          title="Testing"
          rating="4.5"
          genre="Chinese"
          address="123 Testing Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          dishes={[]}
          long="123"
          lat="123"
        />
        <RestaurantCards
          id="1"
          imgUrl="https://picsum.photos/200/300"
          title="Testing"
          rating="4.5"
          genre="Chinese"
          address="123 Testing Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          dishes={[]}
          long="123"
          lat="123"
        />
        <RestaurantCards
          id="1"
          imgUrl="https://picsum.photos/200/300"
          title="Testing"
          rating="4.5"
          genre="Chinese"
          address="123 Testing Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          dishes={[]}
          long="123"
          lat="123"
        />
        <RestaurantCards
          id="1"
          imgUrl="https://picsum.photos/200/300"
          title="Testing"
          rating="4.5"
          genre="Chinese"
          address="123 Testing Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          dishes={[]}
          long="123"
          lat="123"
        />
        <RestaurantCards
          id="1"
          imgUrl="https://picsum.photos/200/300"
          title="Testing"
          rating="4.5"
          genre="Chinese"
          address="123 Testing Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          dishes={[]}
          long="123"
          lat="123"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
