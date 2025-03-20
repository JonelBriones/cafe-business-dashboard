import React from "react";

const TopSellingItems = () => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex justify-between ">
        <span>Top Selling</span>
        <div>
          <span>sort by</span>
          <span>export</span>
        </div>
      </div>
      <div className="flex-1">TopSellingItems</div>
    </div>
  );
};

export default TopSellingItems;
