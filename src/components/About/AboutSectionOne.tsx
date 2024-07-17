import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { AiOutlineCheck, AiFillStar } from 'react-icons/ai';
import { FaRobot, FaHeartbeat } from 'react-icons/fa';
import { GiMagicLamp } from 'react-icons/gi';
import { IoMdMedkit } from 'react-icons/io';

const AboutSectionOne = () => {
  const List = ({ text, icon: Icon, color }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        <Icon className="text-xl" style={{ color: color }} />
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Pioneering Fun-infused Healthcare and Home Automation."
                paragraph="Logicboots is a startup that develops AI-powered solutions for healthcare and household automation."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Innovative Mission" icon={AiFillStar} color="#ff6347" />
                    <List text="Vision" icon={GiMagicLamp} color="#1e90ff" />
                    <List text="Strategic Backing" icon={FaRobot} color="#32cd32" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="AI-powered Solutions" icon={FaHeartbeat} color="#ff1493" />
                    <List text="Commitment to Excellence" icon={AiOutlineCheck} color="#ff8c00" />
                    <List text="Customer Promise" icon={IoMdMedkit} color="#4b0082" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
