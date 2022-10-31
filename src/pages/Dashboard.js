import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCarPost from "../components/NewCarPost";
import EditCarPost from "../components/EditCarPost";
import DashboardSidebar from "../components/DashboardSidebar";

const Dashboard = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [selected, setSelected] = useState("");

  const [selectedId, setSelectedId] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  const [visible, setVisible] = useState("flex");

  // Retreive Data

  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  // Show and Hide based on vector click (+ and x)
  // Handle New Car and Edit visibility

  const handleShowAside = async (e, choice, id) => {
    // Reset Default Value
    await setSelected("");

    choice === "New Post" ? setSelected("New Post") : setVisible("hidden");
    choice === "Edit" ? setSelected("Edit") : setVisible("hidden");

    setSelectedId(id);

    const chosenCar = cars.filter((car) => car._id === id);
    setSelectedCar(chosenCar);

    setVisible("hidden");
  };

  const handleCloseSecondSection = (e) => {
    setSelected("");
    setVisible("flex");
  };

  return (
    <div className="h-full">
      <h1 className="text-center p-5 text-2xl text-gold font-bold">
        Tableau de Bord
      </h1>

      <div className="flex">
        <aside
          className={`w-5/6 md:w-2/6 mx-auto lg:m-0 lg:w-1/3 h-full border-black border-t-2 px-4 overflow-y-scroll ${visible} md:flex flex-col`}
        >
          <DashboardSidebar handleShowAside={handleShowAside} cars={cars}/> 
        </aside>

        <section
          className={`border-black border-t-2 m-auto md:m-0 text-black ${
            visible === "hidden" ? "flex" : "hidden"
          } w-5/6 md:w-4/6 md:flex justify-center `}
        >
          {selected === "New Post" && (
            <NewCarPost
              handleCloseSecondSection={handleCloseSecondSection}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}

          {/* Edit Section */}

          {selected === "Edit" && (
            <EditCarPost
              handleCloseSecondSection={handleCloseSecondSection}
              selectedId={selectedId}
              refresh={refresh}
              setRefresh={setRefresh}
              cars={cars}
            />
          )}
        </section>
      </div>
    </div>
  );
};
export default Dashboard;
