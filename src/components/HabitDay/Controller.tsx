import {
    Layout,
} from './Layout';
import {
    IControllerProps,
} from './types';

export const Controller = ({ ...rest }: IControllerProps) => {
  return <Layout {...rest} />;
};
