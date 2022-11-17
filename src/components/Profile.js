import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  const myRocketList = rockets.filter((rocks) => rocks.reserved);
  return (
    <div className="profile-page-container">
      <section className="joined-missions">
        <h2>My Missions</h2>
        {myMissions.length === 0 ? (
          <div className="no-missions-joined">
            <p>No Missions Joined</p>

            <Link className="join-missions-link" to="/missionsPage">Join Missions</Link>

          </div>
        ) : (
          <ul className="missions-list">
            {myMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="reserved-rockets">
        <h2>My Rockets</h2>
        {myRocketList.length === 0 ? (
          <div className="no__reservations">
            <p>No Reservations Made</p>
            <Link className="reserve-rockets-link" to="/">Make Reservations</Link>
          </div>
        ) : (
          <ul className="rockets-list">
            {myRocketList.map(({ id, rocketName }) => (
              <li key={id}>{rocketName}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Profile;
