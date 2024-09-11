"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react'; // Add this line
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, PinterestIcon, SnapchatIcon, SunIcon, TwitterIcon } from './Icons';
import Logo from "./Logo";

const CustomLink = ({href, title, className=""}: { href: string, title: string, className?: string }) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${router.pathname == href ? className + ' active' : className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-100 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light` }>
        &nbsp;
      </span> 
    </Link>
  )
}

const Navbar = () => {
const [mode, setMode] = useThemeSwitcher() as [string, Dispatch<SetStateAction<string>>];


  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4'/>
          <CustomLink href="/articles" title="Articles" className='ml-4' />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://twitter.com/BruhaDev" target={"_blank"}
            whileHover={{y:-2 }}
            whileTap={{scale:0.9}}
            className="w-6 mr-3"
            >
            <TwitterIcon/>
          </motion.a>
          <motion.a href="https://github.com/Bruhadev45" target={"_blank"}
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          className="w-6 mr-3">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/bruhadev17/" target={"_blank"} whileHover={{y:-2 }}
            whileTap={{scale:0.9}}
            className="w-6 mr-3">
            <LinkedInIcon/>
          </motion.a>
          <motion.a href="https://in.pinterest.com/devbruha/" target={"_blank"} whileHover={{y:-2 }}
            whileTap={{scale:0.9}}
            className="w-6 mr-3">
            <PinterestIcon/>
          </motion.a>
          <motion.a href="https://www.instagram.com/bruha_dev/" target={"_blank"}
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          className="w-6 mr-3">
            <InstagramIcon/>
          </motion.a>
          <motion.a href="https://www.snapchat.com/add/bruha_45" target={"_blank"}
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          className="w-6 mr-3">
            <SnapchatIcon/>
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ?  "dark": "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? " bg-dark text-light" : " bg-light  text-dark"}`}>
          {
              mode === "dark" ?
              <SunIcon className={"fill-dark"}/>
             : <MoonIcon className={"fill-dark"}/>

            }
          </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%] w-16 mr-3'>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;