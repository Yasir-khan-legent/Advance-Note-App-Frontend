import { api } from "./axios.api";




export const Createnotes = (data) => api.post("/notes/post", data);
export const Usernotes = () => api.get("/notes/usernote");
export const Getname = () => api.get("/notes/getusername");

 


// export  function Createnotes(data) {
//     return api.post('/post',data)
// }

export  function getnote(id) {
    return api.get(`/notes/${id}`)
}
export  function Getsavenote() {
    return api.get('/notes/savenote')
}
// export function Getname(){
//     return api.get('/getusername')
// }

// export  function Usernotes() {
//     return api.get('/usernote')
// }
export  function Publicnotes() {
    return api.get('/notes/publicnotes')
}
export  function Deletenotes(id) {
    return api.delete(`/notes/delete/${id}`)
}
export  function DeleteAllnotes() {
    return api.delete('/notes/delete-all')
}
export  function Publicsearch(text) {
    return api.get(`/notes/publicsearch?query=${text}`)
}
export  function Usersearch(text) {
    return api.get(`/notes/usersearch?query=${text}`)
}
export function Updatenotes(id, data) {
  return api.put(`/notes/update/${id}`, data);
}
export  function Savenotes(id) {
    return api.post(`/notes/save/${id}`)
}
export  function Likenotes(id) {
    return api.post(`/notes/like/${id}`)
}
export  function disLikenotes(id) {
    return api.post(`/notes/Dislike/${id}`)
}

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("Token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });



export default api;
