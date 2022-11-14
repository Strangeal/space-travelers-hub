/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketFetch } from '../redux/rockets/rocketSlice';

const RocketsPage = () => {

  const dispatch = useDispatch();


  const { rockets, status } = useSelector((state) => state.rockets);
  console.log(rockets)

  useEffect(() => {
    if(status === null) {
      dispatch(rocketFetch())
    }
  }, [status, dispatch])
  
  
  let content;
    if(status === 'pending') {
      content = <p>Loading...</p>
    } else if(status === 'rejected') {
      content = <p>An error occured</p>
    } else if(status === 'success') {
      content = <p>Success...</p> 
    }

  return (
    <div>
      {content}
      <div className="rocket__card">
      {rockets.map(({ id, rocket_name, description, flickr_images }) => (
        <div key={id} className="rocket__content">
          <img src={flickr_images[0]} alt="" />
          <div className="rocket__desc">
            <h3>{rocket_name}</h3>
            <p>
              <span>status</span>
              <span>{description}</span>
            </p>
            <button>Reserve Rocket</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default RocketsPage;