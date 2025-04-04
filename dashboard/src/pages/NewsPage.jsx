import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { fetchNews, searchNews } from "../data/NewsAPI";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("technology");
  const [loading, setLoading] = useState(false);

  const categories = [
    "technology",
    "business",
    "entertainment",
    "sports",
    "science",
    "health"
  ];

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const articles = searchQuery
          ? await searchNews(searchQuery, category)
          : await fetchNews(category);
        setNews(articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
      setLoading(false);
    };

    loadNews();
  }, [category, searchQuery]);

  return (
    <main className="flex-1 p-6 md:pl-4 lg:pl-6 bg-gray-50 dark:bg-dark-50 min-h-screen">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          News Dashboard
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:bg-dark-200 dark:border-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-2 rounded-lg text-sm capitalize transition ${
                  category === cat
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="text-center text-gray-500">Loading news...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default NewsPage;
