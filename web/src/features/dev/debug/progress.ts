import { debugData } from '../../../utils/debugData';
import { ProgressbarProps } from '../../../typings';

export const debugProgressbar = () => {
  debugData<ProgressbarProps>([
    {
      action: 'progress',
      data: {
        label: 'Making drugs!',
        duration: 15000,
        icon: 'tablets',
        color: '#169ac9',

      },
    },
  ]);
};

export const debugCircleProgressbar = () => {
  debugData([
    {
      action: 'circleProgress',
      data: {
        duration: 8000,
        label: 'Using Armour',
      },
    },
  ]);
};
