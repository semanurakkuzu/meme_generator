export default function Meme() {
  return (
    <div className="bg-slate-300 pt-8">
      <div className="flex flex-row mb-5">
        <div className="w-2/4 flex justify-center">
          <input
            type="text"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-9/12 rounded-md sm:text-sm focus:ring-1"
            placeholder=""
          />
        </div>
        <div className="w-2/4 flex justify-center">
          <input
            type="text"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 block w-9/12 rounded-md sm:text-sm focus:ring-1"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mb-3">
        <button class="rounded-none h-18 w-4/5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-5 text-white px-2 py-2">
          Get a new meme image
        </button>
      </div>
    </div>
  );
}
