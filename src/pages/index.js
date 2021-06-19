import React from "react";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import About from "../components/About";
import Tips from "../components/Home/Tips";

import {Link} from "gatsby";
export default function Home() {
  return(<Layout>
    <SimpleHero>
      <Banner title={"Amazing Hampi"} info={"come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site."}>
        <Link to={"/places"}>Explore places</Link>
      </Banner>
    </SimpleHero>
    <About/>
    <Tips/>
  </Layout>)
}
