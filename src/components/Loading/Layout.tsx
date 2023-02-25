import {
    ActivityIndicator,
    View,
} from 'react-native';

import {
    styles,
} from './styles';

export const Layout = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color="#7C3AED" />
    </View>
  );
};
