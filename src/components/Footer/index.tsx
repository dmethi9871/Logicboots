"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Transforming Healthcare with AI Powered Robots.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/logicboots/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.243 1.31 3.609.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.609 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.609-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.31-3.608.975-.975 2.242-1.248 3.609-1.31 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.755 0 8.333.012 7.052.072 5.72.132 4.485.388 3.398 1.474 2.312 2.56 2.056 3.795 1.996 5.128.935 6.41.922 6.83.922 12s.013 5.584.073 6.87c.06 1.333.316 2.568 1.402 3.654 1.087 1.086 2.322 1.342 3.655 1.402 1.287.06 1.707.073 6.87.073s5.584-.013 6.87-.073c1.333-.06 2.568-.316 3.654-1.402 1.086-1.087 1.342-2.322 1.402-3.655.06-1.287.073-1.707.073-6.87s-.013-5.584-.073-6.87c-.06-1.333-.316-2.568-1.402-3.654-1.087-1.086-2.322-1.342-3.655-1.402C15.667.012 15.245 0 12 0zM12 5.838a6.162 6.162 0 0 0-6.162 6.162A6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.152a3.99 3.99 0 0 1-3.99-3.99 3.99 3.99 0 0 1 3.99-3.99 3.99 3.99 0 0 1 3.99 3.99 3.99 3.99 0 0 1-3.99 3.99zm7.838-10.062a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"
                        fill="currentColor"
                      />
                    </svg>

                  </a>
                  <a
                    href="https://x.com/stpiindia/status/1658711627519393793"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  {/* <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/logic-boots-826589200"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Helpful Resources
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Get In Touch
                </h2>
                <h3>
                  LOGICBOOTS PRIVATE LIMITED
                </h3>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  TIDES Business Incubator, Civil Lines, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand, India
                </p>
                <p className="mb-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <Link
                    href="mailto:info@logicboots.com"
                    className="mb-0 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    info@logicboots.com
                  </Link>
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  <Link
                    href="tel:+91 88008 45043"
                    className="mb-0 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    +91 88008 45043
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Subscribe Newsletter
                </h2>
                <form className="mb-6">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full py-2 px-4 mb-4 text-base leading-relaxed bg-gray-200 dark:bg-gray-800 text-body-color dark:text-body-color-dark border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary dark:focus:border-primary"
                  />
                  <button className="w-full py-2 px-6 bg-primary text-white text-base leading-relaxed font-bold uppercase duration-300 hover:bg-primary-dark focus:outline-none focus:bg-primary-dark">
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Get the latest updates from us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white dark:bg-gray-dark">
        <div className="container border-t border-gray-200 dark:border-gray-700 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2024 Your Company. All Rights Reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
