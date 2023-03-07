import dayjs from 'dayjs';
import {
    ScrollView,
    Text, View,
} from 'react-native';

import {
    useRoute,
} from '@react-navigation/native';

import {
    BackButton,
} from '../../components/BackButton';
import {
    Checkbox,
} from '../../components/Checkbox';
import {
    Progress,
} from '../../components/Progress';
import {
    ILayout,
} from './types';

export const Layout = () => {
  const route = useRoute();
  const { date } = route.params as ILayout;
  // Formatação dia da semana
  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">{dayOfWeek}</Text>

        <Text className="text-white font-extrabold text-3xl">{dayAndMonth}</Text>

        <Progress progress={30} />

        <View className="mt-6">
          <Checkbox title="Beber 2L de água" checked={false} />
          <Checkbox title="Caminhar" checked={true} />
        </View>
      </ScrollView>
    </View>
  );
};
