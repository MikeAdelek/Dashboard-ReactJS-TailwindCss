import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_ENDPOINT = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async (category = "technology", country = "us") => {
  try {
    const response = await axios.get(NEWS_API_ENDPOINT, {
      params: {
        apiKey: NEWS_API_KEY,
        category,
        country,
        pageSize: 5
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching News:", error);
    return [];
  }
};

export const searchNews = async (query, category = "") => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        apiKey: NEWS_API_KEY,
        q: query,
        category: category,
        sortBy: "publishedAt",
        pageSize: 10
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching News:", error);
    return [];
  }
};
