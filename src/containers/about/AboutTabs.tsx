import { Box, Tab, Tabs as BaseTabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { HardSkills } from "./HardSkills";
import { SoftSkills } from "./SoftSkills";
import { Projects } from "./Projects";

const tabItems = [
  {
    label: "Hard skills",
    children: <HardSkills />
  },
  {
    label: "Side Projects",
    children: <Projects />
  },
  { label: "Soft skills", children: <SoftSkills /> }
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  if (value === index) {
    return (
      <Box role="tabpanel" sx={{ py: 3 }}>
        {children}
      </Box>
    );
  }

  return null;
}

export function AboutTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <BaseTabs value={value} onChange={handleChange} aria-label="tab navigator" sx={{ mb: 5, display: "block" }}>
        {tabItems.map(({ label }, index) => (
          <Tab label={label} {...a11yProps(index)} key={label} />
        ))}
      </BaseTabs>
      {tabItems.map(({ children, label }, index) => (
        <TabPanel value={value} index={index} key={label}>
          {children}
        </TabPanel>
      ))}
    </Box>
  );
}
