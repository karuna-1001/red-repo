import type { Tab } from "../../types";

export default interface TheHeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  languageValue: string;
  setLanguageValue: (value: string) => void;
  filterTrendingRepos: () => void;
}
