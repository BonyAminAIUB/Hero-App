import Banner from "./components/homepage/Banner";
import Statistics from "./components/homepage/Statistics";
import TrendingApp from "./components/homepage/TrendingApp";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Statistics/>
      <TrendingApp/>
    </div>
  );
}
