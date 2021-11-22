import { ThemeProvider } from '@mui/material';
import Calculator from './components/Calculator';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
