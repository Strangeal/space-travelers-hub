import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  const myRocketList = rockets.filter((rocks) => rocks.reserved);
  return (
    <>
      <section className="joined-missions">
        <h2>My Missions</h2>
        <span>{myMissions.length ? '' : 'No missions joined'}</span>
        <ul>
          {myMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </section>

      <section className="reserved-rockets">
        <h2>My Rockets</h2>
        {myRocketList.length === 0 ? (
          <div className="no__reservations">
            <p>No Reservations Made</p>
            <div className="make__reservations">
              <Link to="/">

                Make Reservations
              </Link>
            </div>
          </div>
        ) : (
          <ul>
            {myRocketList.map(({ id, rocketName }) => (
              <li key={id}>{rocketName}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Profile;
