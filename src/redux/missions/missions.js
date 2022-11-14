// Actions
const SET_MISSIONS = 'travelers-space-hub/missions/SET_MISSIONS';
const MISSIONS_API_LINK = 'https://api.spacexdata.com/v3/missions';

// Reducer
export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case SET_MISSIONS:
      return [...action.payload];

    default:
      return state;
  }
}

// Action Creators
const setMissionsAction = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});

const fetchMissionsData = () => async (dispatch) => {
  await fetch(MISSIONS_API_LINK)
    .then((result) => result.json())
    .then((res) => {
      const missions = res.map((item) => ({
        mission_name: item.mission_name,
        mission_id: item.mission_id,
        description: item.description,
      }));
      dispatch(setMissionsAction(missions));
    });
};

export { fetchMissionsData };
