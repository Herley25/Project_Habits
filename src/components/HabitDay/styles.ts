import {
    StyleSheet,
} from 'react-native';

import {
    DAY_SIZE,
} from './Layout';

export const styles = StyleSheet.create({
  container: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    backgroundColor: "rgb(24, 24, 27)",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "rgb(39 39 42)",
  },
});
