import React, { useEffect, useState } from 'react';
import { disLikenotes, Getname, Getsavenote, Publicnotes, Likenotes, Savenotes } from '../../Service/Api';
import { Link, useLocation } from "react-router-dom";
import { isAuthenticated } from '../../Service/Auth.api';
import './temp.css';

function Notescard() {
  const [notes, setNotes] = useState([]);
  const [userId, setUserId] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const islogin = isAuthenticated();

  async function handlesave(noteId) {
    try {
      await Savenotes(noteId);
      getuser();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLike(noteId) {
    try {
      await Likenotes(noteId);
      fetchnotes();
    } catch (error) {
      console.log(error);
    }
  }

  async function handledisLike(noteId) {
    try {
      await disLikenotes(noteId);
      fetchnotes();
    } catch (error) {
      console.log(error);
    }
  }

  async function getuser() {
    try {
      const res = await Getname();
      console.log(res);
      setname(res.data.name);
      setUserId(res.data.id);
      setSavedNotes(res.data.savenotes);
    } catch (error) {
      console.log("Frontend error", error);
    }
  }

  useEffect(() => {
    getuser();
  }, []);

  async function fetchnotes() {
    try {
      setLoading(true);
      const res = await Publicnotes();
      setNotes(res.data);
      console.log('public', res.data);
    } catch (error) {
      console.log('Frontend Error', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchnotes();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading notes...</p>
      </div>
    );
  }

  return (
    <div className="dhmains">
      {/* <div className="back-div">
  
        {!islogin && (
          <Link to="/login" className="login-prompt">
            <i className="fa-solid fa-right-to-bracket"></i> Login to interact
          </Link>
        )}
      </div> */}

      {notes.length === 0 ? (
        <div className="no-notes">
          <i className="fa-regular fa-note-sticky"></i>
          <p>No public notes available</p>
        </div>
      ) : (
        <div className="card-main">
          {notes.map((note) => (
            <div className="dcard" key={note._id}>
              {/* HEADER */}
              <div className="card-header">
                <h2 className="card-titles">
                  {note.title.length > 10
                    ? note.title.slice(0, 10) + "..."
                    : note.title}
                </h2>
                
                <div className="view">
                  <button className="status-badges">{note.isprivate ? "Private": "Public"}</button>
                  <span>
                    <Link to={`/dashboard/notemodel/${note._id}`} state={{ from: location.pathname }}>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="title">
                <p className="note-content">
                  {note.note.length > 30
                    ? note.note.slice(0, 30) + "..."
                    : note.note}
                </p>
                {note.tag && (
                  <span className="note-tag">
                    #{note.tag.length > 8 ? note.tag.slice(0, 8) + "..." : note.tag}
                  </span>
                )}
              </div>

              {/* LIKES + OWNER */}
              <div className="card-likes">
                <div className="owner-main">
                  <i className="fa-solid fa-user"></i>
                  <span className="owner-name">
                    {note.Createdby?.name?.length > 10
                      ? note.Createdby.name.slice(0, 10) + "..."
                      : note.Createdby?.name || "Anonymous"}
                  </span>
                </div>

                <div className="likem">
                  <div className="likes">
                    <i className="fa-solid fa-thumbs-up"></i>
                    <span>{note.likes.length}</span>
                  </div>
                  <button className={note.status === 'completed' ? 'status-btn' : 'status-btn-p'}>
                    {note.status === 'pending' ? (
                      <>
                        <i className="fa-solid fa-hourglass-half"></i> Pending
                      </>
                    ) : (
                      <>
                        <i className="fa-regular fa-circle-check"></i> Done
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              {islogin ? (
                <div className="card-btn">
                  <div className="like-main">
                    <div
                      className={`divright ${note.likes.includes(userId) ? 'active-like' : ''}`}
                      onClick={() => handleLike(note._id)}
                    >
                      {note.likes.includes(userId)
                        ? <i className="fa-solid fa-thumbs-up"></i>
                        : <i className="fa-regular fa-thumbs-up"></i>
                      }
                    </div>
                    <div
                      className={`divleft ${note.dislike.includes(userId) ? 'active-dislike' : ''}`}
                      onClick={() => handledisLike(note._id)}
                    >
                      {note.dislike.includes(userId)
                        ? <i className="fa-solid fa-thumbs-down"></i>
                        : <i className="fa-regular fa-thumbs-down"></i>
                      }
                    </div>
                  </div>

                  <button 
                    className={`save-btn ${savedNotes.includes(note._id) ? 'saved' : ''}`}
                    onClick={() => handlesave(note._id)}
                  >
                    <i className={`fa-regular fa-${savedNotes.includes(note._id) ? 'bookmark' : 'bookmark'}`}></i>
                    {savedNotes.includes(note._id) ? " Unsaved" : " Save"}
                  </button>
                </div>
              ) : (
                <div className="login-overlay">
                  <p>Login to interact</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notescard;