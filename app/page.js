
import Carausal from "./_components/carausal";
import Subscribe from "./_components/home/Subscribe";
import HomeTrend from "./_components/HomeTrend";


export default function Home() {
  return (
    <main className="lg:px-20">
      <Carausal />
      <HomeTrend />
      <Subscribe />
    </main>
  );
}
