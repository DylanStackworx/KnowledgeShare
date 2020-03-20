import React from 'react';
import './App.css';
import {PDF} from './modules/react-pdf/pdf';
import {ExcelFile} from './modules/react-pdf/excel';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Download them files
      </header>
      <div className="body">
        <PDF />
        <ExcelFile />
      </div>
    </div>
  );
}

export default App;
