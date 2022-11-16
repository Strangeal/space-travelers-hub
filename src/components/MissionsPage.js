import { useSelector, useDispatch } from 'react-redux';
import { joinLeaveMissionAction } from '../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(joinLeaveMissionAction(id));
  };

  const missionsList = useSelector((state) => state.missions);

  return (
    <div>
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((item) => (
            <tr key={item.mission_id}>
              <td className="mission-name">{item.mission_name}</td>
              <td>{item.description}</td>
              <td className="active-td">
                {item.reserved ? (
                  <span className="active-tag">Active member</span>
                ) : (
                  <span className="not-active-tag">NOT A MEMBER</span>
                )}
              </td>
              {item.reserved ? (
                <td className="btn-td">
                  <button
                    className="btn leave-mission-btn"
                    type="button"
                    onClick={() => {
                      handleClick(item.mission_id);
                    }}
                  >
                    Leave mission
                  </button>
                </td>
              ) : (
                <td className="btn-td">
                  <button
                    className="btn join-mission-btn"
                    type="button"
                    onClick={() => {
                      handleClick(item.mission_id);
                    }}
                  >
                    Join mission
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
