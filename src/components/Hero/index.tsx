import Link from "next/link";
import image from "public/images/hero/Untitled design (21).png"
import image1 from "public/images/hero/Untitled design (18).png"
const Hero = () => {
  return (
    <>
    <div className="h-screen">
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full  px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight">
                Building Intelligent machines, enriching human  lives
                </h1>
                <p className="mb-2 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Where machines learn, adapt, and evolve
                </p>
                <div className="flex flex-col mb-12 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  
                  <Link
                    href="/contact"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="mailto:info@logicboots.com"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Email Us
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
       <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" /> <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" /> <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" /> <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" /> <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)" /> <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_25:217)" /> <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)" /> <defs> <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)" > <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" /> </radialGradient> <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)" > <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" /> </radialGradient> <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="white" stopOpacity="0" /> </linearGradient> <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="white" stopOpacity="0" /> </linearGradient> <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> </defs> </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <div className="w-456px h-full">
          <img src={image.src} alt="Descriptive text about the image" className="w-full h-full object-cover" />
        </div>
</div>

      </section>
      </div>
    </>
  );
};

export default Hero;
