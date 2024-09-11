import { motion, useMotionValue } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import article2 from '../../public/images/articles/Bard AI.jpg';
import article1 from '../../public/images/articles/History of GPT.png';
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article4 from '../../public/images/articles/pagination component in reactjs.jpg';
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png';
import AnimatedText from './Components/AnimateText';
import Layout from './Components/Layout';

const FramerImage = motion.create(Image);

const MovingImg = ({ title, img, link }: { title: string, img: string, link: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouse(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
    }
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
    }
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className=' capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration: 0.2}}}
        ref={imgRef}
        src={img}
        alt={title}
        className=' z-10 w-96 h-auto hidden absolute rounded-lg'
        height={625}
        width={350}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: { img: string, title: string, date: string, link: string }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 my-4 py-6 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 ">{date}</span>
    </motion.li>
  );
};


const FeatureArticle = ({ img, title, time, summary, link }: { img: string, title: string, time: string, summary: string, link: string }) => {
  return (
    <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.8rem] bg-dark rouded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={625}
          height={350}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=' capitalize text-2xl font-bold my-2  mt-4 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Bruuu | Articles page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='p-44 pt-16 z-0'>
          <AnimatedText text="The power of language is limitless!" className='text-7xl mb-16 text-center' />
          <ul className='grid grid-cols-2 gap-16 '>
            <FeatureArticle
              title="History of chat GPT"
              summary="GPT is a powerful language model developed by OpenAI, capable of generating human-like text and enabling advanced conversational AI applications like chatbots and virtual assistants.A variant called ChatGPT was created specifically for conversational AI applications like chatbots and virtual assistants"
              time="9 min read"
              link="https://www.linkedin.com/pulse/history-chat-gpt-bruha-dev/"
              img={article1.src}
            />
            <FeatureArticle
              title="Bard AI"
              summary="Bard AI, developed by OpenAI, is an innovative AI system that can autonomously compose original music across various genres, promising to disrupt and revolutionize the music industry with its efficient and creative approach to music generation"
              time="5 min read"
              link="https://www.linkedin.com/pulse/bard-ai-bruha-dev/"
              img={article2.src}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All articles</h2>
          <ul>
            <Article
              title="The Impact of 5G on Technology: Revolutionizing Connectivity and Beyond"
              img={article3.src}
              link="https://www.linkedin.com/pulse/impact-5g-technology-revolutionizing-connectivity-beyond-bruha-dev-t3e8c/?trackingId=BLAKSjHQk2sEyviHkxE1JA%3D%3D"
              date="June 26,2024"
            />
            <Article
              title="The Profound Impact of AI on Humanity"
              img={article2.src}
              link="https://www.linkedin.com/pulse/profound-impact-ai-humanity-bruha-dev-a3phc/?trackingId=OSkvwMe1bXmVReJZmV5%2FOg%3D%3D"
              date="August 20,2024"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article4.src}
              link="/"
              date="April 20,2024"
            />
          
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;