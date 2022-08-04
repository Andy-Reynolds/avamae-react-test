import Carousel from "../../Components/Carousel/Carousel";
import ContactUsSection from "../../Components/ContactUsSection/ContactUsSection";
import Layout from "../../Components/Layout/Layout";
import LearnMoreSection from "../../Components/LearnMoreSection/LearnMoreSection";
import LogInSection from "../../Components/LogInSection/LogInSection";

const Home = ({ homeObj }) => {
  return (
    <Layout>
      <div>
        <Carousel homeObj={homeObj} />
        <LearnMoreSection />
        <LogInSection />
        <ContactUsSection />
      </div>
    </Layout>
  );
};

export default Home;
