import { TabView, TabPanel } from "primereact/tabview";

import React, { useState } from "react";
import Addandsearchadmin from "./Addandsearchadmin";

import Header from "./Header";
import Searchandgetall from "./Searchandgetall";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="card">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="Admin">
            <Addandsearchadmin />
          </TabPanel>
          <TabPanel header="Agent User">
            <Searchandgetall />
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}

export default Navbar;
