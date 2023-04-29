import moment from "moment";
import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaBeer, FaBookmark, FaEye, FaRegStar, FaShare, FaStar } from 'react-icons/fa';


const News = ({ newsItem }) => {
  const { _id, author, details, title, image_url, rating, total_view } =
    newsItem;
  return (
    <div className="border rounded-xl">
      <div className="flex py-4 px-5 bg-gray-200 justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author.img}
            alt=""
          />
          <div>
            <h3 className="text-lg font-semibold">{author.name}</h3>
            <p>
              <small>{moment(author.published_date).format("YYYY-MM-D")}</small>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button><FaBookmark></FaBookmark></button>
          <button><FaShare></FaShare></button>
        </div>
      </div>
      <div className="px-5">
        <h1 className="py-4 text-xl font-bold">{title}</h1>
        <img className="max-w-full w-full" src={image_url} alt="" />
        <p className="text-sm py-5">
          {details.length > 300 ? (
            <>
              {details.slice(0, 300)}...
              <Link
                className="text-orange-500 font-medium"
                to={`/newsDetails/${_id}`}
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <div className="flex items-center p-5 border-t-2 justify-between">
          <div className="flex items-center gap-2">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={
              <FaRegStar className="text-yellow-400"></FaRegStar>
            }
            placeholderSymbol={
                <FaStar className="text-yellow-400"></FaStar>
            }
            fullSymbol={
                <FaStar></FaStar>
            }
          />
          <span>{rating.number}</span>
          </div>
          <span className="flex items-center gap-3 text-gray-500"><FaEye></FaEye> {total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
