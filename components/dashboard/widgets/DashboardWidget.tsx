import React from "react";

const DashboardWidget = ({ text, text_value }: any) => {
  return (
    <div className="flex place-items-center justify-center border gap-4 rounded-lg min-w-58 h-30">
      <div>
        <div className="flex flex-col">
          <span>{text}</span>
          <span>{text_value}</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardWidget;
