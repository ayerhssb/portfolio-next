import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/shreyaprofilepic.png"


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>

      <Layout>
        <div className='flex items-center justify-between w-full'>
          <Image src={profilePic} alt="profile" className="w-full h-auto" />
        </div>
      </Layout>
      </main>
    </>
  )
}
