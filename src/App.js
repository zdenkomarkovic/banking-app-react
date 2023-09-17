import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

const LS_KEY = 'users';

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(users));
  }, []);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={{ users, setUsers }}>
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
