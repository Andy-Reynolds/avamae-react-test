import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";

const Home = () => {
  const [homeObj, setHomeObj] = useState({});

  const url =
    "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";

  const getData = async () => {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setHomeObj(data);
    console.log(homeObj);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;
