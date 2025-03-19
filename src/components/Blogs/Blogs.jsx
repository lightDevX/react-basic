import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch("blogs.json");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
