import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsData } from '../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchMissionsData());
  const missionsList = useSelector((state) => state.missions);
  return (
    <div>
      <ul>
        {missionsList.map((item) => (<li key={item.mission_id}>{item}</li>))}
      </ul>
    </div>
  );
};

export default MissionsPage;
