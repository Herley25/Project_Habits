import {
    Layout,
} from './Layout';
import {
    IControllerProps,
} from './types';

export const Controller = ({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: IControllerProps) => {
  return (
    <Layout
      {...rest}
      amountOfHabits={amountOfHabits}
      amountCompleted={amountCompleted}
      date={date}
    />
  );
};
