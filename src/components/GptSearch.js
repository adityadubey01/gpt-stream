import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background_Img } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Background_Img} alt="Background_Img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
