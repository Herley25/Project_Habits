import {
    TouchableOpacityProps,
} from 'react-native';

export interface ILayout extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export interface IController extends ILayout {}
