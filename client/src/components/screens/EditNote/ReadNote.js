import React, { useEffect, useState } from "react";
import axios from "axios";
import "./readNote.css";

const ReadNote = ({ match }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);
      setTitle(data.title);
      setContent(data.content);
    };

    fetching();
  }, [match.params.id]);
  return (
    <div className="readContainer">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ReadNote;
