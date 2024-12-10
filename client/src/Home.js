/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Welcome to Chatterbox!</div>
      </div>
      <div>
        <h1>By Ramiah Curry and Elijah Truit</h1>
      </div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? (
          <div>Your email address is {email}</div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Home;
