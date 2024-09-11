import { motion } from 'framer-motion';

const Skill =({ name, x, y }: { name: string, x: string, y: string }) => {
return(
  <motion.div className='flex items-center justify-center rounded-full font- semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute' whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x, y:y }} transition={{duration:1.5 }}>
    {name}
  </motion.div>
  )
};

const Skills = () => {
  return (
  <>
  <h2 className='font-bold text-8xl mt-64 text-center'> Skills</h2>
  <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
    <motion.div className='flex items-center justify-center rounded-full font- semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer'
    whileHover={{scale:1.05}}
    
    >
        Web
    </motion.div>
    <Skill name="Tableu" x="-25vw" y="2vw"/>
    <Skill name="Python" x="-5vw" y="7vw"/>
    <Skill name="Java" x="20vw" y="-10vw"/>
    <Skill name="Web desiging" x="-25vw" y="10vw"/>
    <Skill name="SQL" x="10vw" y="-8vw"/>
    <Skill name="CSS" x="-15vw" y="-10vw"/>
    <Skill name="Next.js" x="-30vw" y="-11vw"/>
    <Skill name="C pogramming" x="28vw" y="-2vw"/>
    <Skill name="DBMS" x="24vw" y="10vw"/>
    <Skill name="React JS" x="-5vw" y="-19vw"/>
    <Skill name="Javascript" x="-8vw" y="20vw"/>
    <Skill name="Power BI" x="10vw" y="18vw"/>

  </div>
  </>
  ) 
};

export default Skills