import Carousel from "../../Components/Carousel/Carousel";
import Layout from "../../Components/Layout/Layout";

const Home = ({ homeObj }) => {
  return (
    <Layout>
      <div>
        <Carousel homeObj={homeObj} />
      </div>
    </Layout>
  );
};

export default Home;
