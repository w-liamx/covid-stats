import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import './App.css';
import AppLayout from './components/AppLayout';
import { GlobalStats } from './components/GlobalStats';
// import { AnalysisStats } from './components/AnalysisStats';
// import { CountriesStats } from './components/CountriesStats';

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <GlobalStats />
          {/* <AnalysisStats /> */}
          {/* <CountriesStats /> */}
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
