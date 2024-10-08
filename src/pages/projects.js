import React from 'react'
import Head from 'next/head'
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
// import profilePic from "../../public/images/profile/shreyaprofilepic.png";
import projectpic from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Image from 'next/image';



const FeaturedProject = ({type, title, summary, img, link, github,}) => {
        return(
            <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 my-10 relative rounded-br-2xl'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"/>
                <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt= {title} className="w-full h-auto"/>
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link href={link} target= "_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                    <Link href={github} target= "_blank" className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target= "_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>
                    </div>
                </div>
            </article>
        )
}


const Project = ({type, title, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt= {title} className="w-full h-auto"/>
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link href={link} target= "_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                    </Link>
                    
                    <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target= "_blank" className='underline text-lg font-semibold'>
                        Visit
                    </Link>
                    <Link href={github} target= "_blank" className='w-8'>
                        <GithubIcon />
                    </Link>
                    
                    </div>
                </div>
        </article>
    )
}



const projects = () => {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main>
        <Layout>
            <AnimatedText text="My Projects! " className='mb-16'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                    <FeaturedProject
                        title="Portfolio"
                        img={projectpic}
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="/"
                        type="Featured Project"
                        github="/"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                        title="Portfolio"
                        img={projectpic}
                        link="/"
                        type="Featured Project"
                        github="/"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                        title="Portfolio"
                        img={projectpic}
                        link="/"
                        type="Featured Project"
                        github="/"
                    />
                </div>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
