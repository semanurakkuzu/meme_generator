import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://i.kym-cdn.com/entries/icons/original/000/041/399/cover1.jpg",
  });
  const [allMemes, setAllMemes] = React.useState();

  React.useEffect(async() => {
    const response = await fetch("https://api.imgflip.com/get_memes")
      const data = await response.json()
       setAllMemes(data.data.memes)
  }, [])
  

  function getMemeImage() {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
      <div className="flex justify-center relative  text-wrap">
        <div>
          <img src={meme.randomImage} className="memeImages" />
        </div>
        <div className="top-text">
          <p className="text-6xl text-black text-center stroke">{meme.topText} </p>
        </div>
        <div className="bottom-text">
          <p className="text-6xl text-black text-center stroke">{meme.bottomText} </p>
        </div>
      </div>
    </div>
  );
}
