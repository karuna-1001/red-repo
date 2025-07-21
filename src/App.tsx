import { useEffect, useState } from "react";
import type { Repo } from "./types";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [trendingRepos, setTrendingRepos] = useState<Repo[]>([]);

  const getTrendingRepos = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(
        "https://api.github.com/search/repositories?q=created:2017-01-10&sort=stars&order=desc",
      );
      const { items } = await response.json();
      setTrendingRepos(
        items.map(
          ({id, name, description,html_url: url,stargazers_count: stars,language,}: any) => 
            ({ id, name, description, url, stars, language, liked: false, }),
        ),
      );
    } catch (err) {
      console.log("error", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
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
      <div>
        <h2 className="text-2xl">Repo List</h2>
        {trendingRepos.map((repo)=>(<p>{repo.id} - {repo.name} - {repo.stars} - {repo.language}</p>))}
      </div>
    </div>
  );
};

export default App;
