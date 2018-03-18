//This component will be showing the result from the search bar. 

import React, {Component} from 'react';




class News extends Component{
    render(){
        const { articles, loading } = this.props;
        if(loading) return (
            <div className="loader">
            <h4 >Loading news...</h4>
            </div>
        )
        if(!articles) return (
            <div className="loader">
        <h4>    No news found </h4>
        </div>
        )
        return articles.map((article) => {
            return (

                
                <div >
               
                    <br/> <br/>
                     <h1><b><a href={article.url} target="_blank">{article.title}</a></b></h1>
                     <br/><br/>
                     <div className="row" >
              
                     <div className="col-md-8" >   
                   

                    <div className= "images"><a href = {article.url} target="_blank"><img src= {article.urlToImage} className="img-fluid" alt="Responsive image" /></a></div>

                    </div>
                    <br />
                    <div className="col-md-4" >
                    <h3>{article.description}</h3>
                    </div>
                    <br/>
                   
                    
                </div>
                </div>
            )
        })
    }
}


export default News;