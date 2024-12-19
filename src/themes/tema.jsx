import { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import PropTypes from 'prop-types'

const ColorModeContext = createContext({ toggleColorMode: () => {} });


export const Tema = ({ children }) => {
  // Obtener el tema guardado de localStorage al iniciar
  const storedMode = localStorage.getItem('themeMode');
  const [mode, setMode] = useState(storedMode || 'light'); // Usar 'light' como valor por defecto

  useEffect(() => {
    // Guardar el tema en localStorage cada vez que cambia
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  console.log("Tema se renderiza con modo:", mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
Tema.propTypes = {
  children: PropTypes.node.isRequired, 
};
// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);