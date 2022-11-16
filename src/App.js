import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './components/RocketsPage';
import MissionsPage from './components/MissionsPage';
import Profile from './components/Profile';
import {
  fetchMissionsData,
} from './redux/missions/missions';
import NotFound from './components/NotFound';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missionsPage" element={<MissionsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="not-found" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
