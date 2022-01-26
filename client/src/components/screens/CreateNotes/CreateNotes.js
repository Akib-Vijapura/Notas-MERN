import React, { useCallback, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./createNotes.css";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../../actions/notesActions";
import ReactMarldown from "react-markdown";

// const TOOLBAR = [
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],
//   [{ font: [] }],
//   [{ list: "ordered" }, { list: "bullet" }],
//   ["bold", "italic", "underline", "strike"],
//   [{ color: [] }, { background: [] }],
//   [{ script: "sub" }, { script: "super" }],
//   [{ direction: "rtl" }],
//   [{ align: [] }],
//   ["link"],
//   [{ indent: "-1" }, { indent: "+1" }],
//   ["image", "video", "blockquote", "code-block"],
//   ["clean"],
// ];

const CreateNotes = ({ history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // console.log(title);

  const dispatch = useDispatch();
  const noteCreate = useSelector((state) => state.noteCreate);
  const { error, note } = noteCreate;

  const resetHandler = () => {
    setTitle("");
    setContent("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    dispatch(createNoteAction(title, content));

    resetHandler();
    history.push("/");
  };

  // const wrapperRef = useCallback((wrapper) => {
  //   if (wrapper == null) return;
  //   wrapper.innerHTML = "";
  //   const editor = document.createElement("div");
  //   wrapper.append(editor);
  //   new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR } });

  //   return () => {
  //     wrapperRef.innerHTML = "";
  //   };
  // }, []);
  return (
    <form onSubmit={submitHandler}>
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
          Create Note
        </button>
      </div>
      <textarea
        className="container"
        value={content}
        placeholder="Enter the content"
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        // ref={wrapperRef}
      ></textarea>
    </form>
  );
};

export default CreateNotes;
