import axios from 'axios';

const cliente = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
});

cliente.interceptors.response.use(response => response.data)

export default cliente;