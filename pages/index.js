import { useEffect } from "react";
import About from "../components/About";
import ConnectionState from "../components/ConnectionState";
import FirstCard from "../components/FirstCard";
import Hero from "../components/Hero";
import PublicNavbar from "../components/PublicNavbar";
import Sponsors from "../components/Sponsors";
import Skills from "../components/Skills";
import Team from "../components/Team";
import Ieee from "../components/Ieee";
import Map from "../components/Map";
import Foot from "../components/Foot";
import Head from "next/head";
import Contact from "../components/Contact";
import Proyects from "../components/Proyects";

export default function Index() {
  useEffect(() => {
    if (true) {
      document.body.style.backgroundColor = "var(--main-raven)";
    } else {
      document.body.style.backgroundColor = "var(--logo-light)";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Inicio - RAS Uniandes</title>
      </Head>
      <PublicNavbar />
      <Hero />
      <Sponsors />
      <FirstCard />
      <About />
      <Skills />
      <div className="section-backgront-aliviate" style={{backgroundColor: "var(--main-medium)", borderTop: "2px solid var(--logo-star)"}}>
          <Team />
          <Proyects/>
          <Map />
      <Ieee />
      <Contact/>
      </div>
      
      <Foot />
      <ConnectionState modalPosition="fixed"/>
    </>
  );
}
