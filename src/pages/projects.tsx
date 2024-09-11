"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import project1 from "../../public/images/projects/Animerecommendation system.png";
import project4 from "../../public/images/projects/MERN-Note-Making-App.png";
import project3 from "../../public/images/projects/Simple calclulator.jpg";
import project2 from "../../public/images/projects/Task manager-app.jpg";
import AnimatedText from './Components/AnimateText';
import { GithubIcon } from './Components/Icons';
import Layout from './Components/Layout';
const FramerImage = motion.create(Image);

const FeautredProject = ({type, title, summary, img, link, github}: {type: string, title: string, summary: string, img: string, link: string, github: string}) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-border-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12  '>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rouded-br-3xl"/>
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto " whileHover={{scale:1.05}}
        transition={{duration:0.2}} width={640} height={365}/>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary  font-medium text-xl'>{type} </span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'> {summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
          <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          >Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, img, link, github}: {type: string, title: string, img: string, link: string, github: string}) => {
  return (
    <article className='w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rouded-br-3xl"/>

      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full cursor-pointer overflow-hidden rounded-lg " whileHover={{scale:1.05}}
        transition={{duration:0.2}} width={640} height={365}/>
      </Link>
      <div className='w-full  flex flex-col items-start justify-between mt-4'>
        <span className='text-primary  font-medium text-xl'>{type} </span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target="_blank"
        className='text-lg font-semibold hover:underline underline-offset-2'
          >Visit</Link>
          <Link href={github} target="_blank" className='w-8'><GithubIcon />{" "}</Link>
         
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
<Head>
  <title>Bruuu | Projects page</title>
  <meta name="description" content="any description" />
</Head>
<main className='w-full mb-16 flex flex-col items-center justify-center'>
  <Layout className='p-44 pt-16 z-0'>
    <AnimatedText text="Unleashing Creativity's Power! " className='text-6xl mb-16 text-center' />
    <div className='grid grid-cols-12 gap-24 gap-y-40'> {/* Increased vertical gap between projects */}
      <div className='col-span-12'>
        <FeautredProject
          title="MERN-Note-Making-App"
          summary="A full-stack Note-Making application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, update, delete, and organize notes with a user-friendly interface. It demonstrates a complete workflow from backend API development to frontend implementation."
          img={project4.src}
          link="https://mern-note-making-app-frontend.vercel.app/"
          github="https://github.com/Bruhadev45/MERN-Note-Making-App"
          type="FeautredProject"
        />
      </div>

      <div className='col-span-12'>
        <FeautredProject
          title="The Anime Recommendation System"
          summary="The Anime Recommendation System is a Python-based application that leverages collaborative filtering to provide personalized anime           img={project1.src} user preferences. If you're an anime enthusiast looking for new series or movies to watch, this system can help you discover content that aligns with your tastes."
          img={project1.src}
          link="https://github.com/Bruhadev45/Anime-Recommendation-System"
          github="https://github.com/Bruhadev45/Anime-Recommendation-System"
          type="FeautredProject"
        />  
     
             
            </div>
            <div className='col-span-6'>
              <Project
                title="Task Manager in Java "
                img={project2.src}
                link="https://github.com/Bruhadev45/Task-Management-App"
                github="https://github.com/Bruhadev45/Task-Management-App"
                type="Project"
              />
            </div>
            <div className='col-span-6'>
            <Project
                title="Simple calculator using python GUI"
                img={project3.src}
                link="https://github.com/Bruhadev45/Simple-Calculator"
                github="https://github.com/Bruhadev45/Simple-Calculator"
                type="Project"
              />            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects