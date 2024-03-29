// pages/index.js

import Header from '../components/Header';

import { ModeToggle } from '@/components/toggle';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <ModeToggle />
        <h1>Welcome to My Fitness App</h1>
        <p>Track your workouts and achieve your fitness goals!</p>
        {/* Add more content or components here */}
      </main>
     
    </div>
  );
};

export default Home;
