import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './components/RocketsPage';
import MissionsPage from './components/MissionsPage';
import Profile from './components/Profile';

const App = () => (
  <div className="App">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missionsPage" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
