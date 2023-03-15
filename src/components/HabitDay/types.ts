import {
    TouchableOpacityProps,
} from 'react-native';

export interface ILayoutProps extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export interface IControllerProps extends ILayoutProps {}
