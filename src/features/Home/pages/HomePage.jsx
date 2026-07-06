import BestSelling from "../components/BestSelling";
import BrowseByCatigory from "../components/BrowseByCatigory";
import FlashSales from "../components/FlashSales";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <FlashSales />
      <BrowseByCatigory />
      <BestSelling />
    </>
  );
}

export default HomePage;
