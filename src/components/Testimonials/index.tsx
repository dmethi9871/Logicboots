import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Amit Kumar ",
    designation: "Founder @Logicboots",
    content:
      "Our founder believes AI-powered robots revolutionize industries by enhancing efficiency and precision. More than tools, they are partners augmenting human capabilities and driving innovation. By emphasizing ethical AI development, we ensure these advancements benefit society and foster a better future for all.",
    image: "/images/testimonials/auth-01.png",
  },
  {
    id: 2,
    name: "Swarna Singh",
    designation: "Co Founder @Logicboots",
    content:
      "Our cofounder envisions AI-powered robots as transformative agents in various sectors, streamlining processes and improving outcomes. Their steadfast commitment to ethical AI emphasizes responsible development, ensuring these transformative technologies empower individuals and drive progress.",
    image: "/images/testimonials/auth-02.png",
  },
  {
    id: 3,
    name: "Dr. Pradeep Gupta",
    designation: "Mentor @Logicboots",
    content:
      "Our mentor believes that AI advancements will positively impact society, fostering a future where humans and robots collaboratively thrive. Through responsible innovation, they aim to create a world where technology and humanity coexist harmoniously, driving continuous improvement and opportunity.",
    image: "/images/testimonials/auth-03.png",
  },
];
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substr(0, maxLength - 3) + "..."; // Truncate and add ellipsis
  }
};

// Adjust all testimonial content to have the same maximum length
const maxContentLength = 350; // Adjust this value based on desired maximum length

testimonialData.forEach((testimonial) => {
  testimonial.content = truncateText(testimonial.content, maxContentLength);
});

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="What Our Founder Says"
          paragraph="AI-powered robots enhance efficiency, drive innovation, and benefit society through ethical development."
          center
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-transparent shadow-lg rounded-lg">
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative SVG elements */}
      <div className="absolute right-0 top-5 z-[-1] hidden md:block">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths for decoration */}
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1] hidden md:block">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths for decoration */}
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
