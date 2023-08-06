import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const UserDashboard = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <>
    <UserDashboardHeader/>
    <div>
      <h1>Welcome to User Dashboard, {user.name}!</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Route path="/profile">
          <UserProfile user={user} />
        </Route>
        <Route path="/settings">
          <UserSettings user={user} dispatch={dispatch} />
        </Route>
      </Router>

      <FontAwesomeIcon icon={faUser} /> Logged in as: {user.name}
    </div>
    </>
  );
}

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

const UserSettings = ({ user, dispatch }) => {
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>User Settings</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}



export default UserDashboard;