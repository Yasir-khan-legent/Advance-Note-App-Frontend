import React, { useEffect, useState } from 'react';
import { Getname, Getsavenote, Likenotes, Savenotes } from '../../Service/Api';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import './note.css';

function Note() {
    const [notes, setnote] = useState([]);
    const [userId, setUserId] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    async function getuser() {
        try {
            const res = await Getname();
            console.log(res);
            setUserId(res.data.id);
            setSavedNotes(res.data.savenotes);
        } catch (error) {
            console.log("Frontend error", error);
        }
    }

    async function handleLike(noteId) {
        try {
            await Likenotes(noteId);
            toast.success("Note liked!");
            getsavenote();
        } catch (error) {
            console.log(error);
            toast.error("Failed to like note");
        }
    }

    async function handlesave(noteId) {
        try {
            await Savenotes(noteId);
            setnote(prev => prev.filter(n => n._id !== noteId));
            toast.success("Note removed from saved!");
            getuser();
            getsavenote();
        } catch (error) {
            console.log(error);
            toast.error("Failed to unsave note");
        }
    }

    async function getsavenote() {
        try {
            setLoading(true);
            const res = await Getsavenote();
            setnote(res.data);
            console.log('savnotes here', res.data);
        } catch (error) {
            console.log('Savenote ', error);
            toast.error("Failed to load saved notes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getsavenote();
        getuser();
    }, []);

    if (loading) {
        return (
            <div className="saved-loading">
                <div className="loading-spinner"></div>
                <p>Loading saved notes...</p>
            </div>
        );
    }

    return (
        <div className="saved-notes-container">
            <div className="saved-header">
                <h1>
                    <i className="fa-regular fa-bookmark"></i> 
                    Saved Notes
                </h1>
                <p className="saved-count">{notes.length} notes saved</p>
            </div>

            {notes.length === 0 ? (
                <div className="no-saved-notes">
                    <i className="fa-regular fa-bookmark"></i>
                    <h2>No saved notes yet</h2>
                    <p>Notes you save will appear here</p>
                    <Link to="/dashboard" className="browse-notes-btn">
                        <i className="fa-solid fa-compass"></i> Browse Notes
                    </Link>
                </div>
            ) : (
                <div className='card-main'>
                    {notes.map((note) => (
                        <div className="dcard" key={note._id}>
                            {/* Card Header */}
                            <div className="card-header">
                                <h2 className="card-title">
                                    {note.title?.length > 15
                                        ? note.title.slice(0, 15) + "..."
                                        : note.title || "Untitled"}
                                </h2>
                                <div className="view">
                                    <button className="privacy-badge">
                                        <i className="fa-solid fa-globe"></i> Public
                                    </button>
                                    <span className="view-icon">
                                        <Link to={`/dashboard/notemodel/${note._id}`} state={{ from: location.pathname }}>
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            {/* Note Content */}
                            <div className="title">
                                <p className="note-content">
                                    {note.note?.length > 30
                                        ? note.note.slice(0, 30) + "..."
                                        : note.note || "No content"}
                                </p>
                                {note.tag && (
                                    <span className="note-tag">
                                        #{note.tag.length > 8 ? note.tag.slice(0, 8) + "..." : note.tag}
                                    </span>
                                )}
                            </div>

                            {/* Note Metadata */}
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
                                        <span>{note.likes?.length || 0}</span>
                                    </div>
                                    <button className={`status-badge ${note.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
                                        {note.status === 'pending' ? (
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

                            {/* Action Buttons */}
                            <div className="card-btn">
                                <div className="like-mains">
                                    <div
                                        className={`like-btn ${note.likes?.includes(userId) ? 'liked' : ''}`}
                                        onClick={() => handleLike(note._id)}
                                    >
                                        {note.likes?.includes(userId) ? (
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        ) : (
                                            <i className="fa-regular fa-thumbs-up"></i>
                                        )}
                                        <span>Like</span>
                                    </div>
                                </div>

                                <button 
                                    className="unsave-btn"
                                    onClick={() => handlesave(note._id)}
                                >
                                    <i className="fa-regular fa-bookmark"></i>
                                    <span>Unsave</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Note;