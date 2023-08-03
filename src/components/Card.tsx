import React from "react";
import bgCard from "../assets/images/bg-pattern-card.svg";
import profilePicture from "../assets/images/image-victor.jpg";
const Card = () => {
  return (
    <div className="flex flex-col rounded-xl items-center justify-center shadow-xl">
      <img src={bgCard} alt="" className="rounded-t-xl w-full h-full" />
      <div className="bg-white rounded-b-xl w-full h-full">
        <div className="flex flex-col justify-center items-center mb-7">
          <img
            src={profilePicture}
            alt=""
            className="rounded-full border-4 border-white w-20 h-20 -mt-10"
          />
          <div className="flex gap-4">
            <h1 className="font-semibold">Victor Crest</h1>
            <span className="text-gray-500">26</span>
          </div>
          <h2 className="text-gray-500">London</h2>
        </div>
        <div className="w-full border-t-2 flex items-center justify-around p-5">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold">80K</h3>
            <h3>Followers</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold">803K</h3>
            <h3>Likes</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold">1.4K</h3>
            <h3>Photos</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
