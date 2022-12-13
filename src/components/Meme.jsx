import React from "react";
import memesData from "../MemesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://i.kym-cdn.com/entries/icons/original/000/041/399/cover1.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }
  
  return (
    <div className="bg-slate-200 pt-8">
      <div className="flex flex-row mb-5">
        <div className="w-2/4 flex justify-center">
          <input
            type="text"
            name="topText"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-9/12 rounded-md sm:text-sm focus:ring-1"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div className="w-2/4 flex justify-center">
          <input
            type="text"
            name="bottomText"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-9/12 rounded-md sm:text-sm focus:ring-1"
            placeholder="Bottom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mb-3">
        <button
          className="rounded-none h-18 w-4/5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-5 text-white px-2 py-2"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div className="flex justify-center memeImages" style={{backgroundImage: `url(${meme.randomImage})`,}} >
        <div className="top-text bg-white ">
          <p className="text-6xl text-black text-center">{meme.topText} </p>
        </div>
        <div className="bottom-text bg-white ">
          <p className="text-6xl text-black text-center">{meme.bottomText} </p>
          
        </div>
      </div>
    </div>
  );
}
