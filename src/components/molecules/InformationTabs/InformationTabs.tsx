import Table from "../Table";
import Tabs from "../Tabs";
import { Tab } from "../Tabs/Tabs.types";
import { InformationTabsProps } from "./InformationTabs.types";

const TabGroup = (props: InformationTabsProps) => {
  const { information = [] } = props;
  let tabs: Tab[] = [];
  information.map((information, index) => {
    tabs.push({
      id: index,
      title: information.title,
      content: <Table sectionId={index} data={information.items} />,
    });
  });

  return (
    <div className="p-4 px-8 pb-8 pt-1">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabGroup;
