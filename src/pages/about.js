import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/shreyaprofilepic.png";
import Experience from "@/components/Experience";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose" />
          <div className="w-full grid grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>

              <p>
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
            </div>
            <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">

            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
            <Image src={profilePic} alt="Profile Image" className="w-full h-auto rounded-2xl"/>

            </div>
          </div>
          <Experience/>
        </Layout>
      </main>
    </>
  );
};

export default about;
