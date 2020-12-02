import React, { FC, Fragment, useEffect, useState, useRef } from 'react';
import './Rating.scss';

interface IProps {
  rating: number;
  totalStars: number;
  styleClass?: string;
}

const Rating: FC<IProps> = ({ rating, totalStars, styleClass }) => {
  const [numberOfStars, setNumberOfStars] = useState<number[]>();
  const ratingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const starsArray = Array.from(Array(10).keys()).map((i) => i + 1);
    setNumberOfStars(starsArray);

    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }

    const starPercentage = `${Math.floor(percentage)}%`;

    ratingRef.current!.style.width = starPercentage;
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className={`back-stars ${styleClass}`}>
        {numberOfStars?.map((i) => (
          <Fragment key={i}>
            <i className="fa fa-star" aria-hidden="true"></i>
          </Fragment>
        ))}

        <div className={`front-stars ${styleClass}`} ref={ratingRef}>
          {numberOfStars?.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
