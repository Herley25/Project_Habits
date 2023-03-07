import {
    Layout,
} from './Layout';
import {
    IController,
} from './types';

export const Controller = ({ progress = 0 }: IController) => {
  return <Layout progress={progress} />;
};
