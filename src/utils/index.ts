export const gitHubSearchUrl = (language: string) => {
  const baseGitHubApiUrl = "https://api.github.com/search/repositories";
  const createdFilter = `?q=created:>${dateFiveYearPast()}`;
  const languageFilter = language
    ? `+language:${language.trim().toLowerCase()}`
    : "";
  const sortAndOrder = "&sort=stars&order=desc";
  return baseGitHubApiUrl + createdFilter + languageFilter + sortAndOrder;
};

const dateFiveYearPast = ()=>{
const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year-5}-${month}-${day}`;
}
