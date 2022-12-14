import logo from "../images/image_logo.png"
export default function Header() {
  return (
        <div className="h-18 bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-8">
            <div className="flex flex-row">
                <div className="basis-1/8 text-white ml-3 my-1" >
                    <img src={logo} alt="" className="logo mr-3" />
                </div>
                <div className="basis-1/4 text-white mt-3">
                <span className="text-2xl">Meme Generator</span>
                </div>
                <div className="basis-4/5 text-white text-right mr-3 mt-3">
                    <span className="text-lg">React and Tailwind</span>
                </div>
            </div>
        </div>
  );
}
