import React from 'react';

export default function Review(props) {
  const {id,author, job, image, info} = props
  return (
    <div>
        <h1 id={`${author}-${id}`}>{author}</h1>
        <h3 id="job">{job}</h3>
        <img id="person-img" src={image} alt='image'></img>
        <h3 id="info">{ info }</h3>
    </div>
  );
}
