import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost/api/",
  withCredentials: true,
});

export async function createPost(caption, photo_url, userId) {
  const response = await api.post("upload", caption, photo_url, userId);
}
