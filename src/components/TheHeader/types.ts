import type { Tab } from "../../types";

export default interface TheHeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}