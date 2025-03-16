import React from "react";

const Post = ({ post }) => {
  const { title, body } = post;
  console.log(title);
  console.log(body);
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-red-400">{title}</h2>
        <p className="text-xl font-medium text-cyan-400">{body}</p>
      </div>
    </>
  );
};

export default Post;
