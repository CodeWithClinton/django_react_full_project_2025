import api from "@/api";

export async function getBlogs() {
  try {
    const response = await api.get("blog_list");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
