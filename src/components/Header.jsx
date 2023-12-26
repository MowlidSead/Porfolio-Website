import { } from 'react'
import { IoLogOut } from "react-icons/io5"
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <header className='h-auto overflow-hidden bg-transparent z-50 py-5 dark:bg-slate-900'>
                <div className='max-w-7xl mx-auto h-24 bg-slate-30 backdrop-blur-lg rounded-2xl'>
                    <div className='flex justify-between items-center size-full px-10'>
                        <div>
                            <Link to={"/"}> 
                                <img className='w-32' src="/logo/Code Raz 1.png" alt="" />
                            </Link>
                        </div>
                        <div className='lg:flex md:flex hidden items-center gap-8 px-6 py-4 rounded-full'>
                            <Link to={"/"} className='font-medium text-lg text-slate-600 dark:text-slate-100 hover:text-red-500'>
                                <button>Home</button>
                            </Link>
                            <Link to={"/projects"} className='font-medium text-lg text-slate-600 dark:text-slate-100 hover:text-red-500'>
                                <button>Projects</button>
                            </Link>
                            <Link to={"/about"} className='font-medium text-lg text-slate-600 dark:text-slate-100 hover:text-red-500'>
                                <button>About Me</button>
                            </Link>
                            <Link to={"/contact"} className='font-medium text-lg text-slate-600 dark:text-slate-100 hover:text-red-500'>
                                <button>Contact</button>
                            </Link>
                        </div>
                        <div className="lg:flex md:flex hidden">
                            <Link to={"/login"}>
                                <button className='flex items-center gap-2 px-5 py-3 hover:bg-slate-200 hover:text-slate-700 dark:text-slate-700 dark:bg-slate-100 shadow-md transition-all duration-300 rounded-full text-lg font-mono bg-slate-700 text-white'><IoLogOut />Login</button>
                            </Link>
                        </div>
                        <div className="lg:hidden md:hidden block scale-150 group bg-slate-300 px-2 py-1 rounded-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header