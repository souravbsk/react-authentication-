import React from "react";
import { useLoaderData } from "react-router-dom";
import News from "../News/News";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>

      <div className="grid grid-cols-1 gap-7">
        {news.map((newsItem) => (
          <News key={newsItem._id} newsItem={newsItem}></News>
        ))}
      </div>
    </div>
  );
};

export default Home;
