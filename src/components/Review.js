import React from 'react';

export default function Review(props) {
  const {id,name, job, image, text} = props.review
  return (
    <div>
        <h1 id={`${name}-${id}`}>name: {name}</h1>
        <h3 id="job">job: {job}</h3>
        <img id="person-img" src={image} alt='image' width="100px"></img>
        <h3 id="info">info: { text }</h3>
    </div>
  );
}
