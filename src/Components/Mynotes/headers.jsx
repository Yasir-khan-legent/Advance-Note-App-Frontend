import React from 'react';
import { DeleteAllnotes } from '../../Service/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './mynotes.css';

function Headers({ setshow, setEditingNote, notes }) {
  async function confirmDelete(closeToast) {
    await DeleteAllnotes();
    closeToast();
    toast.success("All notes deleted");
  }

  function deletenotes() {
    toast(
      ({ closeToast }) => (
        <div className="delete-confirm">
          <p>Are you sure you want to delete all notes?</p>
          <div className="delete-actions">
            <button onClick={() => confirmDelete(closeToast)} className="confirm-yes">
              Yes
            </button>
            <button onClick={closeToast} className="confirm-no">
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false }
    );
  }

  return (
    <div className="headers-wrapper">
      <div className='header'>
        <div className="search-wrapper">
          <input 
            type="text" 
            className='mysearch' 
            placeholder='Search Notes...' 
          />
          <button className="search-btn">Search</button>
        </div>

        <div className='btns'>
          <button 
            className="new-note-btn"
            onClick={() => {
              setshow(true);
              setEditingNote(null);
            }}
          >
            <span>New</span>
            <i className="fa-solid fa-plus"></i>
          </button>

          <button 
            className="reset-btns"
            onClick={deletenotes}
          >
            <span>Reset</span>
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Headers;