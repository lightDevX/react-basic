import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <Blogs handleBookMark={handleBookMark}></Blogs>
          </div>
          <Bookmarks bookMarks={bookMarks}></Bookmarks>
        </div>
      </section>
    </>
  );
}

export default App;
