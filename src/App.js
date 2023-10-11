import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
