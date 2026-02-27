import React, { useEffect, useState } from "react";
import { getusernotes } from "./CardData.js";
import img from "../images/Notfound.png";
import { Deletenotes } from "../../Service/Api.js";
import { Link, useLocation } from "react-router-dom";

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
  }, [refresh]);
  const object = {
    _id: "1",
    title: "React Basics",
    note: "Learn useState, useEffect and props in React.",
    tag: "React",
    status: "pending",
    isprivate: true,
    likes: [],
  };
  async function handledelete(id) {
    try {
      await Deletenotes(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.log("Frontend error ", error.message);
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
              <h1>  {n.title.length > 15
                  ? n.title.slice(0, 15) + "..."
                  : n.title}</h1>
              <div className="view">
                <button>{n.isprivate ? "Private" : "Public"}</button>
                <span >
                 
                  <Link to={`/dashboard/notemodel/${n._id}`}  state={{ from: location.pathname }} > <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </span>
              </div>
            </div>

            <div className="title">
              <p>{n.note}</p>
            </div>

            <div className="card-likes">
              <span className="tag">#{n.tag.length > 10
                  ? n.tag.slice(0, 10) + "..."
                  : n.tag}</span>
              <div className="likem">
                <div className="likes">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span>{n.likes?.length || 0} - Likes</span>
                </div>
                            <button className={n.status === 'completed' ? 'status-btn' : 'status-btn-p'}>
  {n.status === 'pending' ? (
    <>
      <i className="fa-solid fa-hourglass-half"></i> Pending
    </>
  ) : (
    <>
      <i className="fa-regular fa-circle-check"></i> Completed
    </>
  )}
</button>
              </div>
            </div>

            <div className="card-btn">
              <div className="crud-btn">
                <button
                  onClick={() => handleedit(n)}
                  style={{ background: "green" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handledelete(n._id)}
                  style={{ background: "red" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="Nofound">
          <img src={img} alt="No notes found" />
        </div>
      )}
    </div>
  );
}

export default Card;
