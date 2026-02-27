import React, { useEffect, useState } from 'react'
import { Getname, Getsavenote, Likenotes, Savenotes } from '../../Service/Api'
import { Link } from 'react-router-dom'

function Note() {
    const [notes,setnote]=useState([])
  const [userId, setUserId] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  
    async function getuser() {
      try {
        const res = await Getname()
        console.log(res)
        // setname(res.data.name)
        setUserId(res.data.id)
          setSavedNotes(res.data.savenotes)
      } catch (error) {
        console.log("Frontend error",error)
      }
    }


async function handleLike(noteId) {
  try {
    await Likenotes(noteId)
        getsavenote()
  } catch (error) {
    console.log(error)
  }
}


  async function handlesave(noteId) {
    try {
      await Savenotes(noteId)
       setnote(prev => prev.filter(n => n._id !== noteId))
      getuser()    
       getsavenote()
    } catch (error) {
      console.log(error)
    }
  }

 

    async function getsavenote() {
      try {
        const res = await Getsavenote()
        setnote(res.data)
        console.log('savnotes here',res.data)
      } catch (error) {
        console.log('Savenote ',error)
      }
    }

     useEffect(()=>{
      getsavenote()
        getuser()
      },[])
  return (
    <div className='card-main'>
      {notes.map((note) => (
        <div className="dcard" key={note._id}>

     
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

           
            </div>

<button onClick={() => handlesave(note._id)}>
  Unsaved
</button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Note
