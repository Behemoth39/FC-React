import Banner from "./Banner";
import Workout from "./Workout";
import Food from "./Food";
import News from "./News";

import "./home.css";

const Home = () => {
  return (
    <main>
      <Banner />
      <Workout />
      <Food />
      <News />
    </main>
  );
};

export default Home;
