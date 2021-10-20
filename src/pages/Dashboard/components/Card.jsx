import * as React from 'react';

const Card = (props) => {
  const { title, dailyNote, humor } = props.daily
  return (
    <>
      <h1>{title}</h1>
      <p>{dailyNote}</p>
      <h3>{humor}</h3>
    </>
  );
}

export default Card;