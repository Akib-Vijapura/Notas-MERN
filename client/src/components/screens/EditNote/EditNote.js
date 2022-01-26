import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import "./editNote.css";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNoteAction } from "../../../actions/notesActions";

const TOOLBAR = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ direction: "rtl" }],
  [{ align: [] }],
  ["link"],
  [{ indent: "-1" }, { indent: "+1" }],
  ["image", "video", "blockquote", "code-block"],
  ["clean"],
];

const CreateNotes = ({ match, history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");




  const dispatch = useDispatch();
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  useEffect(() => {
    const fetching = async () => {
        const { data } = await axios.get(`/api/notes/${match.params.id}`);
        // console.log(data);
        setTitle(data.title);
        setContent(data.content);
    };

    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setTitle("");
    setContent("");
  };
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(match.params.id, title, content));
    if (!title || !content) return;

    resetHandler();
    history.push("/");
  };

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR } });

    return () => {
      wrapperRef.innerHTML = "";
    };
  }, []);
  return (
    <form onSubmit={updateHandler}>
      <div>
        <input
          className="font-bold text-xl  mb-3 ml-3    px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          type="text"
          required
          value={title}
          id="password"
          autoComplete="true"
          placeholder="Enter Your Title Here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          style={{ marginLeft: "900px" }}
          className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Update Note
        </button>
      </div>
      <div
        className="container"
        value={content}
        placeholder="Enter the content"
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        ref={wrapperRef}
      ></div>
    </form>
  );
};

export default CreateNotes;
