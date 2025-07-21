import type TheHeaderProps from "./types";
const TheHeader = ({activeTab,
  setActiveTab,
  languageValue,
  setLanguageValue,}: TheHeaderProps) => {
  return (
    <div data-role="the-header" className="mt-10 mb-5">
      <h1 className="my-8 text-5xl text-red-700">List of Repos</h1>
      <div className="grid gap-4 text-left md:grid-cols-2">
        <div>
          <button
            onClick={() => setActiveTab("liked")}
            className={`ml-2 cursor-pointer rounded-md px-4 py-2 ${activeTab === "liked" ? "bg-red-700 text-red-100" : "bg-red-100 text-red-700"}`}
          >
            Liked Repos
          </button>
          <button
            onClick={() => setActiveTab("trending")}
            className={`ml-2 cursor-pointer rounded-md px-4 py-2 ${activeTab === "trending" ? "bg-red-700 text-red-100" : "bg-red-100 text-red-700"}`}
          >
            Trending Repos
          </button>
        </div>
        <div>
          <input
            type="text"
            id="language"
            value={languageValue}
            onChange={(ev) => setLanguageValue(ev.target.value)}
            className="ml-2 rounded-lg border border-gray-300 bg-gray-50 p-2  text-gray-900 focus:border-red-500 focus:ring-red-500"
            placeholder="Language name to filter"
          />
          <button
            className={`ml-2 cursor-pointer rounded-md border border-red-400 bg-gray-50 p-2  text-red-700 focus:text-red-500`}
          >
            Fetch Repos
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
