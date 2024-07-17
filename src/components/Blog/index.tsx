import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Products"
          paragraph="Tusing cutting-edge AI and robotics to transform businesses. Increasing productivity and advancing technological innovation."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} link={blog.link.toString()} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
