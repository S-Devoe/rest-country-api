import type { NextPage } from "next";
import Head from "next/head";
import CountriesList from "../components/CountriesList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>REST Countries API</title>
        <meta
          name="description"
          content="Coded by Deevoe. This is my solution for REST Countries API FrontendMentor challenge."
        />
      </Head>
      <div className="">
        <CountriesList />
      </div>
    </>
  );
};

export default Home;
