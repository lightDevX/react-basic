import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-4 flex flex-col items-start justify-start space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
