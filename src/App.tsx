import { useEffect, useState } from "react";
import type { Repo, Tab } from "./types";
import TheHeader from "./components/TheHeader";
import { gitHubSearchUrl } from "./utils";
import RepoList from "./components/RepoList";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<Tab>("liked");
  const [languageValue, setLanguageValue] = useState<string>("");

  const [trendingRepos, setTrendingRepos] = useState<Repo[]>([]);
  const [likedRepos, setLikedRepos] = useState<Repo[]>([]);
  const [currentRepos, setCurrentRepos] = useState<Repo[]>([]);

  const getTrendingRepos = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(gitHubSearchUrl(languageValue));
      const { items } = await response.json();
      setTrendingRepos(
        items.map(
          ({id, name, description,html_url: url,stargazers_count: stars,language,}: any) => 
            ({ id, name, description, url, stars, language}),
        ),
      );
    } catch (err) {
      console.log("error", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const isLikedRepo = (repoId: number): boolean => {
    return likedRepos.some((repo) => repo.id === repoId);
  };

  const toggleLike = (repo: Repo) => {
    if (isLikedRepo(repo.id)) {
        setLikedRepos((prevRepos) => prevRepos.filter((prevRepo) => prevRepo.id !== repo.id));
    } else {
        setLikedRepos((prevRepos) => [...prevRepos, repo]);
    }
    
  };

  const filterTrendingRepos = () => {
    setActiveTab("trending");
    getTrendingRepos();
  };

  useEffect(() => {
    if (likedRepos.length > 0) {
      localStorage.setItem("likedRepos", JSON.stringify(likedRepos));
    }
  }, [likedRepos]);

  useEffect(() => {
    setCurrentRepos(activeTab === "liked" ? likedRepos : trendingRepos);
  }, [activeTab, likedRepos, trendingRepos]);

  useEffect(() => {
    const storedRepos = localStorage.getItem("likedRepos");
    storedRepos && storedRepos.length > 0
      ? setLikedRepos(() => JSON.parse(storedRepos))
      : [];
    getTrendingRepos();
  }, []);

  return (
    <div className="shadow-x1-20 mx-auto min-h-screen max-w-5xl p-6 text-center">
      {isLoading && (
        <div className="animate-spin text-4xl leading-none text-red-700">⟳</div>
      )}
      {isError && (
        <div className="mb-6 w-full animate-pulse bg-red-500 py-2 text-center text-red-50">
          ⚠ Somthing went wrong. Please try again later.
        </div>
      )}
      <TheHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        languageValue={languageValue}
        setLanguageValue={setLanguageValue}
        filterTrendingRepos={filterTrendingRepos}
      />
      <RepoList
          trendingRepos={currentRepos}
           activeTab={activeTab}
           toggleLike={toggleLike}
           isLikedRepo={isLikedRepo}
        />
    </div>
  );
};

export default App;
