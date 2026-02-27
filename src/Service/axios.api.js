import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// ✅ REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ✅ RESPONSE INTERCEPTOR (REFRESH LOGIC)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const refreshRes = await api.post("/auth/refresh");
console.log("refresh token here",refreshRes)
        const newToken = refreshRes.data.token;

        if (!newToken) throw new Error("No new token received");

        // 🔥 overwrite old token
        localStorage.setItem("Token", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("Token");
        // window.location.href = "/login"; // optional
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export {api,refreshApi};