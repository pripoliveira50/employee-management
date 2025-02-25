import axios from "axios";

const api = axios.create({
  baseURL:
    "https://gist.github.com/pripoliveira50/355b71c799ff51da3febfc6f03b3aac4",
});

export default api;
