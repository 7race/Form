import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme/theme';
import { GlobalStyles } from './styles/global';
import { Form } from './components/Form';
import type { FC } from 'react';

export const App: FC = () => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Form />
  </ThemeProvider>
);
