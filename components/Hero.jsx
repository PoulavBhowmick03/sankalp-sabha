// components/Hero.js
import styles from "../utils/style";

const Hero = () => {
  return (
    <div className='sm:h-full'>
      <section
        id='home'
        className={`flex md:flex-row flex-col sm:pt-16  ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexCenter} flex-col p-8  sm:px-20 text-center`}
        >
          <div className='mb-6'>
            <h1 className='font-poppins font-bold text-[52px] sm:text-[72px] text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text ss:leading-[75px] leading-[100.8px]'>
              The Ultimate <br className='sm:block hidden' />{" "}
              <span className='text-gradient'>Citizens</span>{" "}
            </h1>

            <h1 className='font-poppins font-bold text-[52px] sm:text-[68px] text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text ss:leading-[75px] leading-[100.8px] w-full'>
              Platform to Raise Voices.
            </h1>
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 text-4xl mx-auto`}
            >
              Awaaz Uthao is the ultimate platform where citizens can raise
              their voices and get heard by the government.
            </p>
          </div>
        </div>

        <div className={`flex-1 ${styles.flexCenter} my-10 relative group`}>
          {/* Gradient overlays */}
          <div className='absolute z-0 w-[40%] h-[35%] top-0 left-0 bg-gradient-to-br from-pink-500 to-red-500 rounded-tl-3xl transform origin-top-left group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300' />
          <div className='absolute z-1 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-white to-gray-200 bottom-40 transform origin-bottom group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300' />
          <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-br-3xl transform origin-bottom-right group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-300' />
        </div>
      </section>
    </div>
  );
};

export default Hero;
