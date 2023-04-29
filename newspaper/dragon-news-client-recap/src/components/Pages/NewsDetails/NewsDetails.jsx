import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorCard from "../../EditorCard/EditorCard";

const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news);
    const {category_id,image_url,title,details} = news
  return (
    <div>
      <div className="border p-5 rounded-xl">
        <img className="max-w-full w-full" src={image_url} alt="" />
        <h1 className="py-4 text-xl font-bold">{title}</h1>
        <p className="text-sm mb-10">  
           { details}
        </p>
        <Link to={`/news/${category_id}`}>
        <button className="flex items-center gap-2 text-white bg-red-500 px-6 py-2"><FaArrowLeft></FaArrowLeft> <span>All news in this category</span></button>
        </Link>
      </div>

      <div className="flex gap-5 mt-8">
        <EditorCard></EditorCard>
      </div>
    </div>
  );
};

export default NewsDetails;
