import user from 'data/user.json';
import value from 'data/data.json';

import Profile from "./Profile/Profile";
import  Statistics from "./Statistics/Statistics";


export default function App()  {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
    </div>
  );
};
