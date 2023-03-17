import dayjs from 'dayjs';
import {
    useCallback,
    useState,
} from 'react';
import {
    Alert,
    ScrollView,
    Text, View,
} from 'react-native';

import {
    useFocusEffect,
    useNavigation,
} from '@react-navigation/native';

import {
    HabitDay,
} from '../../components/HabitDay';
import {
    DAY_SIZE,
} from '../../components/HabitDay/Layout';
import {
    Header,
} from '../../components/Header';
import {
    Loading,
} from '../../components/Loading';
import {
    api,
} from '../../lib/axios';
import {
    generateDatesFromYearBeginning,
} from '../../utils/generate-dates-from-year-beginning';

// contante para renderizar os hábitos
const weekDays = [
  { id: 1, day: "D" },
  { id: 2, day: "S" },
  { id: 3, day: "T" },
  { id: 4, day: "Q" },
  { id: 5, day: "Q" },
  { id: 6, day: "S" },
  { id: 7, day: "S" },
];
// Pegando a data inicial do ano e a última
const dateFromYearStart = generateDatesFromYearBeginning();
// Detalhes da data
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearStart.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);

  const { navigate } = useNavigation();

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api.get("/summary");
      console.log(response.data);
      setSummary(response.data);
    } catch (error) {
      Alert.alert("Ops", "Não foi possível garregar o sumário de hábitos");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // quando a tela tiver o foco, irá executar a função novamente
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay) => (
          <Text
            key={weekDay.id}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay.day}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {summary && (
          <View className="flex-row flex-wrap">
            {dateFromYearStart.map((date) => {
              const dayWithHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date, "day");
              });
              return (
                <>
                  <HabitDay
                    key={date.toISOString()}
                    date={date}
                    amountOfHabits={dayWithHabits?.amount}
                    amountCompleted={dayWithHabits?.completed}
                    onPress={() => navigate("habit", { date: date.toISOString() })}
                  />
                </>
              );
            })}

            {amountOfDaysToFill > 0 &&
              Array.from({ length: amountOfDaysToFill }).map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
