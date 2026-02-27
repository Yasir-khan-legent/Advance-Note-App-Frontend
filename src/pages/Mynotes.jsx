import React, { useEffect, useState } from "react";
import "../Components/Mynotes/mynotes.css";
import Headers from "../Components/Mynotes/headers";
import Card from "../Components/Mynotes/card";
import Addnotes from "./Addnotes.jsx";

function Mynotes() {
  const [show, setshow] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [model, setmodel] = useState(false);

  return (
    <div className="dhmain">
      {show ? (
        <Addnotes
          setshow={setshow}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
          setRefresh={setRefresh}
        />
      ) : (
        <>
          <h1>
            <i className="fa-regular fa-user"></i> MY Notes
          </h1>
          <Headers setshow={setshow} setEditingNote={setEditingNote} />
          <Card
            notes={notes}
            setNotes={setNotes}
            setshow={setshow}
            setEditingNote={setEditingNote}
            refresh={refresh}
          />
        </>
      )}
    </div>
  );
}

export default Mynotes;
