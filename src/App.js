/* eslint-disable */
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import RocketsPage from './components/RocketsPage';
import MissionsPage from './components/MissionsPage';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missionsPage" element={<MissionsPage />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="not-found" />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
