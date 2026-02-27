import React from 'react'
import { DeleteAllnotes, Usernotes } from '../../Service/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Headers({ setshow, setEditingNote,notes }) {
  async function confirmDelete(closeToast) {
    await DeleteAllnotes();
    closeToast();
    toast.success("All notes deleted");
  }

  function deletenotes() {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete all notes?</p>

          <div style={{ marginTop: "10px", color:"green", }}>
            <button onClick={() => confirmDelete(closeToast)}>
              Yes
            </button>

            <button
              onClick={closeToast}
              style={{ marginLeft: "10px",color:"red" }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false }
    );
  
  }

  return (
    <div>
      <div className='header'>
        <input type="text" className='mysearch' placeholder='Search Notes' />

        <div className='btns'>
          <button>Search</button>

          <button onClick={() => {
            setshow(true);
            setEditingNote(null);
          }}>
            New <i className="fa-solid fa-plus"></i>
          </button>

          <button onClick={deletenotes}>
            Reset <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </div>
      </div>

      {/* MUST RENDER THIS */}
      <ToastContainer />
    </div>
  )
}

export default Headers