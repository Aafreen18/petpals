import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

const PressAndMedia = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const apiKey = import.meta.env.PROD 
            ? process.env.VITE_NEWS_API_KEY 
            : import.meta.env.VITE_NEWS_API_KEY;
         
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=pet+safety OR animal+welfare&language=en&sortBy=publishedAt&apiKey=${apiKey}`
        );
        
        const formattedArticles = response.data.articles.slice(0, 3).map((article, index) => ({
          id: index + 1,
          date: new Date(article.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          title: article.title,
          description: article.description || article.content?.split('[')[0] || 'No description available',
          shortDescription: article.description?.substring(0, 100) + '...' || 'Click to read more...',
          imageUrl: article.urlToImage || 'https://via.placeholder.com/800x500?text=No+Image+Available',
          sourceUrl: article.url
        }));
        
        setArticles(formattedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]); // Return empty array instead of sample data
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div className="full-width-breakout px-4 sm:px-6 lg:px-8 py-12 bg-[#821b1f] text-center">
        <p>Loading news articles...</p>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="full-width-breakout px-4 sm:px-6 lg:px-8 py-12 bg-[#821b1f] text-center">
        <p>No articles found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="full-width-breakout px-4 sm:px-6 lg:px-8 py-12 bg-[#821b1f]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#b98a32]"
      >
        Press & Media
      </motion.h2>
      
      <div className="space-y-12">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: article.id * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#b98a32] mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-[#821b1f] mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.shortDescription}</p>
              </div>
              <motion.a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="self-start px-6 py-2 bg-[#821b1f] text-white rounded-md hover:bg-[#6a161a] transition-colors"
              >
                Read More
              </motion.a>
            </div>
            
            <div className="md:w-1/2 h-64 md:h-auto">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="absolute w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Available";
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PressAndMedia;