import React from "react";

const ContactSidebarDashboard = ({ handleShowAside, contact }) => {
  return (
    <div>
      <div className="flex gap-2 justify-center mt-5">
        <h1 className="font-bold text-gold text-xl ">Contactez</h1>
      </div>

      {contact.map((item) => {
        return (
          <div
            key={item._id}
            className="py-2 lg:p-4 border-b-2 border-black/90 flex text-white gap-2 md:gap-5 justify-between"
          >
            <section className="flex flex-col">
              <h1 className="text-gold font-medium">
                Name:{" "}
                <span className="text-white">
                  {item?.name} {item?.lastName}
                </span>
              </h1>
              <h1 className="text-gold font-medium">
                Email: <span className="text-white">{item?.email}</span>
              </h1>
              <h1 className="text-gold font-medium">
                Phone: <span className="text-white">{item?.phone}</span>
              </h1>
              <h1 className="text-gold font-medium">
                Subject: <span className="text-white">{item?.subject}</span>
              </h1>
            </section>
            {item.status === false && (
              <div className="rounded-full h-3 w-3 mt-10 bg-red-600"></div>
            )}
            {item.status === true && (
              <div className="rounded-full h-3 w-3 mt-10 bg-green-600"></div>
            )}

            <svg
              onClick={(e) => handleShowAside(e, "Edit Contact", item?._id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer text-gold mt-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default ContactSidebarDashboard;
