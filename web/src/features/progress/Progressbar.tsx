import React from 'react';
import { Box, createStyles, Text, ThemeIcon, useMantineTheme } from '@mantine/core';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import ScaleFade from '../../transitions/ScaleFade';
import type { ProgressbarProps } from '../../typings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const useStyles = createStyles((theme) => ({
  container: {
    width: 350,
    height: 8.5, // Half the original height
    borderRadius: 4,
    backgroundColor: theme.colors.dark[5],
    overflow: 'hidden',
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
  bar: {
    height: '100%',
  },
  labelWrapper: {
    display: 'flex',
    width: 350,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    fontWeight: 'bold', // Make text bold
    textShadow: '1px 1px 2px black', // Add text shadow
  },
  label: {
    maxWidth: 350,
    padding: 8,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 23,
    color: theme.colors.gray[3],
    textShadow: theme.shadows.sm,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8, // Space between icon and text
    textShadow: theme.shadows.sm,
  },
}));

const Progressbar: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [visible, setVisible] = React.useState(false);
  const [label, setLabel] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [icon, setIcon] = React.useState<IconProp | undefined>(undefined);
  const [color, setColor] = React.useState<string>('#18aaed');

  useNuiEvent('progressCancel', () => setVisible(false));

  useNuiEvent<ProgressbarProps>('progress', (data) => {
    setVisible(true);
    setLabel(data.label);
    setDuration(data.duration);
    setIcon(data.icon);
    setColor(data.color || '#18aaed'); // Default color if not provided
  });

  return (
    <>
      <Box className={classes.wrapper}>
        <ScaleFade visible={visible} onExitComplete={() => fetchNui('progressComplete')}>
          <Box className={classes.labelWrapper}>
            <Text className={classes.label}>
              {icon && (
                <ThemeIcon size="xl" mr="sm" radius="md" style={{ backgroundColor: theme.colors.dark[5] }}>
                  <FontAwesomeIcon icon={icon} style={{ width: '65%', height: '65%', color }} />
                </ThemeIcon>
              )}
              {label}
            </Text>
          </Box>
          <Box className={classes.container}>
            <Box
              className={classes.bar}
              onAnimationEnd={() => setVisible(false)}
              sx={{
                backgroundColor: color,
                animation: 'progress-bar linear',
                animationDuration: `${duration}ms`,
              }}
            />
          </Box>
        </ScaleFade>
      </Box>
    </>
  );
};

export default Progressbar;
