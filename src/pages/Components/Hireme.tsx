"use client"
import Link from "next/link";
import { CircularText } from "./Icons";

const Hireme = () => {
  return (
    <div className='fixed left-5 bottom-20  flex items-center justify-center overflow-hidden '>
        <div className='w-40 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin spin-slow    dark:fill-light"} />
            <Link href="mailto:devbruha@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>Hire Me
            </Link>
        </div>
    </div>
  )
}

export default Hireme