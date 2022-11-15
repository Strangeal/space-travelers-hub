import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketBooking, rocketFetch } from '../redux/rockets/rocketSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();

  const { rockets, status } = useSelector((state) => state.rockets);
  console.log(rockets);

  useEffect(() => {
    if (status === null) {
      dispatch(rocketFetch());
    }
  }, [dispatch]);

  const handleBookings = (id) => {
    console.log(id);
    dispatch(rocketBooking(id));
  };

  return (
    <div>
      <div className="rocket__card">
        {rockets.map(
          ({
            id, rocketImages, rocketName, reserved, rocketDesc,
          }) => (
            <div key={id} className="rocket__content">
              <img src={rocketImages[0]} alt="" />
              <div className="rocket__desc">
                <h3>{rocketName}</h3>

                {!reserved ? (
                  <>
                    <p>{ rocketDesc }</p>
                    <button type="button" id={id} onClick={() => handleBookings(id)}>Reserve Rocket</button>
                  </>
                ) : (
                  <>
                    <p>
                      <span>status</span>
                      { rocketDesc }
                    </p>
                    <button type="button" id={id} onClick={(e) => handleBookings(e)}>Cancel Reservations</button>
                  </>
                )}

              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default RocketsPage;
