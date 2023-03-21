import React, {useEffect, useState} from "react";
import Axios from 'axios';
import NewsCard from "./NewsCard";
const NewsList = () => {
    const [articles, setArticles] = useState([]);


useEffect (()=>{
    const getArticles = async () => {
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=1f93e82d73464a6689bbcdceacf77aa7");
        setArticles(res.data.articles)
        console.log(res);
    };
    getArticles();
},[]);


    return <div>
        
        {articles.map(({title,desription,url,urlToImage}) => (
            <NewsCard
             title = {title} 
             description = {desription} 
             url = {url} 
             urlToImage = {urlToImage} 
             />
        ))}
    </div>;
};


export default NewsList;

