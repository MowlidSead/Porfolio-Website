import { MySkills } from "./MySkills"
import { Projects } from "./Projects"

const Home = () => {
    return (
        <>
            <div className="bg-slate-100 dark:bg-slate-700">
                <div className="w-full h-[44rem] max-w-7xl mx-auto">
                    <div className="size-full flex justify-center items-center px-16">
                        <div className="bg-slate- flex flex-col items-center text-center gap-5 w-[34rem] p-5 ">
                            <img className="w-40 rounded-full border-[5px] border-rose-600 mt-5" src="/images/Profile Avatar.png" alt="" />
                            <h1 className="font-bold text-slate-700 dark:text-slate-100 text-5xl"><span className="text-rose-600 font-normal    ">Hello!</span> {"I'm Code Raz"} </h1>
                            <div className="flex flex-wrap justify-center text-slate-500 dark:text-slate-100 text-base font-light">
                                <p>Im now a full-stack developer working as a freelancer. My stack includes React, Node.js, TypeScript, Tailwind, Prisma and MongoDB. Im open to full-time opportunities.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-start">
                                <button className='text-lg font-medium bg-rose-600 text-slate-100 rounded-lg px-5 py-3 hover:bg-rose-700'>Contact Me</button>
                                <button className='text-lg font-medium bg-slate-800 text-slate-100 rounded-lg px-5 py-3 hover:bg-slate-800'>About Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MySkills />
            <Projects />
        </>
    )
}

export default Home