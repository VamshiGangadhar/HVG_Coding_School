import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const AddArticle = () => {
  const [text, setText] = useState("# Start writing here");

  return (
    <div data-color-mode="light">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default AddArticle;