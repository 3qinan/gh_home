// @ts-ignore;
import React from 'react';

import { LanguageProvider } from '@/components/LanguageContext';
import Home from '@/pages/home';
function App() {
  return <LanguageProvider>
      <div className="App">
        <Home />
      </div>
    </LanguageProvider>;
}
export default App;