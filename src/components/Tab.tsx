import React from 'react'
import { Tab } from 'semantic-ui-react'
import ItemCard from './ItemCard'
const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><div><ItemCard/></div></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic