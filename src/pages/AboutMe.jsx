import { DiGithubBadge } from "react-icons/di"
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5"

const AboutMe = () => {
    return (
      <section className="h-auto relative">
        <div className="w-full h-auto bg-slate-300 dark:bg-slate-700 py-40">
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-10 h-full">
                <div className="bg-white h-[29rem] w-[370px] rounded-lg relative overflow-hidden">
                    <div className="absolute w-full h-full top-64 left-10 scale-100">
                        <h1 className="absolute text-4xl text-white font-bold">Mowlid Sead</h1>
                        <h2 className="absolute text-base text-[#ffffffef] top-12 font-light">I’m Front-end developer</h2>
                        <a className="absolute top-[90px] text-lg text-center text-white border-[2px] rounded-full px-6 py-2 border-white hover:bg-white hover:text-black transition-all" href="#">Hover Me</a>
                    </div>
                    <img src="/images/main.jpg" alt="" />
                </div>
                <div className="bg-white dark:bg-slate-800 dark:text-slate-100 h-[29rem] w-[370px] rounded-lg relative pt-2">
                    <div className="scale-[0.87]">
                        <h1 className="absolute transform scale-[6] top-14 left-12 selection:bg-transparent">👋</h1>
                        <h1 className="absolute text-5xl font-bold left-5 top-32 first-letter:text-rose-600 first-letter:text-5xl first-letter:font-bold">I’m Mowlid</h1>
                        <h1 className="absolute text-4xl font-normal left-5 top-44 pt-5">Sead Omer Farah.</h1>
                        <p className="absolute text-lg top-[250px] left-5 text-gray-600 dark:font-light dark:text-slate-300">I’m a web developer currently working <br/>
                            <span className="font-medium text-black dark:text-slate-100 cursor-pointer">@CodeRaz</span> to make websites</p>
                        <div className="absolute grid grid-cols-3 gap-7 scale-105 mt-[21rem] left-12">
                            <div className="grid place-items-center">
                                <h1 className="text-[21px] font-semibold">12k</h1>
                                <p className="text-gray-500 dark:text-slate-400">Followers</p>
                            </div>
                            <div className="grid place-items-center">
                                <h1 className="text-[21px] font-semibold">280</h1>
                                <p className="text-gray-500 dark:text-slate-400">Following</p>
                            </div>
                            <div className="grid place-items-center">
                                <h1 className="text-[21px] font-semibold">5k</h1>
                                <p className="text-gray-500 dark:text-slate-400">Likes</p>
                            </div>
                        </div>
                        <div className="absolute top-[27rem] flex gap-5 items-center">
                            <a className="text-slate-700 dark:text-slate-200 text-lg rounded-full ml-5 flex justify-center items-center">Follow me:</a>
                            <DiGithubBadge className="text-slate-600 text-4xl"/>
                            <IoLogoFacebook className="text-blue-700 text-3xl"/>
                            <IoLogoYoutube className="text-3xl text-rose-600 bg-clip-text bg-gradient-to-tr from-indigo-500 via-amber-500 to-rose-500"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="-z-10 h-full w-full object-cover" src="./IMG-20230125-WA0006_clipdrop-relight (1).jpg" alt=""> */}
    </section>
    )
  }
  
  export default AboutMe
  