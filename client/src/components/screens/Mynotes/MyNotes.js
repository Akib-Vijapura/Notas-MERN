import { React, useEffect } from "react";
import { Link } from "react-router-dom";
// import MainScreen from "../MainScreen";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../../actions/notesActions";

const MyNotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  // const [notes, setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure ?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  // const fetchNotes = async () => {
  //   const {data} = await axios.get("/api/notes");
  //  setNotes(data);
  // };
  console.log(notes);
  useEffect(() => {
    // fetchNotes();
    dispatch(listNotes());
  }, [dispatch, successCreate, userInfo, successDelete]);

  return (
    <>
      <div className="container mt-10 mb-10 ml-10 ">
        <Link to="/createnote">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Create a New Note
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {error}
        {notes?.reverse().map((note) => (
          <div key={note._id} className=" container mt-10 mb-10 ml-10">
            <div className="  max-w-sm rounded overflow-hidden shadow-lg">
              {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
              <div className=" px-6 py-4">
                <div className="font-bold text-xl mb-2">{note.title}</div>
                <p className="  text-gray-700 text-base h-100 ">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil. */}
                  {/* {note.content} */}
                </p>
                <p className="text-gray-400 text-right">
                  - Created On {note.createdAt.substring(0, 10)}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to={`/note/${note._id}`}>
                  <button className=" mr-10 mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                    Read
                  </button>
                </Link>
                <Link to={`/notes/${note._id}`}>
                  <button className=" mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteHandler(note._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyNotes;
