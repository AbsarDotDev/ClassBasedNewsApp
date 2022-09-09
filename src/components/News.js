import React, { Component, useState } from 'react'
import Newscard from './Newscard'


export class News extends Component {
    constructor()
    {
        super();
        this.state={
            article:[],
loading:false
        }
        
    }
   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.vat}&apiKey=957dd84bf88d4cfaa3a360eb4bec9dcc`;
        let data=await (await fetch(url)).json();

this.setState(
    {article:data.articles}
    );
    }
  render() {
    return (
<div className='container'>
<div className='row'>
      {this.state.article.map((element)=>{
            return <div className='col-md-4' key={element.url}>
<Newscard title={element.title} desc={element.description} imgUrl={element.urlToImage? element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/5/59/-127wiki.jpg"} url={element.url}/>
</div>
      })}
      </div>
      </div>
    )
  }
}

export default News
