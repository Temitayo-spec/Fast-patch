import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Categories, FeaturedRow, HeaderLeft, Search } from '../components';
import { UserIcon } from 'react-native-heroicons/outline';

export default function HomePage() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="pb-16">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerShadowVisible: false,
            headerShown: true,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => (
              <UserIcon size={20} color="#00ccbb" className="mr-2" />
            ),
            headerTitle: '',
          }}
        />

        <Search />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <FeaturedRow
            id="1"
            title="Featured"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          />
          <FeaturedRow
            id="2"
            title="Tasty Discounts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          />
          <FeaturedRow
            id="3"
            title="Offers near you!"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, augue nisl ultricies nisl, vitae lacinia velit nisl eu nisl. Sed vitae nisl eu nisl."
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
