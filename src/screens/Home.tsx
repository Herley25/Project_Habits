import {
    ScrollView,
    Text, View,
} from 'react-native';

import {
    HabitDay,
} from '../components/HabitDay';
import {
    DAY_SIZE,
} from '../components/HabitDay/Layout';
import {
    Header,
} from '../components/Header';
import {
    generateDatesFromYearBeginning,
} from '../utils/generate-dates-from-year-beginning';

// contante para renderizar os hábitos
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
// Pegando a data inicial do ano e a última
const dateFromYearStart = generateDatesFromYearBeginning();
// Detalhes da data
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearStart.length;

export const Home = () => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {dateFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
