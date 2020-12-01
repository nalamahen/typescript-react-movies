import React, { FC } from 'react';
import { ISliderImages } from '../../../interface/index';

interface IIndicators {
  currentSlide: number;
  images: ISliderImages[];
}

const Indicators: FC<IIndicators> = ({ currentSlide, images }) => {
  const listIndicators = images.map((slide, i) => {
    const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
    return <button className={btnClasses} key={i} />;
  });
  return <div className="slider-nav">{listIndicators}</div>;
};

export default Indicators;
