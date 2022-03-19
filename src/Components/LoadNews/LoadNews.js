import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoadNews = () => {
    const [newses, setNewses] = useState([]);
    const showNews=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=037e81b1d18c4bd6877fc3785c6341a4')
        .then((response)=>{
            setNewses(response.data.articles);
        })

    }
    return (
        <>
            <button className='btn btn-primary my-3' onClick={showNews}>
                Show News
            </button>
            <div className="container">
                <div className="row g-4">
                    {
                        newses.map(news => {
                            return(
                                <div className="col-4">
                                    <div className="card">
                                        <div className="news-banner mb-3">
                                            <img src={news.urlToImage} className='img-fluid' alt="" />
                                        </div>
                                        <div className="news-details">
                                            <h3>{news.author}</h3>
                                            <p>{news.title}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default LoadNews;