import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  return (
    <section className="joined-missions">
      <h2>My Missions</h2>
      <span>{myMissions.length ? '' : 'No missions joined'}</span>
      <ul>
        {myMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
