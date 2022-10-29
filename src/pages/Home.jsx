// componenets
import Hero from "../components/elements/Hero";
import Intro from "../components/elements/Intro";
import MultiChain from "../components/elements/MultiChain";
import Sale from "../components/elements/Sale";
import Tokenomics from "../components/elements/Tokenomics";
import FAQs from "../components/elements/FAQs";
import Roadmap from "../components/elements/Roadmap";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <MultiChain />
      <Sale />
      <Tokenomics />
      {/* <Roadmap /> */}
      <FAQs />
    </>
  );
}
export default Home;
