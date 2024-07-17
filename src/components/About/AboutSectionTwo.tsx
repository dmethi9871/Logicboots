import { GiLightBulb, GiRobotGolem, GiSpyglass } from 'react-icons/gi'; // Example icons from react-icons
import Image from "next/image";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Untitled design (53).png"
                alt="about image"
                layout="fill"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
               src="/images/about/Untitled design (54).png"
               alt="about image"
               fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <div className="flex items-center mb-4">
                  <GiLightBulb className="text-4xl text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Journey to Redefine Everyday Living
                  </h3>
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Logicboots, founded in 2020, is on a mission to transform everyday living through innovative robotics and advanced technology.
                </p>
              </div>
              <div className="mb-9">
                <div className="flex items-center mb-4">
                  <GiRobotGolem className="text-4xl text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Fun-infused Robotics
                  </h3>
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Logicboots enhances everyday tasks by integrating robotics, aiming to add a "wow" factor to their products and redefine user experiences.
                </p>
              </div>
              <div className="mb-1">
                <div className="flex items-center mb-4">
                  <GiSpyglass className="text-4xl text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Institutional Support
                  </h3>
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Backed by TIDES at IIT Roorkee, Medtech at SGPGI Lucknow, and Electropreneur Park in Bhubaneswar and Delhi, alongside support from the Ministry of Electronics and Information Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
