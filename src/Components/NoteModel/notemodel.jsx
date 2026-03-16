import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getnote } from "../../Service/Api";
import "./notemodel.css";

function Noteshow() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  function pagechnge() {
    const from = location.state?.from || "/dashboard";
    navigate(from);
  }

  useEffect(() => {
    async function fetchNote() {
      try {
        setLoading(true);
        const res = await getnote(id);
        console.log('data fetch', res);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNote();
  }, [id]);

  if (loading) {
    return (
      <div className="noteshow-loading">
        <div className="loading-spinner"></div>
        <p>Loading note...</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="noteshow-error">
        <i className="fa-regular fa-circle-exclamation"></i>
        <p>Note not found</p>
        <button onClick={pagechnge} className="error-back-btn">
          <i className="fa-solid fa-arrow-left"></i> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="noteshow-overlay">
      <div className="noteshow-container">
        <button className="noteshow-close-btn" onClick={pagechnge}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="noteshow-header">
          <h1 className="noteshow-title">
            <i className="fa-solid fa-book-open-reader"></i> 
            {note.title.length > 40 ? note.title.slice(0, 40) + "..." : note.title}
            {note.tag && (
              <span className="noteshow-tag">
                #{note.tag.length > 15 ? note.tag.slice(0, 15) + "..." : note.tag}
              </span>
            )}
          </h1>

          <div className="noteshow-status">
            <div className={`status-badge ${note.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
              {note.status === 'pending' ? (
                <>
                  <i className="fa-solid fa-hourglass-half"></i> Pending
                </>
              ) : (
                <>
                  <i className="fa-regular fa-circle-check"></i> Completed
                </>
              )}
            </div>
            <div className={`status-badge ${note.isprivate ? 'status-private' : 'status-public'}`}>
              {note.isprivate ? (
                <>
                  <i className="fa-solid fa-eye-slash"></i> Private
                </>
              ) : (
                <>
                  <i className="fa-solid fa-eye"></i> Public
                </>
              )}
            </div>
          </div>
        </div>

        <div className="noteshow-content">
          <p className="noteshow-note">{note.note}</p>
        </div>

        <div className="noteshow-footer">
          <div className="noteshow-author">
            <i className="fa-regular fa-circle-user"></i>
            <span>
              {note.Createdby?.name?.length > 20
                ? note.Createdby.name.slice(0, 20) + "..."
                : note.Createdby?.name || "Anonymous"}
            </span>
          </div>

          <div className="noteshow-reactions">
            <div className="reaction-item">
              <i className="fa-solid fa-thumbs-up"></i>
              <span>{note.likes.length}</span>
            </div>
            <div className="reaction-item">
              <i className="fa-solid fa-thumbs-down"></i>
              <span>{note.dislike?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteshow;