import React, { useEffect, useState } from "react";
import { getusernotes } from "./CardData.js";
import img from "../images/Notfound.png";
import { Deletenotes } from "../../Service/Api.js";
import { Link, useLocation } from "react-router-dom";
import './mynotes.css';

function Card({ notes, setNotes, setEditingNote, setshow, refresh }) {
  const location = useLocation();

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await getusernotes();
        console.log("Fetched Notes:", res);
        const notesArray = res?.data || res || [];

        if (Array.isArray(notesArray)) {
          setNotes(notesArray);
        } else {
          setNotes([]);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
        setNotes([]);
      }
    }

    fetchNotes();
  }, [refresh, setNotes]);

  async function handledelete(id) {
    try {
      await Deletenotes(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Frontend error ", error.message);
      toast.error("Failed to delete note");
    }
  }

  function handleedit(n) {
    console.log("editing", n);
    setEditingNote(n);
    setshow(true);
  }

  return (
    <div className="card-container">
      {Array.isArray(notes) && notes.length > 0 ? (
        notes.map((n) => (
          <div key={n._id} className="dcard">
            <div className="card-header">
              <h1 className="card-title">
                {n.title.length > 15
                  ? n.title.slice(0, 15) + "..."
                  : n.title}
              </h1>
              <div className="view">
                <button className={`privacy-badge ${n.isprivate ? 'private' : 'public'}`}>
                  {n.isprivate ? "Private" : "Public"}
                </button>
                <span className="view-icon">
                  <Link to={`/dashboard/notemodel/${n._id}`} state={{ from: location.pathname }}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="title">
              <p className="note-content">
                {n.note.length > 40 ? n.note.slice(0, 40) + "..." : n.note}
              </p>
            </div>

            <div className="card-likes">
              <span className="tag">#{n.tag.length > 10 ? n.tag.slice(0, 10) + "..." : n.tag}</span>
              <div className="likem">
                <div className="likes">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span>{n.likes?.length || 0}</span>
                </div>
                <button className={`status-badge ${n.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
                  {n.status === 'pending' ? (
                    <>
                      <i className="fa-solid fa-hourglass-half"></i>
                      <span className="status-text">Pending</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-regular fa-circle-check"></i>
                      <span className="status-text">Completed</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="card-btn">
              <div className="crud-btn">
                <button
                  onClick={() => handleedit(n)}
                  className="edit-btn"
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handledelete(n._id)}
                  className="delete-btn"
                >
                  <i className="fa-regular fa-trash-can"></i>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="Nofound">
          <img src={img} alt="No notes found" />
          <p className="no-notes-text">No notes found. Create your first note!</p>
        </div>
      )}
    </div>
  );
}

export default Card;