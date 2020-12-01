import React, { FC } from 'react';

interface IProps {
  prev: any;
  next: any;
}

const RenderArrows: FC<IProps> = ({ prev, next }) => {
  return (
    <div className="slider-arrows">
      <div className="slider-arrow slider-arrow--left" onClick={prev} />
      <div className="slider-arrow slider-arrow--right" onClick={next} />
    </div>
  );
};

export default RenderArrows;
