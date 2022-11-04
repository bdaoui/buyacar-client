import React from "react";
import CarSidebarDashboard from "./CarSidebarDashboard";
import ContactSidebarDashboard from "./ContactSidebarDashboard";
import TestimonialSidebarDashboard from "./TestimonialSidebarDashboard";

const DashboardSidebar = ({
  handleShowAside,
  cars,
  testimonials,
  contact,
  contentAside,
}) => {
  return (
    <div className="pb-30">
      {contentAside === "Cars" && (
        <CarSidebarDashboard 
          handleShowAside={handleShowAside} 
          cars={cars} />
      )}

      {contentAside === "Testimonial" && (
        <TestimonialSidebarDashboard
          handleShowAside={handleShowAside}
          testimonials={testimonials}
        />
      )}

      {contentAside === "Messages" && (
        <ContactSidebarDashboard
          handleShowAside={handleShowAside}
          contact={contact}
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
