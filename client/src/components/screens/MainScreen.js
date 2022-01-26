import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      {title && (
        <>
          <h1>{title}</h1>
          <hr />
        </>
      )}
      {children}
    </div>
  );
};

export default MainScreen;
