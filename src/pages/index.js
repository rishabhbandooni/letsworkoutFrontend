// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Fitness App</h1>
        <p>Track your workouts and achieve your fitness goals!</p>
        {/* Add more content or components here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
