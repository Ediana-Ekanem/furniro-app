import React from "react";
import TopSection from "../../component/reusables/top-into-header";
import Services from "../../component/common/services/Services";
import { cloudName } from "../../cloudImages/Cloud";
import { FaRegUser } from "react-icons/fa";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { usePagination } from "../../hooks/usePagination";
import { blog } from "../../data";


const getRandomPost = (categories) => {
  return categories.map((category) => {
    const posts = category.posts;
    const randomIndex = Math.floor(Math.random() * posts.length);
    return {
      ...posts[randomIndex],
      category: category.category,
    };
  });
};

const getCategoryPostCounts = (categories) => {
  return categories.map((category) => ({
    category: category.category,
    postCount: category.posts.length,
  }));
};

const getRandomRecentPosts = (categories, count) => {
  const allPosts = categories.flatMap((category) =>
    category.posts.map((post) => ({ ...post, category: category.category }))
  );
  const shuffledPosts = allPosts.sort(() => 0.5 - Math.random());
  return shuffledPosts.slice(0, count);
};

const Blog = () => {
  const randomPosts = getRandomPost(blog);
  const categoryPostCounts = getCategoryPostCounts(blog);
  const recentPosts = getRandomRecentPosts(blog, 5);

  const { activePage, nextPage, previousPage, totalPages, totalItems, items } =
    usePagination(randomPosts, 1, 4);

  // Determine the range of page numbers to display
  let startPage = Math.max(activePage - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages);

  if (endPage - startPage < 2) {
    startPage = Math.max(endPage - 2, 1);
  }

  return (
    <div className="pt-10">
      <TopSection theme="Blog" main="Home" route="Blog" />
      <div className="screen-max-width flex justify-between items-center flex-col md:flex-row md:items-start   mt-8">
        <div className="flex-1 px-4 lg:px-12">
          {randomPosts.map((post, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/${post.img}`}
                alt={post.title}
                className="w-full rounded-xl h-auto lg:h-[414.84px] mt-4"
              />
              <div className="text-sm text-gray-500 flex flex-col md:flex-row items-start gap-2 md:items-center">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaRegUser />
                  {post.createdBy}
                </p>
                <p className="flex items-center gap-1">
                  <CiCalendar />
                  {post.createdAt}
                </p>
                <p className="capitalize flex gap-1 items-center">
                  <GoTag />
                  {post.category}
                </p>
              </div>
              <p className="mt-4">{post.content}</p>

              <p className="underline  mt-4">Read More</p>
            </div>
          ))}
          <div className="mt-24 flex justify-center items-center">
            <button
              className={`px-3 py-1 rounded-md mr-2 ${
                activePage <= 1
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-secondary text-black"
              }`}
              onClick={previousPage}
              disabled={activePage <= 1}
            >
              Previous
            </button>
            {[...Array(endPage - startPage + 1).keys()].map((index) => (
              <button
                key={startPage + index}
                className={`px-3 py-1  rounded-md ${
                  startPage + index === activePage
                    ? "bg-primary text-white"
                    : "bg-secondary text-black"
                } mx-1`}
                onClick={() => goToPage(startPage)}
              >
                {startPage + index}
              </button>
            ))}
            <button
              className={`px-3 py-1 rounded-md ml-2 ${
                activePage >= totalPages
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-secondary text-black"
              }`}
              onClick={nextPage}
              disabled={activePage >= totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-full max-w-[400px] md:w-[300px] mt-8 md:mt-0 lg:w-[25%]  h-fit  px-3">
          <div className="border w-full flex items-center rounded-md px-3">
            <input
              type="text"
              name=""
              id=""
              className="flex-1 py-3 border-none outline-none"
            />
            <CiSearch />
          </div>
          <h3 className="my-5 font-semibold">Categories</h3>

          <ul className="">
            {categoryPostCounts.map((category) => (
              <li
                key={category.category}
                className="flex  text-tertiary justify-between py-2"
              >
                <span className="capitalize">{category.category}</span>
                <span>{category.postCount}</span>
              </li>
            ))}
          </ul>
          <h3 className="my-5 font-semibold">Recent Posts</h3>
          <div className="w-full">
            {recentPosts.map((post, index) => (
              <div key={index} className="mb-4 flex w-full items-start gap-3">
                <img
                  src={`https://res.cloudinary.com/${cloudName}/image/upload/${post.img}`}
                  alt={post.title}
                  className="w-14 rounded-md h-[50px] "
                />
                <div>
                  <h4 className="text-sm font-medium">{post.title}</h4>
                  <p className="text-xs mt-3 text-gray-500 flex  items-center">
                    {post.createdAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Blog;
