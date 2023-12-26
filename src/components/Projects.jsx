import { projectsData } from '../data/data';

export const Projects = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-700 h-auto overflow-hidden'>
      <div className='max-w-7xl mx-auto size-full overflow-hidden lg:px-16 md:px-14 py-20'>
        <h1 className="text-center text-4xl font-bold text-slate-700 dark:text-slate-100 pb-20">My Projects</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap- place-items-center overflow-hidden'>
          {projectsData.map((data, index) => (
            <>
              <div key={index} className='w-full h-52 lg:scale-100 md:scale-100 scale-90 bg-slate-200 dark:bg-slate-800 rounded-xl flex gap-5 justify-start items-center px-5 overflow-hidden'>
                <div className='w-64'>
                  <img className='w-64 rounded-2xl shadow-md shadow-slate-500/50' src={data.imageUrl} alt="" />
                </div>
                <div className='bg-slate- w-64 h-44 flex flex-col gap-2 items-start relative'>
                  <h1 className='bg-slate-300 dark:bg-slate-600 dark:text-slate-100 font-medium px-5 py-2.5 rounded-lg'>{data.title}</h1>
                  <p className='lg:text-2xl text-xl text-slate-800 dark:text-slate-100 font-bold ml-2'>{data.name}</p>
                  <p className='text-sm text-slate-700 dark:text-slate-400 ml-2'>{data.tags}</p>
                  <p className='text-xl text-slate-800 dark:text-slate-100   flex items-center cursor-pointer selection:bg-transparent gap-2 font-medium ml-2 absolute bottom-0'>
                    {data.Detailstext}{data.Details}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}