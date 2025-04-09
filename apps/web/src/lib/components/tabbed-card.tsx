import { FC, ReactNode, useMemo, useState } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import CardContent from '@mui/material/CardContent';

type TabbedCardProps = {
  children?: ReactNode | ((selectedTab: number) => ReactNode);
  panels?: ReadonlyArray<ReactNode>;
  tabs: ReadonlyArray<string>;
};

export const TabbedCard: FC<TabbedCardProps> = ({ children, panels, tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (_event: React.SyntheticEvent, tab: number) => {
    setSelectedTab(tab);
  };

  const tabElements = useMemo(
    () =>
      tabs.map((label, index) => (
        <Tab key={label} label={label} value={index} />
      )),
    [tabs]
  );

  const resolvedChildren = useMemo(() => {
    if (panels) return panels[selectedTab];
    return typeof children === 'function' ? children(selectedTab) : children;
  }, [panels, children, selectedTab]);

  return (
    <Card>
      <Tabs value={selectedTab} onChange={handleTabClick}>
        {tabElements}
      </Tabs>
      <Divider />

      <CardContent>{resolvedChildren}</CardContent>
    </Card>
  );
};

export default TabbedCard;
