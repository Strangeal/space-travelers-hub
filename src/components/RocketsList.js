import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketBooking } from '../redux/rockets/rocketSlice';

const RocketsList = ({ rockets }) => {
  console.log(rockets);
  const dispatch = useDispatch();
  const handleBookings = () => {
    dispatch(rocketBooking());
  };
  return (
    <div>
      <div className="rocket__card">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket__content">
            <img src={rocket.flickr_images[0]} alt="" />
            <div className="rocket__desc">
              <h3>{rocket.rocket_name}</h3>
              <p>
                <span>status</span>
                <span>{rocket.description}</span>
              </p>
              <button type="submit" onClick={() => handleBookings(rocket)}>Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketsList;
