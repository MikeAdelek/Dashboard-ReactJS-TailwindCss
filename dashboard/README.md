# Event Dashboard - React + TailwindCSS + Live News API

A modern, responsive event management dashboard built with React.js and TailwindCSS, now featuring live news integration.

🚀 Features

- Responsive Design: Fully responsive layout that works on mobile, tablet, and desktop
- Dark/Light Mode: Built-in theme switching with TailwindCSS
- Live News Integration: Real-time news updates relevant to events
- Interactive Dashboard:
  - Event statistics overview
  - Monthly registration charts
  - Event history table
  - Image carousel for announcements
- Event Management:
  - Event status tracking
  - Speaker management
  - Attendee tracking
  - Event registration analytics

🛠️ Tech Stack

- React - Frontend framework
- TailwindCSS - Styling
- Vite - Build tool
- Recharts - Data visualization
- React Router - Navigation
- Lucide React - Icons
- React Icons - Additional icons
- Axios - HTTP client for API calls
- News API / NewsAPI.org - Live news data source

🌐 API Integration Setup

### News API Configuration

1. Sign up for a News API key:
   - Visit [NewsAPI.org](https://newsapi.org/)
   - Create a free account
   - Obtain your API key

2. Install required dependencies:

```bash
npm install axios dotenv
```

3. Create a `.env` file in the project root:

```
VITE_NEWS_API_KEY=your_news_api_key_here
VITE_NEWS_API_ENDPOINT=https://newsapi.org/v2/top-headlines
```

4. Create a news service (recommended location: `src/services/newsService.js`):

```javascript
import axios from 'axios';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_ENDPOINT = import.meta.env.VITE_NEWS_API_ENDPOINT;

export const fetchNews = async (category = 'technology', country = 'us') => {
  try {
    const response = await axios.get(NEWS_API_ENDPOINT, {
      params: {
        apiKey: NEWS_API_KEY,
        category,
        country,
        pageSize: 5  // Adjust number of articles as needed
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
```

5. Add a News Component (e.g., `src/Components/NewsWidget.jsx`):

```jsx
import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/newsService';

const NewsWidget = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };
    loadNews();
    
    // Optional: Refresh news periodically
    const interval = setInterval(loadNews, 15 * 60 * 1000); // Every 15 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-widget p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      {news.map((article, index) => (
        <div key={index} className="mb-3 pb-3 border-b">
          <h3 className="font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsWidget;
```

### API Integration Best Practices

- Use environment variables to store sensitive API keys
- Implement error handling for API requests
- Add loading states and error messages
- Cache news results to reduce unnecessary API calls
- Implement rate limiting and respect API usage guidelines

### Additional API Configuration Options

- Support multiple news categories
- Add geolocation-based news fetching
- Implement news search functionality

🚦 Getting Started

1. Clone the repository

```bash
git clone <https://github.com/yourusername/Dashboard-ReactJS-TailwindCss.git
cd Dashboard-ReactJS-TailwindCss/dashboard
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

- Copy `.env.example` to `.env`
- Add your NewsAPI key

4. Start development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

📁 Updated Project Structure

```
dashboard/
├── src/
│   ├── Components/
│   │   ├── Dashboard.jsx
│   │   ├── NewsWidget.jsx         # New News Component
│   │   └── ...
│   ├── services/
│   │   └── newsService.js         # News API service
│   ├── constants/
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
└── ...
```

🎨 New Features

- Live News Integration
  - Real-time news updates
  - Configurable news categories
  - Error handling and loading states

📄 License
MIT License

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### Recommended Next Steps

- Implement more advanced news filtering
- Add news caching mechanism
- Create more interactive news components

```
