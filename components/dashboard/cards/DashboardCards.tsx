import React from "react";

const DashboardCards = ({ children, height, width, flex }: any) => {
  return (
    <div className={` ${height} ${width} ${flex} border rounded-lg p-4 `}>
      {children}
    </div>
  );
};

export default DashboardCards;
