import styles from "../utils/style";
import { footerLinks } from "@/utils/constants";
import { RxGithubLogo } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"; // Fix here

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-[1] flex flex-col justify-start mr-10'>
        <div className='text-4xl sm:p-4'>Awaaz Uthao</div>
        <p className={`${styles.paragraph} mt-4 sm:p-4 max-w-[312px]`}>
          Platform for you to raise your voice and bring a change
        </p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerlink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        Copyright Ⓒ 2024 Awaaz Uthao. All Rights Reserved.
      </p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <div
            key={social.id}
            className={`cursor-pointer text-2xl ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
const socialMedia = [
  {
    id: "social-media-1",
    icon: <RxGithubLogo />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <CiFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <AiOutlineTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <FaLinkedinIn />, // Fix here
    link: "https://www.linkedin.com/",
  },
];
