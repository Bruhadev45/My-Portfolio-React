"use client"
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import profilepic from "../../public/images/profile/developer-pic-3.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "./Components/AnimateText";
import Hireme from "./Components/Hireme";
import { LinkArrow } from "./Components/Icons";
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>bruuu</title>
        <meta name="description" content="by Bruu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <article className=''>
        <Layout className='p-44 pt-0'>
            <div className="flex w-full items-start justify-between dark:text-light">
            <div className='w-1/2'>
                <Image src={profilepic} alt="Bruuu" className='h-auto w-full' priority={true}/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text="Where Logic Meets Innovation" className="text-6xl text-left"/>     
                <p  className='my-4 text-base font-medium'>Data analysis unveils hidden patterns buried in complex datasets. Advanced exploration techniques extract valuable insights from large data sources. Identifying trends helps organizations make informed decisions, optimize operations, and drive innovation</p>
                <div className='flex items-center self-start mt-2'>
                <Link href="/sem 3 cv.pdf" target={"_blank"} 
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                download={true}
                >Resume<LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:devbruha@gmail.com" target={"_blank"}
                className="ml-4 text-size-lg font-medium capitalize text-dark underline dark:text-light hover:dark:bg-dark hover:dark:text-light"
                >Contact</Link>
                </div>
            </div>
            </div>
        </Layout>

        <Hireme/>

        <div className= 'absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="bruu" className='w-full h-auto' />
        </div>
      </article>
    </>
  );
}
