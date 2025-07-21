import type RepoCardProps from "./types";
const RepoCard =({ repo }: RepoCardProps)=>{return (
    <div
      data-role="repo-card"
      key={repo.id}
      className='min-h-[100px] rounded-sm border p-2 hover:shadow-lg border-gray-300 bg-gray-50 hover:border-gray-400'
    >
      <div className="flex">
        <div className="grow p-2">
          <a
            href={repo.url}
            target="_blank"
            className="cursor-pointer font-bold text-red-700 underline hover:no-underline"
          >
            {repo.name}
          </a>
        </div>

        <button
          className='curson-pointer grow-0 basis-1 text-2xl font-bold hover:text-3xl text-gray-300 px-2 text-center'
        >
          ♥
        </button>
      </div>
      <div className="p-2">
        <p className="mb-4 line-clamp-2 text-sm">
          {repo.description ?? "no description"}
        </p>
        <p className="text-sm">
          Stars: {repo.stars} | language: {repo.language}
        </p>
      </div>
    </div>
  );}
export default RepoCard