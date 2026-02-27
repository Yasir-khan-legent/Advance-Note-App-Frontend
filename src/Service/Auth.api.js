import {api, refreshApi } from "./axios.api.js"


 export function signup(data){
    return api.post('/auth/signup',data)
 }

 export const login = (data) => api.post('/auth/login',data)
 export const logout = () => api.get('/auth/logout')
//  export const refreshToken = () => api.post('/auth/refresh')
 export const DeleteAccount = () => api.delete('/auth/DeleteAccount')

export const isAuthenticated = () => {
  return !!localStorage.getItem("Token");
};

// let accsestoken;

// export function setaccses(token) {
//     accsestoken = token
// }

// api.interceptors.request.use((config) => {
//     if (accsestoken) {
//         config.headers.Authorization = accsestoken
//     }
//     return config
// }, (err) => Promise.reject(err))


// api.interceptors.response.use((res) => res, async (err) => {
    
//     const orginalRequest = err.config;

//     if (err?.response?.status === 401 && !orginalRequest._retry) {
//            orginalRequest._retry = true;
//         try {
//             const res = await refreshToken()
//             console.log(res.data.token);
//             accsestoken = res.data.token
//             orginalRequest.headers.Authorization = accsestoken
//             return api(orginalRequest)
//         } catch (error) {
//             await logout()
//             console.log('Logout');
//              accsestoken = null; 
//              return Promise.reject(error)

//         }
//     }
//     return Promise.reject(err)
// }
// )

