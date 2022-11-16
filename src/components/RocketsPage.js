import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketBooking, rocketFetch } from '../redux/rockets/rocketSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();

  const { rockets, status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === null) {
      dispatch(rocketFetch());
    }
  }, [status, dispatch]);

  const handleBookings = (id) => {
    dispatch(rocketBooking(id));
  };

  return (
    <div>
      <div className="rocket__card">
        {status === 'pending' ? (
          <p>Loading...</p>
        ) : (
          <>
            {rockets.map(
              ({
                id, rocketImages, rocketName, reserved, rocketDesc,
              }) => (
                <div key={id} className="rocket__content">
                  <img src={rocketImages[0]} alt={rocketName} />
                  <div className="rocket__desc">
                    <h3>{rocketName}</h3>
                    <p>
                      {reserved ? <span className="reserved__badge">Reserved </span> : ''}
                      {rocketDesc}
                    </p>
                    <button
                      id={id}
                      className={reserved ? 'cancel__reservations' : 'reserve__rockets'}
                      type="submit"
                      onClick={() => { handleBookings(id); }}
                    >
                      {reserved ? 'Cancel Reservations' : 'Reserve Rockets'}
                    </button>
                  </div>
                </div>
              ),
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default RocketsPage;
