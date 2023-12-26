import Lottie from "lottie-react";
import animationData from "../assets/animation_lnppll79.json";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="w-full h-[50.4rem] flex justify-center items-center gap-5 text-center flex-col bg-slate-100 dark:bg-slate-700">
      <div>
        <Lottie animationData={animationData} className="w-full px-10" />
      </div>
      <h1 className="font-bold lg:text-4xl px-5 md:text-4xl text-3xl text-slate-800 dark:text-slate-100">
        404 error Not Found
      </h1>
      <p className="text-slate-400 px-10 cursor-pointer">
        <Link to={"/"}>
          It Looks like that this page does not exist please back to home
        </Link>
      </p>
    </div>
  );
};

export default NoPage;
