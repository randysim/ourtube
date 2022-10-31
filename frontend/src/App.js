import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from './components/layouts/mainLayout';

import Home from './pages/home';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
