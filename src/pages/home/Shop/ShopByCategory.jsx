import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCars(data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 lg:pt-20">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">Toy Categories</h2>
        <p className="text-lg mt-2">
          Choose your favorite toy according to category..
        </p>
        <p>{allCars.length}</p>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex w-2/12 mx-auto gap-4">
          <Tab className="tab tab-bordered tab-active">Race cars</Tab>
          <Tab className="tab tab-bordered">Fire trucks</Tab>
        </TabList>
        <TabPanel>
          <h2>i am title 1.</h2>
        </TabPanel>
        <TabPanel>
          <h2>I am title 2.</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
