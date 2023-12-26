import { skillsData } from '../data/data'

export const MySkills = () => {

    return (
        <div className='flex justify-center items-center py-20 h-auto overflow-hidden dark:bg-slate-800'>
            {/* <div className='max-w-7xl mx-auto grid h-72 place-items-center py'> */}
            <section
                id="skills"
                className="bg-slate- w-[60rem] px-10 h-auto text-center py-10 grid place-items-center gap-2"
            >
                <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-100 capitalize py-8 text-center bg-slate-">
                    My Skills
                </h1>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800 bg-slate-">
                    {skillsData.map((skill, index) => (
                        <li
                            className="bg-white dark:bg-slate-700 dark:text-slate-100 border-[3px] border-transparent flex items-center gap-2 lg:hover:border-rose-600 transition-all duration-200 borderBlack rounded-xl px-5 py-3"
                            key={index}

                        >
                            {skill.icon}{skill.name}
                        </li>
                    ))}
                </ul>
            </section>
            {/* </div> */}
        </div>
    )
}