import React from "react";

const ContentSection = ({ activeTopic }) => {
  return (
    <div className="content-section">
      <h1>{activeTopic.title}</h1>
      {activeTopic.content}
    </div>
  );
};

export default ContentSection;
