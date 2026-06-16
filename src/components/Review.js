import React from 'react';

export default function Review(props) {
  const { id, job, image } = props.review
  const author = props.author
  const info = props.info
  return (
    <div>
        <h1 className="author" id={`author-${id}`}>name: {author}</h1>
        <h3 className="job" id="job">job: {job}</h3>
        <img className="person-img" id="person-img" src={image} alt='image' width="100px"></img>
        <h3 className="info" id="info">info: { info }</h3>
    </div>
  );
}
