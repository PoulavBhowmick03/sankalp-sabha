// Assuming styles and constants are imported correctly

import { stats } from "@/utils/constants";
import styles from "../utils/style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 p-8 rounded-lg cursor-pointer`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-auto flex justify-center items-center flex-col m-7 hover:shadow-slate-800  rounded-lg p-6 shadow-lg`}
      >
        <h4 className='font-poppins font-semibold text-2xl xs:text-3xl text-gray-200'>
          {stat.value}
        </h4>
        <p className='font-poppins font-normal mt-2 text-sm xs:text-base text-gray-500'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
