import type { Repo, Tab } from "../../types";

export default interface RepoListProps {
  trendingRepos: Repo[];
  activeTab: Tab;
}