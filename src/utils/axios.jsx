import axios from 'axios';

// Configuración de Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambiar la URL 
});

// Configuración del interceptor para agregar el token en cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
