import React from 'react';
import { createContext, useContext } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './SwitchTheme.styled';
import { useTheme } from '@mui/material/styles';

const SwitcTheme = () => {
  const theme = useTheme();
  const ColorModeContext = createContext();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
    />
  );
};

export default SwitcTheme;
