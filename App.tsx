/**
  Project done by Engineer Anderson Yepes, Medellín, Colombia
 */

import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigators/AppNavigator';

  const App = () => {
    return (
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    );
  };

export default App;
