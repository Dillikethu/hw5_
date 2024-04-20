// App.jsx
import React, { useState } from 'react';
import { getActivity } from './controllers/ActivityController';

const App = () => {
  const [activity, setActivity] = useState(null);

  const handleGetActivity = async () => {
    const newActivity = await getActivity();
    setActivity(newActivity);
  };

  return (
    <div>
      <h1>What to do next?</h1>
      <button onClick={handleGetActivity}>Get Activity</button>
      {activity && <p>{activity.activity}</p>}
    </div>
  );
};

export default App;
