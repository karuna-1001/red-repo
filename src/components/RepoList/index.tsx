import RepoCard from "../RepoCard";
import type RepoListProps from "./types";

const RepoList=({trendingRepos,activeTab,toggleLike,isLikedRepo}:RepoListProps)=>{
  return (
    <div data-role="repo-list">
        <div className="mb-6 w-full text-center text-gray-500">
        {activeTab === "liked" && trendingRepos.length === 0
          ? `No repos added to list. please chek the trending tab and add the repos to this list.`
          : `you have ${trendingRepos.length} repos in ${activeTab} list`}
      </div>
      <div className="grid gap-4 text-left md:grid-cols-2">
        {trendingRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            toggleLike={toggleLike}
            isLikedRepo={isLikedRepo}
          />
        ))}
      </div>
    </div>
  );  
}
export default RepoList