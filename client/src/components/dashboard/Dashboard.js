import React from "react";
import { Tab, Header } from 'semantic-ui-react'
// import Trans from "./Trans";
import SidebarMenu from './SidebarMenu'
import TransSearch from "../search/TransSearch";

const Dashboard = () => {
  return (
    <>
      <Header>Dashboard</Header>
      {/* <TransSearch /> */}
      <SidebarMenu >
      <Tab panes={panes} />
      </SidebarMenu >
    </>
  );
};

export default Dashboard;


const panes = [
  { menuItem: 'Transactions', render: () => <Tab.Pane><TransSearch/></Tab.Pane> },
  { menuItem: 'Report', render: () => <Tab.Pane>Reports tab: under construction</Tab.Pane> },
  { menuItem: 'Customers', render: () => <Tab.Pane>Customers tab: : under construction</Tab.Pane> },
]
