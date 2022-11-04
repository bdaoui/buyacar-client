import React from "react";

const TestimonialSidebarDashboard = ({ handleShowAside, testimonials }) => {
  return (
    <div className="pb-30">
      <div className="flex gap-2 justify-center mt-5">
        <h1 className="font-bold text-gold text-xl ">Temoniages</h1>
        <svg
          className="w-6 h-6 cursor-pointer fill-gold mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => handleShowAside(e, "New Testimonial")}
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {testimonials.map((item) => {
        return (
          <div
            key={item._id}
            className="py-2 lg:p-4 border-b-2 border-black/90 flex flex-col text-white gap-2 md:gap-5"
          >
            <section className="flex justify-between items-center">
              <h1>{item.author}</h1>

              <svg
                onClick={(e) =>
                  handleShowAside(e, "Edit Testimonial", item?._id)
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4  cursor-pointer text-gold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </section>
            <section>
              <p>{item?.body?.substring(0, 3) + "..."}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialSidebarDashboard;
