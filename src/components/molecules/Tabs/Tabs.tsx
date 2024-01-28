import React, { useState } from "react";
import TabsProps from "./Tabs.types";
import classes from "./Tabs.module.scss";
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={classes.wrapper}>
      <div className="flex border-b border-gray-200 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "border-cc-dark-blue-secondary"
                : "border-white"
            } py-2 px-4 inline-flex items-center text-base font-light border-b-4 focus:border-cc-dark-blue-secondary focus:text-cc-dark-blue-secondary focus:bg-transparent`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
