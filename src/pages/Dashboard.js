import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCarPost from "../components/NewCarPost";
import EditCarPost from "../components/EditCarPost";
import DashboardSidebar from "../components/DashboardSidebar";
import EditTestimonial from "../components/EditTestimonial";
import NewTestimonialPost from "../components/NewTestimonialPost";
import EditContact from "../components/EditContact";

const Dashboard = () => {
  const server = "http://localhost:5005";

  const [cars, setCars] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contact, setContact] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [selected, setSelected] = useState("");

  const [selectedId, setSelectedId] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const [visible, setVisible] = useState("flex");
  
  
  const [contentAside, setContentAside] = useState("Cars");

  // Retreive Data
  useEffect(() => {
    axios
      .get(`${server}/api/cars`)
      .then((response) => setCars(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    axios
      .get(`${server}/api/testimonial`)
      .then((response) => setTestimonials(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    axios
      .get(`${server}/api/contact`)
      .then((response) => setContact(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  // Show and Hide based on vector click (+ and x)
  // Handle New Car and Edit visibility

  const handleShowAside = async (e, choice, id) => {
    // Reset Default Value
    await setSelected("");

    choice === "New Post" ? setSelected("New Post") : setVisible("hidden");
    choice === "New Testimonial" ? setSelected("New Testimonial") : setVisible("hidden");
    choice === "Edit" ? setSelected("Edit") : setVisible("hidden");
    choice === "Edit Testimonial" ? setSelected("Edit Testimonial") : setVisible("hidden");
    choice === "Edit Contact" ? setSelected("Edit Contact") : setVisible("hidden");

    
    setSelectedId(id);
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

      <section className="flex gap-5 justify-center md:justify-start m-2">
        <h2 className=" text-2xl text-gold font-bold cursor-pointer border-gold border-2 p-2 rounded-lg" onClick={e => setContentAside("Cars")}>Voitures</h2>
        <h2 className=" text-2xl text-gold font-bold cursor-pointer border-gold border-2 p-2 rounded-lg" onClick={e => setContentAside("Testimonial")}>Temoniages</h2>
        <h2 className=" text-2xl text-gold font-bold cursor-pointer border-gold border-2 p-2 rounded-lg" onClick={e => setContentAside("Messages")}>Contactes</h2>

      </section>

      <div className="flex">
        <aside
          className={`w-5/6 md:w-2/6 mx-auto lg:m-0 lg:w-1/3 h-full border-black border-t-2 px-4 overflow-y-scroll ${visible} md:flex flex-col`}
        >
          <DashboardSidebar 
          handleShowAside={handleShowAside} 
          cars={cars}
          testimonials={testimonials}
          contact={contact}
          contentAside ={contentAside}

          /> 
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

          {selected === "New Testimonial" && (
            <NewTestimonialPost
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

          {selected === "Edit Testimonial" && (
            <EditTestimonial 
              handleCloseSecondSection={handleCloseSecondSection}
              refresh={refresh}
              setRefresh={setRefresh}
              selectedId={selectedId}
              testimonials={testimonials}
              
            />
          )}

          {selected === "Edit Contact" && (
            <EditContact
              handleCloseSecondSection={handleCloseSecondSection}
              refresh={refresh}
              setRefresh={setRefresh}
              selectedId={selectedId}
              contact={contact}
            />
          )}

        </section>
      </div>
    </div>
  );
};
export default Dashboard;
