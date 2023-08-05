import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCars from "./CategoryCars";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [allCars, setAllCars] = useState([]);
  console.log(tabIndex);

  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCars(data);
      });
  }, []);

  const sportsCar = allCars.filter((cars) => cars.category === "Sports Car");
  const truck = allCars.filter((cars) => cars.category === "Truck");
  const car = allCars.filter((cars) => cars.category === "Regular Car");
  const fireTruck = allCars.filter((cars) => cars.category === "Fire Truck");
  const policeCar = allCars.filter((cars) => cars.category === "Police Car");

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 lg:pt-20">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">Toy Categories</h2>
        <p className="text-lg mt-2">
          Choose your favorite toy according to category..
        </p>
        <p>{allCars.length}</p>
      </div>

      {/* this tab will hold entire tab section */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* tablist created tab title */}
        <TabList className="flex w-2/12 mx-auto gap-4">
          <Tab
            className={`tab tab-bordered ${tabIndex == 0 ? "tab-active" : ""}`}>
            Race cars
          </Tab>
          <Tab
            className={`tab tab-bordered ${tabIndex == 1 ? "tab-active" : ""}`}>
            Fire trucks
          </Tab>
        </TabList>

        {/* tabPanel shows the data inside each panel */}
        <TabPanel>
          {sportsCar.map((car) => (
            <CategoryCars key={car.id} car={car}></CategoryCars>
          ))}
        </TabPanel>
        <TabPanel>
          {truck.map((car) => (
            <CategoryCars key={car.id} car={car}></CategoryCars>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
