import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export const ThemeSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {
        color: '#fabd2f',
      },
      '&$checked + $track': {
        backgroundColor: '#fabd2f',
      },
    },
    checked: {},
    track: {},
  })(Switch);


