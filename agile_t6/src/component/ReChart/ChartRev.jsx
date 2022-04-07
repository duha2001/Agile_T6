import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChartByYear from "./ChartByYear";
import ChartByMonth from "./ChartByMonth";
import ChartByDay from "./ChartByDay";
const ChartRev = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Year</Tab>
          <Tab>Month</Tab>
          <Tab>Day</Tab>
        </TabList>
        <TabPanel>
          <ChartByYear />
        </TabPanel>
        <TabPanel>
          <ChartByMonth />
        </TabPanel>
        <TabPanel>
          <ChartByDay />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ChartRev;
