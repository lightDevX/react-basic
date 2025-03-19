import React from "react";

import ButtonBM from "../Button/ButtonBM";

const Blog = ({ blog, handleBookMark }) => {
  const { post_topic, author_name, cover_image, description, post_time } = blog;

  return (
    <div>
      <div className="grid grid-cols-3">
        {/* Main Blog Content */}
        <div className="col-span-3 my-6 mr-5 space-y-2 rounded-2xl border border-cyan-400 p-4">
          <div>
            <img
              src={cover_image}
              alt="Blog Cover"
              className="w-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold">{author_name}</h3>
          <p className="text-xl font-semibold">{post_topic}</p>
          <p className="text-sm text-gray-500">{post_time}</p>
          <p className="text-gray-700">{description}</p>
          <ButtonBM handleBookMark={() => handleBookMark(blog)}></ButtonBM>
        </div>
      </div>
    </div>
  );
};

export default Blog;
