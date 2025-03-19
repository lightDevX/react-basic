import React from "react";

const Bookmarks = ({ bookMarks }) => {
  return (
    <div>
      {/* Sidebar / Aside */}
      <aside className="my-6 h-full rounded-2xl border border-cyan-400 bg-gray-100 px-6 pt-6 shadow-lg">
        <h2 className="mb-3 text-lg font-semibold">Related Articles</h2>
        <ul className="space-y-3">
          {bookMarks.map((item, idx) => (
            <li key={idx} className="rounded-lg bg-white p-3 shadow-md">
              📌 <span className="mr-3 font-bold">{item.author_name}</span>
              <span className="font-medium text-teal-800">
                {item.post_topic}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Bookmarks;
