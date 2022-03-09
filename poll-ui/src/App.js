import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { CreatePollPage } from './poll-ui-page/CreatePollPage';
import { HomePage } from './poll-ui-page/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/create" element={<CreatePollPage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
