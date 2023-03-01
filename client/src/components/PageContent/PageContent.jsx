import React from "react";

const PageContent = (props) => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default PageContent;
