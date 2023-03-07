import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from 'tailwindcss/colors';

import {
    Feather,
} from '@expo/vector-icons';
import {
    useNavigation,
} from '@react-navigation/native';

import Logo from '../../assets/logo.svg';
import {
    styles,
} from './styles';

export const Layout = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />

      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigate("new")}>
        <Feather name="plus" color={colors.violet[500]} size={20} />

        <Text style={styles.text}>Novo</Text>
      </TouchableOpacity>
    </View>
  );
};
