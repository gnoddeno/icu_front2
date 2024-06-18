import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcomepage from './ICU/Welcome/src/App';
import Loginpage from './ICU/Login/src/App';
import Signuppage from './ICU/signUp/src/App';
import CCTVpage from './ICU/CCTV/src/App';
import Recordpage from './ICU/Record/src/App';
import Editpage from './ICU/Edit/src/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/welcome" element={<Welcomepage />} />
        <Route path="/setting" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/cctv" element={<CCTVpage />} />
        <Route path="/record" element={<Recordpage />} />
        <Route path="/edit" element={<Editpage />} />
      </Routes>
    </Router>
  );
}

export default App;
