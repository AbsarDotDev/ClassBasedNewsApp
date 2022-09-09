import React, { Component } from 'react'

export class Newscard extends Component {
  render() {
    let {title, desc, imgUrl, url }=this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
export default Newscard

