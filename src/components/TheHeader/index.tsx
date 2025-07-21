import type TheHeaderProps from "./types";
const TheHeader = ({activeTab,
  setActiveTab,}: TheHeaderProps) => {
  return (
    <div data-role="the-header" className="mt-10 mb-5">
      <h1 className="my-8 text-5xl text-red-700">List of Repos</h1>
      <div className="grid gap-4 text-left md:grid-cols-2">
        <div className="">
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
      </div>
    </div>
  );
};

export default TheHeader;
