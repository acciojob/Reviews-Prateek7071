import React from 'react';

export default function Review(props) {
  const { id, job, image } = props.review
  const author = props.author
  const info = props.info
  return (
    <div>
        <h1 id={`${author}-${id}`}>name: {author}</h1>
        <h3 id="job">job: {job}</h3>
        <img id="person-img" src={image} alt='image' width="100px"></img>
        <h3 id="info">info: { info }</h3>
    </div>
  );
}
