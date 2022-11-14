import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissionsData } from '../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  const missionsList = useSelector((state) => state.missions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>empty</th>
          </tr>
        </thead>
        <tbody>
          {
          missionsList.map((item) => (
            <tr key={item.mission_id}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td><span>Not a member</span></td>
              <td><button type="button">Join mission</button></td>
            </tr>
          ))
        }

        </tbody>

      </table>
    </div>
  );
};

export default MissionsPage;
