import axios from 'axios';

axios.defaults.baseURL = 'https://job-api-drf.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true