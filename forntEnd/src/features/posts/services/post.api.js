import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost/api/upload",
  withCredentials: true,
});

export async function createPost(caption, photo_url, userId) {
  const response = await api.post("/createPost", caption, photo_url, userId);

  return response.data;
}
