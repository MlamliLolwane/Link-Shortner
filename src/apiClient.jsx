import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

let baseURI = '';

if (import.meta.env.MODE === 'development') {
  baseURI = 'http://localhost:5080/api/';
} else if (import.meta.env.MODE === 'production') {
  baseURI = 'https://lynkly.mrlolwane96.workers.dev/api'; //
}

const apiClient = axios.create({
  baseURL: baseURI,
  headers,
});

export default apiClient;
