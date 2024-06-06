import React from "react";
import "./CodeBlock.css"; // Importing the CSS file for styling the code block

const CodeBlock = ({ title, code }) => {
  return (
    <div className="code-block">
      <h4>{title}</h4>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
