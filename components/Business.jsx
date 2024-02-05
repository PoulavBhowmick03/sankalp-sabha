import React from "react";
import { CiChat1 } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { CiBullhorn } from "react-icons/ci";
const FeatureCard = ({ icon, title, content }) => (
  <div className='flex flex-col items-center p-6 rounded-[20px] mb-6 feature-card'>
    <div className='text-5xl rounded-full bg-dimBlue mb-3'>{icon}</div>
    <div className='text-center'>
      <h4 className='font-poppins font-semibold text-white text-lg leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const FeaturesPage = () => (
  <section className='flex flex-col items-center p-8'>
    {features.map((feature) => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </section>
);

export default FeaturesPage;

const features = [
  {
    id: "feature-1",
    icon: <CiChat1 />,
    title: "Chat app",
    content:
      "A completely anonymous chat application for citizens to talk to anyone of their locality about pertaining issues",
  },
  {
    id: "feature-2",
    icon: <CiBullhorn />,
    title: "100% anonymous complaint raising",
    content:
      "A completely anonymous complaint raising section for people who are often afraid to raise a complaint because of their identities being revealed",
  },
  {
    id: "feature-3",
    icon: <GoLaw />,
    title: "Proposal System",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
