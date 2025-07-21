import RepoCard from "../RepoCard";
import type RepoListProps from "./types";

const RepoList=({trendingRepos}:RepoListProps)=>{
  return (
    <div data-role="repo-list">
      <div className="grid gap-4 text-left md:grid-cols-2">
        {trendingRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );  
}
export default RepoList