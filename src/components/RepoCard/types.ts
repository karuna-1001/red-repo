import type { Repo } from "../../types";

export default interface RepoCardProps {
  repo: Repo;
  toggleLike: (repo: Repo) => void;
  isLikedRepo: (repoId: number) => boolean;
}