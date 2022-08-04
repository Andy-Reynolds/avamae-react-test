import Carousel from "../../Components/Carousel/Carousel";
import Layout from "../../Components/Layout/Layout";
import LearnMoreSection from "../../Components/LearnMoreSection/LearnMoreSection";

const Home = ({ homeObj }) => {
  return (
    <Layout>
      <div>
        <Carousel homeObj={homeObj} />
        <LearnMoreSection />
      </div>
    </Layout>
  );
};

export default Home;
