import React, { useEffect, useState } from 'react'
import { disLikenotes, Getname,  Getsavenote, Likenotes, Publicnotes, Savenotes } from '../../Service/Api'
import { Link, useLocation } from "react-router-dom";
import { isAuthenticated } from '../../Service/Auth.api';


function Notescard() {
  const [notes, setNotes] = useState([])
  const [userId, setUserId] = useState(null)
const [savedNotes, setSavedNotes] = useState([])
  const [name,setname]=useState("")
const location = useLocation();
const islogin = isAuthenticated()

async function handlesave(noteId) {
  try {
    await Savenotes(noteId)
    getuser()    
  } catch (error) {
    console.log(error)
  }
}

async function handleLike(noteId) {
  try {
    await Likenotes(noteId)
    fetchnotes() 
  } catch (error) {
    console.log(error)
  }
}
async function handledisLike(noteId) {
  try {
    await disLikenotes(noteId)
    fetchnotes() 
  } catch (error) {
    console.log(error)
  }
}
  
  async function getuser() {
    try {
      const res = await Getname()
      console.log(res)
      setname(res.data.name)
      setUserId(res.data.id)
        setSavedNotes(res.data.savenotes)
    } catch (error) {
      console.log("Frontend error",error)
    }
  }
  useEffect(()=>{
  getuser()


  },[])

  async function fetchnotes() {
    try {
      const res = await Publicnotes()
      setNotes(res.data)
      console.log('public',res.data)
    } catch (error) {
      console.log('Frontend Error', error)
    }
  }

  useEffect(() => {
    fetchnotes()
  }, [])

  return (
    <div className="card-main">
      {notes.map((note) => (
        <div className="dcard" key={note._id}>

          {/* HEADER */}
          <div className="card-header">
            <h1> {note.title.length > 15
                  ? note.title.slice(0, 15) + "..."
                  : note.title}</h1>
            <div className="view">
              <button>Public</button>
              <span>
              <Link to={`/dashboard/notemodel/${note._id}`}  state={{ from: location.pathname }}> <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="title">
            <p>
              {note.note.length > 30
                ? note.note.slice(0, 30) + "..."
                : note.note}
            </p>
            <span>#{note.tag.length > 8
                  ? note.tag.slice(0, 8) + "..."
                  : note.tag}</span>
          </div>

          {/* LIKES + OWNER */}
          <div className="card-likes">
            <div className="owner-main">
              <i className="fa-solid fa-user"></i>
              <span>
  {note.Createdby?.name?.length > 10
    ? note.Createdby.name.slice(0, 10) + "..."
    : note.Createdby?.name}
</span>
            </div>

            <div className="likem">
              <div className="likes">
                <i className="fa-solid fa-thumbs-up"></i>
                <span>{note.likes.length}</span>
                <span> - Likes</span>
              </div>
              <button className={note.status === 'completed' ? 'status-btn' : 'status-btn-p'}>
  {note.status === 'pending' ? (
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

          {islogin ?(
               <div className="card-btn">
            <div className="like-main">
          <div
  className="divright"
  onClick={() => handleLike(note._id)}
>
  {note.likes.includes(userId)
    ? <i className="fa-solid fa-thumbs-up"></i>
    : <i className="fa-regular fa-thumbs-up"></i>
  }
</div>
     <div
  className="divleft"
  onClick={() => handledisLike(note._id)}
>
  {note.dislike.includes(userId)
    ? <i class="fa-solid fa-thumbs-down"></i>
    : <i class="fa-regular fa-thumbs-down"></i>
  }
</div>

           
            </div>

            <button onClick={() => handlesave(note._id)}>
  {savedNotes.includes(note._id)
    ? "Unsaved"
    : "Saved"
  }
</button>
          </div>
          ):(
            <p>..........................................................................</p>
          )}
 
          {/* <div className="card-btn">
            <div className="like-main">
          <div
  className="divright"
  onClick={() => handleLike(note._id)}
>
  {note.likes.includes(userId)
    ? <i className="fa-solid fa-thumbs-up"></i>
    : <i className="fa-regular fa-thumbs-up"></i>
  }
</div>
     <div
  className="divleft"
  onClick={() => handledisLike(note._id)}
>
  {note.dislike.includes(userId)
    ? <i class="fa-solid fa-thumbs-down"></i>
    : <i class="fa-regular fa-thumbs-down"></i>
  }
</div>

           
            </div>

            <button onClick={() => handlesave(note._id)}>
  {savedNotes.includes(note._id)
    ? "Unsaved"
    : "Saved"
  }
</button>
          </div> */}

        </div>
      ))}
    </div>
  )
}

export default Notescard
