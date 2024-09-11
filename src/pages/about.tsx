import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/developer-pic-2(1).jpg";
import AnimatedText from "./Components/AnimateText";
import Education from './Components/Education';
import Experience from './Components/Experience';
import Layout from './Components/Layout';
import Skills from './Components/Skills';

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref,{once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && parseInt(latest.toFixed(0)) <= value ){
        (ref.current as HTMLSpanElement).textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value]);

  return <span ref={ref}>{springValue.get()}</span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Bruuu | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <article className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='p-40 pt-16 pb-0 z-0 inline-block h-full w-full bg-light'>
          <AnimatedText text="Drive ignites ambition!" className='text-7xl mb-16 text-center' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
              <p className='font-medium'>
                Hello, I am Bruha Dev, currently pursuing my BTech in Computer Science and Engineering. I have a strong foundation in programming languages such as Java, Python, C, Node.js, and React. I have a knack for creating robust software solutions and tackling complex technological challenges. My passion for technology and problem-solving drives me to continually improve my skills and pursue excellence in my field.
              </p>
              <p className='my-4 font-medium'>
                My ability to learn quickly and work effectively as part of a team enables me to apply my skills to practical tasks efficiently. I have honed my skills in Node.js and React, which allow me to build scalable and efficient web applications
              </p>
              <p className='font-medium'>
                I am seeking opportunities to join a dynamic team where I can further develop my skills and contribute to the success of the group. I am eager to leverage my technical abilities and my passion for problem-solving to drive innovation and excellence in the field of technology.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-[2rem] border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[105%] rounded-2xl bg-dark'></div>

              <Image src={profilePic} alt="bruuu" className='w-full h-auto rounded-2xl' />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize  text-dark dark:text-light/75'>Satisfed clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                 <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize  text-dark dark:text-light/75'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize  text-dark'>Years of experience</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </article>
    </>
  )
}

export default About