import React from 'react';

const SideNavigationBar = ({ subTopics }) => {
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      {subTopics.map((topic, index) => (
        <div key={index}>{topic}</div>
      ))}
    </div>
  );
};

export default SideNavigationBar;