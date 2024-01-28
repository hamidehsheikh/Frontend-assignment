export interface Tab {
  id: number;
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

export default TabsProps;
