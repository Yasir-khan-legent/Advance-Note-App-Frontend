import React from "react";
import "../Components/Addnotes/form.css";
import Form from "../Components/Addnotes/form.jsx";
function Addnotes({ setshow, editingNote, setEditingNote, setRefresh }) {
  return (
    <div className="main-addnote">
      <div className="back-div">
        <h1>
          <i class="fa-solid fa-list"></i> Create Notes{" "}
        </h1>
        {/* <button className='back' onClick={()=>setshow(false)}><i class="fa-solid fa-chevron-left"></i>Back</button> */}
      </div>

      <div className="form-container">
        <Form
          setshow={setshow}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  );
}

export default Addnotes;
