import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return(
    <div>
      <h1>Home</h1>
      <Link to="/docs/getting-started/">Getting Started</Link>
    </div>

  );
};
export default HomePage;
