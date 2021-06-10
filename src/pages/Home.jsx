import React from 'react';
import Content from '../components/Content/Content';
import Navbar from '../components/Navbar/Navbar';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
