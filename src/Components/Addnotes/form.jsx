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
    <div>
      <input
        className="notetitle"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Note Title..."
      />

      <div className="text-main">
        <div className="tag-div">
          <span className="ntag">Tags</span>
          <input
            type="text"
            onChange={(e) => settag(e.target.value)}
            value={tag}
            className="taginput"
            placeholder="Tag Your Note..."
          />
        </div>

        <h1>Note</h1>
        <textarea
          value={note}
          onChange={(e) => setnote(e.target.value)}
          className="notearea"
          placeholder="Write your note here..."
        />
      </div>

      <div className="bottom-div">
        <div className="status-box">
          <label className="status-label">Status</label>
          <div className="status-options">
            <label>
              <input
                type="radio"
                name="isprivate"
                checked={type === false}
                onChange={() => settype(false)}
              />{" "}
              Public
            </label>

            <label>
              <input
                type="radio"
                name="isprivate"
                checked={type === true}
                onChange={() => settype(true)}
              />{" "}
              Private
            </label>
          </div>
        </div>

        <div className="status-select-box">
          <label className="status-select-label">Task Status</label>
          <select
            className="status-select"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="botton-btn">
        <div>
          <button
            onClick={() => {
              setshow(false);
            }}
            className="cancel"
          >
            Cancel
          </button>
          <button className="add" onClick={handleSubmit}>
            {editingNote ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addnotes;
