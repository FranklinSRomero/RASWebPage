import React from "react";
import PublicNavbar from "../../components/PublicNavbar";
import { useEffect } from "react";
import Head from "next/head";
import Foot from "../../components/Foot";

export default function Proyects() {
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
      <PublicNavbar></PublicNavbar>
      <Foot></Foot>
    </>
  );
}
