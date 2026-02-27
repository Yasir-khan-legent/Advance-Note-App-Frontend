import React, { useEffect, useState } from 'react'
import { Getname, Usernotes } from '../../Service/Api'
import { DeleteAccount, logout } from '../../Service/Auth.api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Infopage() {


    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [save,setsave]=useState([])
    const [note,setnote]=useState([])
    const [privat,setprivate] =useState([])
    const navigate = useNavigate()

async function deleteAccountHandler() {
  const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
  if (!confirmDelete) return;

  try {
    await DeleteAccount();  

    toast.success("Your account has been deleted successfully!");

   
    setTimeout(() => {
      navigate('/');
    }, 500);
    
  } catch (error) {
    console.error('Error deleting account:', error);
    toast.error("Failed to delete account. Please try again.");
  }
}

async function Logout(){
    try {
    await logout()
      localStorage.removeItem("Token");
    navigate('/',{replace:true})
    } catch (error) {
        console.log('logout error',error)
    }
}


    async function getusernotes() {
      try {
        const result = await Usernotes();
         const privateNotes = result.data.filter(note => note.isprivate === true);
         setprivate(privateNotes)
     setnote(result.data)
      } catch (error) {
        console.log("Error fetching notes:", error);
        return null;
      }
    }

    
    async function getuser() {
      try {
        const res = await Getname()
        console.log(res)
        setname(res.data.name)
        setemail(res.data.email)
        setsave(res.data.savenotes)

      } catch (error) {
        console.log("Frontend error",error)
      }
    }
    useEffect(()=>{
    getuser()
    getusernotes()
    },[])

  return (
  <div>
     <div className='dhmain'>
<h1><i class="fa-solid fa-people-roof"></i>  Profile </h1>
  <div className='profile-main'>
<div className='img'>
{name.
          length > 1
                  ? name.slice(0, 1) 
                  : name}

</div>

<div className='user'>
<h1>
    {name}
</h1>
<h2>
    {email}
</h2>
<span>
    Administiator
</span>
</div>

<div className='profile-btn'>
<button className='logout' onClick={Logout}>Logout  <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
<button className='delte' onClick={deleteAccountHandler}>Delete Account <i class="fa-solid fa-trash"></i></button>
</div>
     </div>

     <div className='main2p'>
<div className='total'>
<div>
<i class="fa-solid fa-book-open-reader"></i>
</div>

    <h1>Total Notes :</h1>
    <h2>{note.length}</h2>


</div>

<div className='total'>
<div>
<i class="fa-regular fa-floppy-disk"></i>
</div>

    <h1>Save Notes :</h1>
    <h2>{save.length}</h2>
</div>

<div className='total'>
<div>
<i class="fa-solid fa-lock"></i>
</div>

    <h1>Private Notes :</h1>
    <h2>{privat.length}</h2>
</div>
     </div>
     </div>
    </div>
  )
}

export default Infopage
