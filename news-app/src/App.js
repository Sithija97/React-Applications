
import './App.css';
import NewsCard from './components/NewsCard' 
import Header from './components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const APP_KEY = 'f22bd744b661454684526600f86812bb'

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getNews();
  }, [])

  const getNews = async () => {
    const data = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${APP_KEY}`)
    console.log(data.data.articles)
    setArticles(data.data.articles)
  }
  return (
    <div className="container">
      <Header/>
      <div className="row">
        {articles.map(article =>(
          <NewsCard
          title={article.title}
          description={article. description}
          image={article.urlToImage}/>
        ))}
      </div>
    </div>
  );
}

export default App;
