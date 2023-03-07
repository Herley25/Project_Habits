import {
    Layout,
} from './Layout';
import {
    IController,
} from './types';

export const Controller = ({ title, checked = false, ...rest }: IController) => {
  return <Layout title={title} checked={checked} {...rest} />;
};
