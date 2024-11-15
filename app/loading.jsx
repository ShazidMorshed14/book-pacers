import React from "react";
import { Ripple } from "react-css-spinners";

const Loading = () => {
  return (
    <>
      <section className="relative z-10 flex h-[90vh] items-center justify-center overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container flex item-center justify-center">
          <Ripple color="#4A6CF7" size={100} thickness={5} />
        </div>
      </section>
    </>
  );
};

export default Loading;
