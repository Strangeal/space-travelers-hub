import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const myRocketList = rockets.filter((rocks) => rocks.reserved);
  return (
    <div className="profile">
      <h2>My Rockets</h2>
      {myRocketList.length === 0 ? (
        <div className="no__reservations">
          <p>No Reservations Made</p>
          <div className="make__reservations">
            <Link to="/">
              <IoIosArrowRoundBack />
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

    </div>
  );
};

export default Profile;
