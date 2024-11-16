import api from "@/api";

export async function getBlogs(page) {
  try {
    const response = await api.get(`blog_list?page=${page}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
