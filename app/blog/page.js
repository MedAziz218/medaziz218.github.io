// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { Card, CardContainer } from "../components/helper/Card";
import BlogCard from "../components/homepage/blog/blog-card";
async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      {
        blogs.length > 0 ?
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            {
              blogs.length > 0 ?
                blogs.map((blog, i) => (
                  blog?.cover_image &&
                  <BlogCard blog={blog} key={i} />
                ))
                : <p>No blog found</p>
            }
          </div>
          :
          <CardContainer>
            <Card identifier={"blogs-cards-1"} colortype="red" imgsrc="/image/coming soon.jpg" title="Blogs Coming Soon" description="I'm currently working on creating blogs to document my learnings and share knowledge and experience about embedded software, hardware, and more. Stay tuned for insightful articles and updates!" tags={["Coming Soon", "work in progress", "under construction"]} />
          </CardContainer>
      }
    </div>
  );
};

export default page;