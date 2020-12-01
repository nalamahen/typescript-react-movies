import React, { FC, useEffect, useState } from 'react';
import Indicators from './Indicators';

import './SlideShow.scss';
import RenderArrows from './RenderArrows';
import { ISliderImages } from '../../../interface';

interface IProps {
  images: ISliderImages[];
  auto: boolean;
  showArrow: boolean;
}

const SlideShow: FC<IProps> = ({ images, auto, showArrow }) => {
  let currentSliderIndex = 0;

  const [slider, setSlider] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderInterval, setSliderInterval] = useState<number | any>(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      autoMoveSlider();
    }, 5000);

    setSliderInterval(timeInterval);

    return () => {
      clearInterval(timeInterval);
      clearInterval(sliderInterval);
    };
  }, []);

  const autoMoveSlider = () => {
    let lastIndex = 0;
    if (auto) {
      lastIndex = currentSliderIndex + 1;
      currentSliderIndex = lastIndex >= images.length ? 0 : lastIndex;

      setSlider((prev) => ({
        ...prev,
        slideShow: images[currentSliderIndex],
        slideIndex: currentSliderIndex
      }));
    }
  };

  const moveSliderWithArrow = (type: string) => {
    let index = currentIndex;
    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index--;
      }
    } else {
      if (currentIndex < images.length) {
        index++;
      }
      if (index === images.length) {
        index = 0;
      }
    }

    setCurrentIndex(index);
    setSlider((prev) => ({
      ...prev,
      slideShow: images[index],
      slideIndex: index
    }));
  };

  const { slideShow, slideIndex } = slider;

  return (
    <>
      <div className="slider">
        <div className="slider-slides">{images && images.length && slideShow && <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>}</div>
      </div>
      <Indicators currentSlide={slideIndex} images={images} />
      {showArrow && <RenderArrows prev={() => moveSliderWithArrow('prev')} next={() => moveSliderWithArrow('next')} />}
    </>
  );
};

export default SlideShow;
