import logo from "../images/image_logo.png"
export default function Header() {
  return (
    <div className="container mx-auto">
        <div className="h-18 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div class="flex flex-row">
                <div className="basis-1/8 text-white ml-3 my-1" >
                    <img src={logo} alt="" className="logo mr-3" />
                </div>
                <div className="basis-1/6 text-white mt-2">
                <span className="text-2xl">Meme Generator</span>
                </div>
                <div className="basis-4/5 text-white text-right mr-3 mt-2">
                    <span className="text-lg">React and Tailwind</span>
                </div>
            </div>
        </div>
    </div>
  );
}
