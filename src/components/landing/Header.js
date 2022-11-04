import React from "react";
import bg from "../../assets/p_pVF.png";

const Header = () => {
  return (
    <div className="h-full">
      <div className=" w-full h-1/4 md:h-full px-3 md:px-0">
        <img src={bg} alt="logo" className="mt-20" />
        <div className="flex flex-col justify-center w-full md:w-3/4 m-auto h-screen text-center text-white">
          <div className="rounded-2xl p-2 h-2/4 flex flex-col justify-center">
            <h1 className="p-2 text-base sm:text-xl md:text-5xl font-bold">
              Welcome to P&P Exclusive Cars
            </h1>
            <h4 className="p-2 text-sm sm:text-base md:text-xl lg:text-2xl my-5">
              We provide cars of the highest quality so do not hesitate to get
              in touch and book a viewing now
            </h4>
            <p className="p-2 text-[0.6rem] sm:text-sm md:text-xl lg:text-lg">
              fringilla ut morbi tincidunt augue interdum velit euismod in
              pellentesque massa placerat duis ultricies lacus sed turpis
              tincidunt id aliquet risus feugiat in ante metus dictum at tempor
              commodo ullamcorper a lacus vestibulum sed arcu non odio euismod
              lacinia at quis risus sed vulputate odio ut enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat velit scelerisque in
              dictum non consectetur a erat nam at lectus urna duis convallis
              convallis tellus id interdum velit laoreet id donec ultrices
              tincidunt arcu non sodales neque sodales ut etiam sit amet nisl
              purus in mollis nunc sed id semper risus in hendrerit gravida
              rutrum quisque non
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
