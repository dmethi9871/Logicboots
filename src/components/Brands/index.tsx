import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
    <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center  
          mb="10px"
        />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-200 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 items-center justify-center px-3 py-4">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full mb-2 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src={imageLight}
            alt={name}
            width={700}
            height={700}
            objectFit="contain"
            className="hidden dark:block"
          />
          <Image
            src={image}
            alt={name}
            width={700}
            height={700}
            objectFit="contain"
            className="block dark:hidden"
          />
        </div>
      </a>
    </div>
  );
};
