import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getnote } from "../../Service/Api";

function Noteshow() {
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
    const location = useLocation();

  const { id } = useParams();
  function pagechnge() {
    const from = location.state?.from || "/dashboard"; 
    navigate(from);
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await getnote(id);
      console.log('data fetch',res)
      setNote(res.data);
    }
    fetchNote();
  }, [id]);

  if (!note) return <p>Loading...</p>;
  const notes =
    "React Router ka jo error tumhein mil raha hai “No routes matched location” asal mein is baat ki taraf ishara karta hai ke browser jis URL par ja raha hai us URL ke liye React Router ko koi matching route mila hi nahi. Tumhare case mein tumne App.jsx mein /dashboard ke andar do sibling routes banaye hue hain: ek mynotes aur doosra notemodel، iska matlab yeh hai ke valid URLs sirf /dashboard/mynotes aur /dashboard/notemodel hain، jab ke /dashboard/mynotes/notemodel naam ka koi route tumne define hi nahi kiya. Lekin jab tum Mynotes page se ya kisi aur jagah se notemodel ko relative path ke zariye open karte ho، to React Router automatically usay current URL ke sath jor deta hai، jis ki wajah se URL /dashboard/mynotes/notemodel ban jata hai، aur kyun ke aisa koi route exist nahi karta is liye error aa jata hai. Is maslay ka seedha aur sahi hal yeh hai ke agar NoteModel dashboard ka alag, independent page hai to usay absolute path ke sath open karo jaise /dashboard/notemodel، aur agar tum chahte ho ke NoteModel logically Mynotes ka child ho to phir routes ko nested banana hoga aur Mynotes component ke andar <Outlet /> lagana zaroori hoga. Asal rule yeh hai ke React Router mein route ka structure aur URL ka structure bilkul match karna chahiye؛ jahan parent–child relationship hoti hai wahan <Outlet /> hota hai، aur jahan routes sibling hotay hain wahan navigation hamesha full ya absolute path ke sath ki jati hai، warna router confuse ho jata hai aur yahi error show karta hai۔";

  return (
    <div className="overlay">
      <div className="main-container">
        <button className="close-btn" onClick={pagechnge}>
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div className="headingmain">
          <h1 className="noteheading">
            <i className="fa-solid fa-book-open-reader"></i> {note.title.length > 30
                  ? note.title.slice(0, 30) + "..."
                  : note.title}
            <span className="notetag">#{note.tag.length > 10
                  ? note.tag.slice(0, 10) + "..."
                  : note.tag}</span>
          </h1>

          <div className="status-main">
            <div className={note.status === 'completed' ? 'status-l' : 'status-l-p'}>
              <h1 >
                {note.status === 'pending' ? (
    <>
      <i className="fa-solid fa-hourglass-half"></i> Pending
    </>
  ) : (
    <>
      <i className="fa-regular fa-circle-check"></i> Completed
    </>
  )}
              </h1>
            </div>
            <div className="status-r">
              <h1>
                 {note.isprivate  ? (
    <>
      <i class="fa-solid fa-eye-slash"></i> Private
    </>
  ) : (
    <>
    <i class="fa-solid fa-eye"></i> Public
    </>
  )}
              </h1>
            </div>
          </div>
        </div>

        <p>{note.note}</p>

       <div className="notemodel-like">
         <h2 className="date">CreatedBy : <i class="fa-regular fa-circle-user"></i>  {note.Createdby?.name?.length > 15
    ? note.Createdby.name.slice(0, 15) + "..."
    : note.Createdby?.name}</h2>

    <div className="note-likemain">
  <div className="likes">
                <i className="fa-solid fa-thumbs-up"></i>
                <span>{note.likes.length}</span>
                <span> - Likes</span>
              </div>
               <div className="likes">
                <i className="fa-solid fa-thumbs-up"></i>
                <span>{note.dislike.length}</span>
                <span> - DisLikes</span>
              </div>
    </div>
       </div>

   
      </div>
       
    </div>
  );
}

export default Noteshow;
