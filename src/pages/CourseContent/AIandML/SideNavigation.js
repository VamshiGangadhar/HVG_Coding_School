import React from "react";

const SideNavigation = ({ topics, handleTopicChange }) => {
  return (
    <div className="side-navigation">
      <ul>
        {Object.keys(topics).map((topic) => (
          <li
            key={topic}
            className="topic-title"
            onClick={() => handleTopicChange(topic)}
          >
            {topics[topic].title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
