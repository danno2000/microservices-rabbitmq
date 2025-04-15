import { FC, ReactNode, useMemo, useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';

type TabbedPaperProps = {
  children?: ReactNode | ((selectedTab: number) => ReactNode);
  panels?: ReadonlyArray<ReactNode>;
  tabs: ReadonlyArray<string>;
};

export const TabbedPaper: FC<TabbedPaperProps> = ({
  children,
  panels,
  tabs,
}) => {
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
    <Paper elevation={2} sx={{ p: 3 }}>
      <Tabs value={selectedTab} onChange={handleTabClick}>
        {tabElements}
      </Tabs>

      {resolvedChildren}
    </Paper>
  );
};

export default TabbedPaper;
