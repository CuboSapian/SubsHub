import React from 'react';
import { Row } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (

        <Row key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
        </Row>
      ))}
    </div>
  );
};

export default Rating;