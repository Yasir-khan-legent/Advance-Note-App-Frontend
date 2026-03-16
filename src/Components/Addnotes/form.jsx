import React, { useState, useEffect } from "react";
import "../Addnotes/form.css";
import { Createnotes, Updatenotes } from "../../Service/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addnotes({ setshow, editingNote, setEditingNote, setRefresh }) {
  const [title, settitle] = useState("");
  const [tag, settag] = useState("");
  const [note, setnote] = useState("");
  const [status, setstatus] = useState("pending");
  const [type, settype] = useState(true);

  useEffect(() => {
    if (editingNote) {
      settitle(editingNote.title || "");
      settag(editingNote.tag || "");
      setnote(editingNote.note || "");
      setstatus(editingNote.status || "pending");
      settype(editingNote.isprivate ?? true);

      console.log("useeffect run");
    } else {
      settitle("");
      settag("");
      setnote("");
      setstatus("pending");
      settype(true);
      console.log("Usefect else run");
    }
  }, [editingNote]);

  async function handleSubmit() {
    const obj = { title, tag, note, status, isprivate: type };

    try {
      if (editingNote) {
        await Updatenotes(editingNote._id, obj);
        toast.success("Note Updated");
      } else {
        await Createnotes(obj);
        toast.success("Note Created");
      }

      setRefresh((prev) => !prev);
      setEditingNote(null);
      setshow(false);
    } catch {
      toast.error("Operation Failed");
    }
  }

  return (
    <div className="addnotes-containers">
      {/* Header with back button */}
      <div className="back-div">
        <h2 className="form-title">{editingNote ? "Edit Note" : "Create New Note"}</h2>
        <button className="back" onClick={() => setshow(false)}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </div>

      {/* Title Input */}
      <div className="title-wrapper">
        <input
          className="notetitle"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Note Title..."
        />
      </div>

      {/* Tag Input */}
      <div className="tag-div">
        <span className="ntag">
          <i className="fa-solid fa-tag"></i> Tags
        </span>
        <input
          type="text"
          onChange={(e) => settag(e.target.value)}
          value={tag}
          className="taginput"
          placeholder="Tag Your Note..."
        />
      </div>

      {/* Note Content */}
      <div className="text-main">
        <h1>
          <i className="fa-regular fa-note-sticky"></i> Note
        </h1>
        <textarea
          value={note}
          onChange={(e) => setnote(e.target.value)}
          className="notearea"
          placeholder="Write your note here..."
        />
      </div>

      {/* Status Options */}
      <div className="bottom-div">
        <div className="status-box">
          <label className="status-label">
            <i className="fa-solid fa-globe"></i> Privacy
          </label>
          <div className="status-options">
            <label className={type === false ? 'active' : ''}>
              <input
                type="radio"
                name="isprivate"
                checked={type === false}
                onChange={() => settype(false)}
              />
              <i className="fa-solid fa-eye"></i> Public
            </label>

            <label className={type === true ? 'active' : ''}>
              <input
                type="radio"
                name="isprivate"
                checked={type === true}
                onChange={() => settype(true)}
              />
              <i className="fa-solid fa-eye-slash"></i> Private
            </label>
          </div>
        </div>

        <div className="status-select-box">
          <label className="status-select-label">
            <i className="fa-solid fa-clock"></i> Task Status
          </label>
          <select
            className="status-select"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
          >
            <option value="pending">
              <i className="fa-solid fa-hourglass-half"></i> Pending
            </option>
            <option value="completed">
              <i className="fa-regular fa-circle-check"></i> Completed
            </option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="botton-btn">
        <div className="button-group">
          <button
            onClick={() => {
              setshow(false);
            }}
            className="cancel"
          >
            <i className="fa-solid fa-times"></i> Cancel
          </button>
          <button className="add" onClick={handleSubmit}>
            <i className="fa-solid fa-check"></i> {editingNote ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addnotes;